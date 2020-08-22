import React, { Component, Text } from "react";
import Container from "@material-ui/core/Container";
import Logo from "./Logo";
import AwakeBtn from "./AwakeBtn"
import AsleepBtn from "./AsleepBtn"

class Home extends Component {
  render() {
    return (
      <Container >
        <Logo />
        <AwakeBtn />
        <AsleepBtn />
      </Container>
    );
  }
}

export default Home;
