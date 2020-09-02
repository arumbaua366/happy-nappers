import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SpotifyPlayer from "react-spotify-player";
import AnimationS from "../AnimationS"
// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: "100%",
  height: 300,
};
const view = "list"; // or 'coverart'
const theme = "black"; // or 'white'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(8),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    alignItems: 'center',
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
            <AnimationS />
        </Grid>
      </Grid>
      <SpotifyPlayer
        uri="spotify:album:1R0dq0ngB0BJQvRoDL7qfg"
        autoPlay={true}
        size={size}
        view={view}
        theme={theme}
      />
    </div>
  );
}
