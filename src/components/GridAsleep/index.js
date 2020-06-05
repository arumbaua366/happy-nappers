import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import DeleteBtn from "../DeleteBtn"
import Footer2 from "../Footer2"

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
            <img src="https://media2.giphy.com/media/3ohze0k1Z43jsEJMCQ/giphy.gif?cid=6104955e8fe36ca832f97b44d7d842372eb39e7405d67085&rid=giphy.gif" alt="Asleep" style={{verticalAlign: "middle", width: "500px", height: "500px", padding: "30px" }}></img>
          </Paper>
        </Grid>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>
          </Paper>
        </Grid> */}
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>
            
          </Paper> */}
        {/* </Grid> */}
        <Footer2 />
      </Grid>
    </div>
  );
}