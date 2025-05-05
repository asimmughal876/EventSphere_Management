import React from 'react';
import './Addexhibitor.css';

const AddExhibitor = () => {
  return (
    <div className="form-card">
      <div className="form-header">Add Exhibitor</div>
      <form className="form-body">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Enter full name" />
        </div>

        <div className="form-group">
          <label>Company</label>
          <input type="text" placeholder="Company name" />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input type="email" placeholder="example@email.com" />
          <small className="form-help">We'll never share this with anyone else.</small>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="text" placeholder="+1234567890" />
        </div>

        <div className="form-group">
          <label>Exhibitor Category</label>
          <select>
            <option>Select category</option>
            <option>Technology</option>
            <option>Automotive</option>
            <option>Health</option>
            <option>Fashion</option>
          </select>
        </div>

        <div className="form-group">
          <label>Display Preferences</label>
          <div className="checkbox-group">
            <label><input type="checkbox" /> Show on Homepage</label>
            <label><input type="checkbox" /> Include in Brochure</label>
          </div>
        </div>

        <div className="form-group">
          <label>Preferred Booth Size</label>
          <div className="radio-group">
            <label><input type="radio" name="booth" /> Small</label>
            <label><input type="radio" name="booth" /> Medium</label>
            <label><input type="radio" name="booth" /> Large</label>
          </div>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default AddExhibitor;