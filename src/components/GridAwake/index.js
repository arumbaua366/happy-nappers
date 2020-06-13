import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SpotifyPlayer from "react-spotify-player";

// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: "100%",
  height: 300,
};
const view = "list"; // or 'coverart'
const theme = "white"; // or 'black'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(8),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    alignItems: "center",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <img src="https://media1.tenor.com/images/714043687bc499a2c53f00af4390292a/tenor.gif?itemid=15577102" alt="Sun" 
              style={{verticalAlign: "middle",
                    maxWidth: "300px",
                    padding: "0px",
                    display: "center", }}></img>
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
      <SpotifyPlayer
        uri="spotify:album:4FNX7VLAhDVWn6ghmaHFTp"
        size={size}
        view={view}
        theme={theme}
      />
    </div>
  );
}
