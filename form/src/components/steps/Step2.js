import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePersonalDetails, updateStep } from '../../redux/signupActions';
import { useNavigate } from 'react-router-dom';

const Step2 = () => {
  const dispatch = useDispatch();
  const personalDetails = useSelector((state) => state.signup.personalDetails);
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(personalDetails.firstName);
  const [lastName, setLastName] = useState(personalDetails.lastName);
  const [email, setEmail] = useState(personalDetails.email);
  const [address, setAddress] = useState(personalDetails.address);

  const handleSubmit = () => {
    dispatch(updatePersonalDetails({ firstName, lastName, email, address }));
    dispatch(updateStep(3)); 
    navigate('/step3')
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2>Step 2: Personal Details</h2>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last Name"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter Address"
          />
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
