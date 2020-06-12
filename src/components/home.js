import React, { Component } from 'react'
import GridHome from './GridHome'
import Container from '@material-ui/core/Container';

class Home extends Component {
    constructor() {
        super()
    }


    render() {
        // const imageStyle = {
        //     width: 400
        // }
        return (
            <Container>
              <GridHome />
            </Container>
        )

    }
}

export default Home
