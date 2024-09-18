import {
    UPDATE_STEP,
    UPDATE_MOBILE,
    UPDATE_PERSONAL_DETAILS,
    UPDATE_DOCUMENTS,
    UPDATE_BANK_DETAILS,
    ACCEPT_TERMS,
    RESET_FORM
  } from './signupActionTypes';
  
  const initialState = {
    currentStep: 1,
    mobile: '',
    personalDetails: {
      firstName: '',
      lastName: '',
      email: '',
      address: ''
    },
    documents: {
      aadharNumber: '',
      panNumber: '',
      aadharDoc: null,
      panDoc: null
    },
    bankDetails: {
      accountNumber: '',
      bankName: '',
      ifscCode: ''
    },
    termsAccepted: false,
  };
  
  const signupReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_STEP:
        return {
          ...state,
          currentStep: action.payload,
        };
      case UPDATE_MOBILE:
        return {
          ...state,
          mobile: action.payload,
        };
      case UPDATE_PERSONAL_DETAILS:
        return {
          ...state,
          personalDetails: { ...state.personalDetails, ...action.payload },
        };
      case UPDATE_DOCUMENTS:
        return {
          ...state,
          documents: { ...state.documents, ...action.payload },
        };
      case UPDATE_BANK_DETAILS:
        return {
          ...state,
          bankDetails: { ...state.bankDetails, ...action.payload },
        };
      case ACCEPT_TERMS:
        return {
          ...state,
          termsAccepted: true,
        };
      case RESET_FORM:
        return initialState;
      default:
        return state;
    }
  };
  
  export default signupReducer;
  