import React, { useEffect, useState } from "react";
import Left from "./common/Left";
import Navbar from "./common/Navbar";
import config from '../../config';

function QueryMngt() {
  const [queries, setQueries] = useState([]);
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [replyForm, setReplyForm] = useState({ email: "", subject: "", body: "" });
  const [emailSentSuccess, setEmailSentSuccess] = useState(false);
  const [isReplyFormVisible, setReplyFormVisibility] = useState(false);

  const fetchQueries = async () => {
    try {
      const response = await fetch('../api/getAllQueries');
      const data = await response.json();

      if (data.success) {
        setQueries(data.queries);
      } else {
        console.error('Failed to fetch queries');
      }
    } catch (error) {
      console.error('Error fetching queries:', error);
    }
  };

  useEffect(() => {
    fetchQueries();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`../api/deleteQuery/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();

      if (data.success) {
        // Remove the deleted query from the state
        setQueries((prevQueries) => prevQueries.filter((query) => query._id !== id));
      } else {
        console.error('Failed to delete query');
      }
    } catch (error) {
      console.error('Error deleting query:', error);
    }
  };

  const handleReply = (query) => {
    setSelectedQuery(query);
    // Set the initial values in the reply form
    setReplyForm({
      email: query.email,
      subject: `Re: ${query.subject}`,
      body: "", // You can pre-fill the body if needed
    });
    setReplyFormVisibility(true);
  };

  const handleCloseForm = () => {
    setSelectedQuery(null);
    // Clear the reply form
    setReplyForm({ email: "", subject: "", body: "" });
    // Reset the email sent success state
    setEmailSentSuccess(false);
    // Hide the reply form
    setReplyFormVisibility(false);
  };

  const handleSendReply = async () => {
    const { email, subject, body } = replyForm;

    try {
      const response = await fetch('../api/replyToQuery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, subject, body }),
      });

      const data = await response.json();

      if (data.success) {
        console.log('Email reply sent successfully');
        // Set the state to display success message
        setEmailSentSuccess(true);
        // Close the form after sending the reply
        handleCloseForm();
        // You may also want to fetch updated queries after sending the reply
        fetchQueries();
      } else {
        console.error('Failed to send email reply');
        // Optionally, you can set an error state and display an error message
      }
    } catch (error) {
      console.error('Error sending email reply:', error);
      // Optionally, you can set an error state and display an error message
    }
  };

  return (
    <>
      <Navbar />
      <section className="dash">
        <div className="container">
          <div className="row">
            <Left />
            <div className="col-md-8">
              <div>
                <h2>Query Management</h2>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Subject</th>
                      <th>Message</th>
                      <th>Action</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {queries.map((query) => (
                      <tr key={query._id}>
                        <td>{query.name}</td>
                        <td>{query.email}</td>
                        <td>{query.subject}</td>
                        <td>{query.message}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(query._id)}
                          >
                            Delete
                          </button>
                        </td>
                        <td>
                          {query.status === 'Replied' ? (
                            <button className="btn btn-primary" disabled>
                              Replied
                            </button>
                          ) : (
                            <button
                              className="btn btn-primary"
                              onClick={() => handleReply(query)}
                            >
                              Reply
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {selectedQuery && isReplyFormVisible && (
                <div className="mt-4">
                  {emailSentSuccess && (
                    <div className="alert alert-success" role="alert">
                      Email sent successfully!
                    </div>
                  )}
                  <h3>Reply to Query</h3>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendReply();
                    }}
                  >
                    <div className="mb-3">
                      <label htmlFor="from" className="form-label">
                        From:
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="from"
                        value={config.senderEmail} // Use the email from replyForm state
                        onChange={(e) => setReplyForm({ ...replyForm, email: e.target.value })}
                        readOnly // Make it read-only as it's derived from the selected query
                      />
                      <label htmlFor="to" className="form-label">
                        To:
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="to"
                        value={selectedQuery.email} // Use the email from the selected query
                        readOnly // Make it read-only as it's derived from the selected query
                      />
                      <label htmlFor="body" className="form-label">
                        Message:
                      </label>
                      <textarea
                        className="form-control"
                        id="body"
                        name="body"
                        value={replyForm.body}
                        onChange={(e) =>
                          setReplyForm({ ...replyForm, body: e.target.value })
                        }
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Send Reply
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary ms-2"
                      onClick={handleCloseForm}
                    >
                      Cancel
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default QueryMngt;
