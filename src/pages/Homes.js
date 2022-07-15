import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { useHistory } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../components/navbar/navbar';

import { students } from "../components/student/data"

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Homes() {
    const history = useHistory();
    const [user, setUser] = React.useState(localStorage.getItem("user"));

    // React.useEffect( () =>  {
    //     console.log(user);
    // }, [user])   

    const handleStudentClick = () =>  {
        for( let i = 0; i < students.length; i++) {
            console.log(students[i].name);
            if (students[i].name === user) {
                history.push("/onboardProgress", {data: students[i]})
                return 
            } else if (students[i].name === user) {
                history.push("/onboardProgress", {data: students[i]})
                return 
            } else if (students[i].name === user){
                history.push("/onboardProgress", {data: students[i]})
                return 
            }
        }
        history.push("/onboardProgress", {data: {name: "John Doe", progress: 0}});
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* <AppBar position="relative">
                <Toolbar>
                    <CameraIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" noWrap>
                        SOCIETE
                        GENERALE
                    </Typography>
                </Toolbar>
            </AppBar> */}

            <Navbar/>
            <main>
                {/* Hero unit */}
                <Box noValidate sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <div className='text-center mb-4'>
                        <Typography
                            component="span"
                            variant="h2"
                            align="center"
                            color="red"
                        >
                            CHILL 
                        </Typography>
                        <Typography     
                        component="span"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            > BOARDING</Typography>
                        </div>
                        
                        
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            The all in one platform to meet the needs of On boarding process. It helps new Joiners, 
                            to meet the team of their interest. It also makes the work of work of On boarding team easier.
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            {user === "admin" ?                             
                            <a href='/viewOnboarding'> 
                                <Button variant="contained">View Onboarding folks</Button>
                                {/*<Button variant="outlined">Secondary action</Button>    */}
                            </a> : <Button variant="contained" onClick={handleStudentClick}>Complete the Onboarding</Button>}
                        </Stack>
                    </Container>
                </Box>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'black', p: 6 }} component="footer" height = {200}>
                <Typography variant="h6" align="center" gutterBottom color="white">
                    Societe Generale
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="white"
                    component="p"
                >
                    
                    The Future is you
                </Typography>
                <Copyright />
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}