import {
    UPDATE_STEP,
    UPDATE_MOBILE,
    UPDATE_PERSONAL_DETAILS,
    UPDATE_DOCUMENTS,
    UPDATE_BANK_DETAILS,
    ACCEPT_TERMS,
    RESET_FORM
  } from './signupActionTypes';
  
  
  export const updateStep = (step) => {
    localStorage.setItem('currentStep', step);
    return {
      type: UPDATE_STEP,
      payload: step,
    };
  };
  
  export const updateMobile = (mobile) => {
    localStorage.setItem('mobile', mobile);
    return {
      type: UPDATE_MOBILE,
      payload: mobile,
    };
  };
  
  export const updatePersonalDetails = (details) => {
    localStorage.setItem('personalDetails', JSON.stringify(details));
    return {
      type: UPDATE_PERSONAL_DETAILS,
      payload: details,
    };
  };
  
  export const updateDocuments = (documents) => {
    localStorage.setItem('documents', JSON.stringify(documents));
    return {
      type: UPDATE_DOCUMENTS,
      payload: documents,
    };
  };
  
  export const updateBankDetails = (bankDetails) => {
    localStorage.setItem('bankDetails', JSON.stringify(bankDetails));
    return {
      type: UPDATE_BANK_DETAILS,
      payload: bankDetails,
    };
  };
  
  export const acceptTerms = () => {
    localStorage.setItem('termsAccepted', 'true');
    return {
      type: ACCEPT_TERMS,
    };
  };
  
  export const resetForm = () => {
    localStorage.clear();
    return {
      type: RESET_FORM,
    };
  };
  