import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GridAwake from "./GridAwake"
import GridHome from "./GridHome"
import { ThemeProvider } from "@material-ui/styles";

import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "light"
  }
});

function Awake() {
    
    return (
      <ThemeProvider theme={theme}>
        <Container>
            <GridHome />
            <GridAwake />
          </Container>
      </ThemeProvider>
          )
}

export default Awake