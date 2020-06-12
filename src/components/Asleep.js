import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GridHome from "./GridHome"
import GridAsleep from "./GridAsleep"

// const useStyles = makeStyles((theme) => ({
    
//   }));

function Profile() {
    
    return <Container>
              <GridHome />
              <GridAsleep />
            </Container>
    

}

export default Profile