import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateMobile, updateStep } from '../../redux/signupActions';
import { useNavigate } from 'react-router-dom';

const Step1 = () => {
  const dispatch = useDispatch();
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const isRegistered = false; 
    if (!isRegistered) {
      dispatch(updateMobile(mobile));
      dispatch(updateStep(2)); 
      navigate('/step2');
    } else {
      alert('Mobile number already registered!');
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2>Step 1: Mobile Number</h2>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="text"
            className="form-control"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter Mobile Number"
          />
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step1;
