import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SignUp from "../SignUp"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    alignItems: 'center'
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <SignUp />
              {/* <h2><b>User Name</b></h2>
              <h2><b>Password</b></h2>
              <br></br>
              <p><i>Don't have an account? Signup!</i></p> */}
            </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
