import * as types from "./actionTypes";

// REDUCER TO GET INITIAL ARRAY OF SMURFS

const initialSmurfVillage = [{ name: "smurfy", age: 500 }];
export function smurfsReducer(smurfs = initialSmurfVillage, action) {
  switch (action.type) {
    case types.SET_SMURFS:
      return action.payload;
    default:
      return smurfs;
  }
}

// REDUCER TO LOG FORM DATA TO MAKE A NEW SMURF

const initialFormValueForSmurfs = { name: "", age: "", height: "" };

export function formReducer(form = initialFormValueForSmurfs, action) {
  switch (action.type) {
    case types.INPUT_CHANGE:
      return {
        ...form,
        [action.payload.name]: action.payload.value
      };
    case types.SUBMIT:
      return initialFormValueForSmurfs;
    default:
      return form;
  }
}
