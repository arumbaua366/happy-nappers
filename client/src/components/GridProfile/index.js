import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from "../Avatar"
import DeleteBtn from "../DeleteBtn"
import ReturnBtn from "../ReturnBtn"
// import TypographyP from "../TypographyP"
import Footer2 from "../Footer2"
// import Footer from "../Footer"

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
                <Avatar />
            </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
                <h2>Jane Doe</h2>
                <h3><i>Sacramento, CA</i></h3> 
                <p>Here are a few of my ongoing projects:</p>
            </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
                <ReturnBtn />
                <DeleteBtn />
            </Paper>
        </Grid>
        <Footer2 />
      </Grid>
    </div>
  );
}
