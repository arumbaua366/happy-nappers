import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import LinkGithub from "../LinkGithub";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
    // fontSize: '10',
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      
      <AppBar position="fixed" style={{backgroundColor: "#7D84B2" }} className={classes.appBar}>
      {/* <Paper square className={classes.paper}> */}
        <Typography className={classes.text} variant="body1" gutterBottom style={{fontSize:14, color:"#3C4F30"}}>
          Created by
          Mark Ohanesian, 
          Andrea Rumbaua, 
          Don Nguyen, 
          Michael Le
          <br></br>
          <LinkGithub />
        </Typography>
      {/* </Paper> */}
      </AppBar>
    </React.Fragment>
  );
}