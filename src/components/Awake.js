import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GridAwake from "./GridAwake"
import GridHome from "./GridHome"

// const useStyles = makeStyles((theme) => ({
    
//   }));

function Profile() {
    
    return <Container>
              <GridHome />
              <GridAwake />
            </Container>
    

}

export default Profile