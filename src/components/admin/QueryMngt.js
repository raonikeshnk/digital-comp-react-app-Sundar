import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    toast.info(
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ marginBottom: '10px' }}>Are you sure you want to delete this query?</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            style={{
              padding: '8px 16px',
              backgroundColor: '#dc3545',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '4px',
            }}
            onClick={() => {
              deleteQuery(id);
              toast.dismiss();
            }}
          >
            Yes
          </button>
          <button
            style={{
              padding: '8px 16px',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '4px',
            }}
            onClick={() => toast.dismiss()}
          >
            No
          </button>
        </div>
      </div>,
      {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };

  const deleteQuery = async (id) => {
    try {
      const response = await fetch(`../api/deleteQuery/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      if (data.success) {
        setQueries((prevQueries) => prevQueries.filter((query) => query._id !== id));
        toast.success('Query deleted successfully');
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
    setReplyForm({ email: "", subject: "", body: "" });
    setEmailSentSuccess(false);
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
        body: JSON.stringify({ id: selectedQuery._id, email, subject, body }),
      });

      const data = await response.json();

      if (data.success) {
        console.log('Email reply sent successfully');
        setEmailSentSuccess(true);

        handleCloseForm();

        toast.success('Email reply sent successfully');

        fetchQueries();
      } else {
        console.error('Failed to send email reply');
      }
    } catch (error) {
      console.error('Error sending email reply:', error);
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
                {emailSentSuccess && (
                  <div className="alert alert-success" role="alert">
                    Email sent successfully!
                  </div>
                )}
                {!isReplyFormVisible && queries.length > 0 ? (
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
                ) : (
                  <div className="alert alert-info text-center" role="alert">
                    No records found.
                  </div>
                )}
              </div>;
              {selectedQuery && isReplyFormVisible && (
                <div className="mt-4">
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
                      <label htmlFor="subject" className="form-label">
                        Subject:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        value={replyForm.subject}
                        onChange={(e) => setReplyForm({ ...replyForm, subject: e.target.value })}
                        readOnly
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
      <ToastContainer />
    </>
  );
}

export default QueryMngt;
