import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GridHome from "./GridHome"
import GridAsleep from "./GridAsleep"
import { ThemeProvider } from "@material-ui/styles";

import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

function Asleep() {
    
    return (
        <ThemeProvider theme={theme}>
          <Container>
              <GridHome />
              <GridAsleep />
            </Container>
        </ThemeProvider>
            )
}

export default Asleep