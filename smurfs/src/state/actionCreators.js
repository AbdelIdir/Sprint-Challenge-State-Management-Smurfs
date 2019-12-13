import axios from "axios";
import * as types from "./actionTypes";

export const inputChange = (name, value) => {
  return {
    type: types.INPUT_CHANGE,
    payload: {
      name,
      value
    }
  };
};

export const getSmurfsFromApi = () => dispatch => {
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      const smurfVillage = res.data;
      dispatch({
        type: types.SET_SMURFS,
        payload: smurfVillage
      });
    })
    .catch(err => console.log(err));
};

export const submit = () => {
  return {
    type: types.SUBMIT
  };
};

export const postNewSmurf = (newSmurfFormValues) => dispatch => {
  axios
  .post("http://localhost:3333/smurfs",newSmurfFormValues)
  .then(
    res=>{
      dispatch({
        type: types.SET_SMURFS,
        payload: res.data
      });
    }
  )
  .catch(err=>err)
}