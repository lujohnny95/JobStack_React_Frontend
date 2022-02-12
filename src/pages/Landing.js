import React from 'react'
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material/"
import StorageIcon from '@mui/icons-material/Storage';
import useStyles from './pageStyles';

const Landing = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <StorageIcon  />
                    <Typography variant="h5">JobStack</Typography>
                    <Button variant="text">Login</Button>
                </Toolbar>
            </AppBar>
            <main>
                <Container className={classes.container}>
                    <Typography variant="h3">Welcome to JobStack!</Typography>
                    <Typography variant="h5">Join, search and track your ideal job!</Typography>
                    <Button variant="contained">Get Started!</Button>
                </Container>
            </main>
            <footer>
                <Typography variant="h6" align="center">NorthNode - 2022</Typography>
            </footer>
        </>
    )
}

export default Landing;