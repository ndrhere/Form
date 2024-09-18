import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateDocuments, updateStep } from '../../redux/signupActions';
import { useNavigate } from 'react-router-dom';

const Step3 = () => {
  const dispatch = useDispatch();
  const documents = useSelector((state) => state.signup.documents);
  const navigate = useNavigate();

  const [aadharNumber, setAadharNumber] = useState(documents.aadharNumber);
  const [panNumber, setPanNumber] = useState(documents.panNumber);
  const [aadharDoc, setAadharDoc] = useState(documents.aadharDoc);
  const [panDoc, setPanDoc] = useState(documents.panDoc);

  const handleSubmit = () => {
  
    const aadharDocMetadata = aadharDoc ? { name: aadharDoc.name, size: aadharDoc.size, type: aadharDoc.type } : null;
    const panDocMetadata = panDoc ? { name: panDoc.name, size: panDoc.size, type: panDoc.type } : null;

    dispatch(updateDocuments({ 
      aadharNumber, 
      panNumber, 
      aadharDoc: aadharDocMetadata, 
      panDoc: panDocMetadata 
    }));
    dispatch(updateStep(4));
    navigate('/step4');
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h2>Step 3: Documents</h2>
        <div className="form-group">
          <label>Aadhar Number</label>
          <input
            type="text"
            className="form-control"
            value={aadharNumber}
            onChange={(e) => setAadharNumber(e.target.value)}
            placeholder="Enter Aadhar Number"
          />
        </div>
        <div className="form-group">
          <label>Pan Number</label>
          <input
            type="text"
            className="form-control"
            value={panNumber}
            onChange={(e) => setPanNumber(e.target.value)}
            placeholder="Enter Pan Number"
          />
        </div>
        <div className="form-group">
          <label>Aadhar Document</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setAadharDoc(e.target.files[0])}
          />
        </div>
        <div className="form-group">
          <label>Pan Document</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setPanDoc(e.target.files[0])}
          />
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3;

