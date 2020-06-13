import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(8),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    alignItems: 'center'
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <img src="https://media1.tenor.com/images/714043687bc499a2c53f00af4390292a/tenor.gif?itemid=15577102" alt="Sun" style={{verticalAlign: "middle", width: "500px", height: "500px", padding: "30px" }}></img>
            </Paper>
        </Grid>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>
          </Paper>
        </Grid> */}
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>

          </Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}
