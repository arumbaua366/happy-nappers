import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import { Grid, Container } from "@material-ui/core";
// page components
import SleepBtnWide from './/SleepBtnWide'
import SpotifyPlayer from "react-spotify-player";
import AnimationP from './AnimationP'
// Spotify Player Size
const size = {
  width: "100%",
  height: 80,
};
const theme = createMuiTheme({
  palette: {
    type: "light",
  },
});

function Awake() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Container>
            <SleepBtnWide />
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container>
            <AnimationP />
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Container>
            <SpotifyPlayer
              uri="spotify:track:6qaYPmXkXgYpOkJCm5OB13"
              autoPlay={true}
              size={size}
              />
          </Container>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Awake;
