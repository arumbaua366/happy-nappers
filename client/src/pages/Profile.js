import React from "react";
import Avatar from "../components/Avatar";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DeleteBtn from "../components/DeleteBtn";

const useStyles = makeStyles((theme) => ({
    
  }));

function Profile() {
    
    return <Container>

            <h1>Profile Stuff</h1>
            
                <Avatar />
                <p>Name:</p>
                <p>Member Since:</p>
                <p>Role:</p>
                <p># of times you clicked Awake:</p>
                <p># of times you clicked Asleep:</p>


                <DeleteBtn />
                
                </Container>
    

}

export default Profile