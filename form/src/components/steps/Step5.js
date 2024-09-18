import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { acceptTerms, resetForm } from '../../redux/signupActions';

const Step5 = () => {
  const dispatch = useDispatch();
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = () => {
    if (termsAccepted) {
      dispatch(acceptTerms());
      alert('Signup Complete!');
      dispatch(resetForm()); 
    } else {
      alert('You need to accept the terms and conditions to proceed!');
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2>Step 5: Terms & Conditions</h2>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="termsCheck"
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
          />
          <label className="form-check-label" htmlFor="termsCheck">
            I agree to the terms and conditions.
          </label>
        </div>
        <button className="btn btn-primary mt-3" onClick={handleSubmit}>
          Finish
        </button>
      </div>
    </div>
  );
};

export default Step5;
