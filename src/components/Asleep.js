import React from "react";
import Container from '@material-ui/core/Container';
import GridHome from "./GridHome"
import GridAsleep from "./GridAsleep"
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import AwakeBtn from './AwakeBtn';

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

function Asleep() {
    
    return (
        <ThemeProvider theme={theme}>
          <Container>
              <AwakeBtn />
              <GridAsleep />
            </Container>
        </ThemeProvider>
            )
}

export default Asleep