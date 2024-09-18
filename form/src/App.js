import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { updateStep } from './redux/signupActions';
import Step1 from './components/steps/Step1';
import Step2 from './components/steps/Step2';
import Step3 from './components/steps/Step3';
import Step4 from './components/steps/Step4';
import Step5 from './components/steps/Step5';


function App() {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.signup.currentStep);

  
  useEffect(() => {
    const savedStep = localStorage.getItem('currentStep');
    if (savedStep) {
      dispatch(updateStep(parseInt(savedStep, 10)));
    }
  }, [dispatch]);

  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Navigate to={`/step${currentStep}`} />} />
          <Route path="/step1" element={<Step1 />} />
          <Route path="/step2" element={currentStep >= 2 ? <Step2 /> : <Navigate to="/step1" />} />
          <Route path="/step3" element={currentStep >= 3 ? <Step3 /> : <Navigate to="/step1" />} />
          <Route path="/step4" element={currentStep >= 4 ? <Step4 /> : <Navigate to="/step1" />} />
          <Route path="/step5" element={currentStep >= 5 ? <Step5 /> : <Navigate to="/step1" />} />
         
          <Route path="*" element={<Navigate to={`/step${currentStep}`} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

