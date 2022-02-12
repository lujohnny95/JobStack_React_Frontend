import React from 'react'
import { AppBar, Toolbar, Typography, Button, Container, Grid, TextField } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';

const Login = () => {
    const loginHandler = () => {

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
                <Typography variant="h3">Welcome Back!</Typography>
                <form onSubmit={loginHandler}>
                    <label for="username">Username</label>
                    <input type="text" placeholder="Username*" name="username" required/>
                    <label for="email">Email</label>
                    <input type="text" placeholder="Email*" name="email" required/>
                    <label for="password">Password</label>
                    <input type="text" placeholder="Password*" name="password" required/>
                    <button type="submit">Login</button>
                    <p>Not a member?<a>Sign up here</a></p>
                </form>
            </Container>
            <footer>
                <Typography variant="h6" align="center">NorthNode - 2022</Typography>
            </footer>
        </>
    )
}

export default Login;