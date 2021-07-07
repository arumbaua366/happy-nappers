import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, CssBaseline, Typography, Link } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
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
    top: "auto",
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}));

export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar
        position="fixed"
        style={{ backgroundColor: "#b2a6ff" }}
        className={classes.appBar}
      >
        {/* <Paper square className={classes.paper}> */}
        <Typography
          className={classes.text}
          variant="body1"
          gutterBottom
          style={{ fontSize: 14, color: "#3C4F30" }}
        >
          Created by Mark Ohanesian, Andrea Rumbaua, Don Nguyen, Michael Le
          <br></br>
        </Typography>
        <Typography className={classes.root}>
          <Link
            href="https://github.com/arumbaua366/happy-nappers"
            // onClick={preventDefault}
            style={{ fontSize: 14, fontWeight: 800, color: "#3C4F30" }}
          >
            github
          </Link>
        </Typography>
      </AppBar>
    </React.Fragment>
  );
}
