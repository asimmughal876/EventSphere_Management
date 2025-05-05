import React from 'react';
import './Request.css';
import { FaUser, FaEdit, FaTrash } from 'react-icons/fa';

const requestData = [
  { id: 1, name: 'Andrew Mike', position: 'Develop', since: 2013, salary: '€ 99,225' },
  { id: 2, name: 'John Doe', position: 'Design', since: 2012, salary: '€ 89,241' },
  { id: 3, name: 'Alex Mike', position: 'Design', since: 2010, salary: '€ 92,144' },
  { id: 4, name: 'Mike Monday', position: 'Marketing', since: 2013, salary: '€ 49,990' },
  { id: 5, name: 'Paul Dickens', position: 'Communication', since: 2015, salary: '€ 69,201' },
];

const Request = () => {
  return (
    <div className="request-container">
      <div className="request-card">
        <div className="request-header">
          <div className="icon-box">
            <i className="fas fa-clipboard-list"></i>
          </div>
          <h3>Request Table</h3>
        </div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Job Position</th>
              <th>Since</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requestData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.position}</td>
                <td>{item.since}</td>
                <td>{item.salary}</td>
                <td className="actions">
                  <button className="btn btn-info"><FaUser /></button>
                  <button className="btn btn-success"><FaEdit /></button>
                  <button className="btn btn-danger"><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Request;
