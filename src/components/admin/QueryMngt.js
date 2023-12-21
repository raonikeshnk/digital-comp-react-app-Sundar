import React from 'react';
import Navbar from './common/Navbar';

function QueryMngt({ formData }) {
  return (
    <>
      <Navbar />
      <section className="dash">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Contact Management</h2>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{formData.name}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{formData.email}</td>
                  </tr>
                  <tr>
                    <td>Subject</td>
                    <td>{formData.subject}</td>
                  </tr>
                  <tr>
                    <td>Message</td>
                    <td>{formData.message}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default QueryMngt;
