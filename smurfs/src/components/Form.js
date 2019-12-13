import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getSmurfsFromApi,
  inputChange,
  submit,
  postNewSmurf
} from "../state/actionCreators";
//// STYLING
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Input from "@material-ui/core/Input";
import { FormControl } from "@material-ui/core";
//////// STYLING
const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

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
  }, []);

  const onValueChange = event => {
    inputChange(event.target.name, event.target.value);
  };

  const onFormSubmit = (event, form) => {
    event.preventDefault();
    postNewSmurf(form);
    submit();
  };

  const classes = useStyles();
  return (
    <div className="form-style">
      {/* <form onSubmit={event => onFormSubmit(event, form)}>
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
      </form> */}
      {/* {smurfsArray.map((aSmurf, i) => (
        <div key={i}>
          Name: {aSmurf.name}, Age: {aSmurf.age}, Height: {aSmurf.height}
        </div>
      ))} */}
      <form
        style={{ marginTop: "100px" }}
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={event => onFormSubmit(event, form)}
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={onValueChange}
          value={form.name}
          name="name"
        />
        <TextField
          id="outlined-basic"
          label="Age"
          variant="outlined"
          onChange={onValueChange}
          value={form.age}
          name="age"
        />
        <TextField
          id="outlined-basic"
          label="Height"
          variant="outlined"
          onChange={onValueChange}
          value={form.height}
          name="height"
        />

        <Fab color="primary" aria-label="add" type="submit">
          <AddIcon />
        </Fab>
      </form>
      {smurfsArray.map((aSmurf, i) => (
        <Card className={classes.card} key={i} style={{ margin: "10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Smurf"
              height="140"
              image="https://cdn6.aptoide.com/imgs/8/3/e/83ec90789593d6affb0cdce651fe5d10_icon.png?w=128"
              title="New Smurf"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {aSmurf.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Height: {aSmurf.height}, Age: {aSmurf.age}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
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
