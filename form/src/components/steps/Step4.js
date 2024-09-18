import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBankDetails, updateStep } from '../../redux/signupActions';
import { useNavigate } from 'react-router-dom';


const Step4 = () => {
  const dispatch = useDispatch();
  const bankDetails = useSelector((state) => state.signup.bankDetails);
  const navigate = useNavigate();

  const [accountNumber, setAccountNumber] = useState(bankDetails.accountNumber);
  const [bankName, setBankName] = useState(bankDetails.bankName);
  const [ifscCode, setIfscCode] = useState(bankDetails.ifscCode);

  const handleSubmit = () => {
    dispatch(updateBankDetails({ accountNumber, bankName, ifscCode }));
    dispatch(updateStep(5)); 
    navigate('/step5')
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2>Step 4: Bank Details</h2>
        <div className="form-group">
          <label>Account Number</label>
          <input
            type="text"
            className="form-control"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            placeholder="Enter Account Number"
          />
        </div>
        <div className="form-group">
          <label>Bank Name</label>
          <input
            type="text"
            className="form-control"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            placeholder="Enter Bank Name"
          />
        </div>
        <div className="form-group">
          <label>IFSC Code</label>
          <input
            type="text"
            className="form-control"
            value={ifscCode}
            onChange={(e) => setIfscCode(e.target.value)}
            placeholder="Enter IFSC Code"
          />
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step4;
