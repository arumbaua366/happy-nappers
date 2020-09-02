import React, { Component, Text } from "react";
import Container from "@material-ui/core/Container";
import LogoDark from "./LogoDark";
import PlayBtn from "./PlayBtn"
import SleepBtn from "./SleepBtn"

class Home extends Component {
  render() {
    return (
      <Container >
        <LogoDark />
        <PlayBtn />
        <SleepBtn />
      </Container>
    );
  }
}

export default Home;
