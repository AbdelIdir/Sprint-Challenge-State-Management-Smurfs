import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfsFromApi, inputChange, submit,postNewSmurf } from "../state/actionCreators";

export function Forms({
  smurfsArray,
  getSmurfsFromApi,
  inputChange,
  submit,
  form,
  postNewSmurf
}) {
  useEffect(() => {
    getSmurfsFromApi();
  },[]);

  const onValueChange = event => {
    inputChange(event.target.name, event.target.value);
  };

  const onFormSubmit = (event,form) => {
    event.preventDefault();
        postNewSmurf(form)
    submit();

  };
  return (
    <>
      <div>The form will be here</div>
      <form onSubmit={(event)=>onFormSubmit(event,form)}>
        Let's add some Smurfs to the village !<br />
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="smurf's name here"
          onChange={onValueChange}
        />
        <br />
        <input
          type="text"
          name="age"
          value={form.age}
          placeholder="smurf's age here"
          onChange={onValueChange}
        />
        <br />
        <input
          type="text"
          name="height"
          value={form.height}
          placeholder="smurf's height here"
          onChange={onValueChange}
        />
        <br />
        <button style={{ marginBottom: "40px" }}>
          Add a new smurf to the village !
        </button>
      </form>
      {smurfsArray.map((aSmurf, i) => (
        <div key={i}>
          Name: {aSmurf.name}, Age: {aSmurf.age}, Height: {aSmurf.height}
        </div>
      ))}
    </>
  );
}

function mapStateToProps(state) {
  return {
    smurfsArray: state.allSmurfs,
    form: state.form
  };
}

export default connect(mapStateToProps, {
  getSmurfsFromApi,
  inputChange,
  submit,
  postNewSmurf
})(Forms);
