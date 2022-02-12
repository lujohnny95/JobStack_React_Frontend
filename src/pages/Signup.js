import React from 'react'
import { AppBar, Toolbar, Typography, Button, Container, Grid, TextField } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';

const Signup = () => {
    const signupHandler = () => {

    }

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <StorageIcon  />
                    <Typography variant="h5">JobStack</Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <Typography variant="h3">Signup!</Typography>
                <form onSubmit={signupHandler}>
                    <input type="text" placeholder="Username*" name="username" required/>
                    <input type="text" placeholder="Email*" name="email" required/>
                    <input type="text" placeholder="Password*" name="password" required/>
                    <button type="submit">Sign Up</button>
                </form>
            </Container>
            <footer>
                <Typography variant="h6" align="center">NorthNode - 2022</Typography>
            </footer>
        </>
    )
}

export default Signup;