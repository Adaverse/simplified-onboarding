import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import Navbar from '../components/navbar/navbar';
import Student1 from '../components/student/student1'
import Student2 from '../components/student/student2'
import Student3 from '../components/student/student3'
import Student4 from '../components/student/student4'
import Student5 from '../components/student/student5'
import Student6 from '../components/student/student6'
import Student from '../components/student/Student'
import {students} from "../components/student/data"


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

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function studentlist() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            New Joiners Onboarding
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Navbar/>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              New Joiners Onboarding
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Upload New Joiners File (.csv)</Button>
              <Button variant="outlined">Upload Team requirements File (.csv)</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 4 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {students.map((item, index) => (
                <Student name = {item.name} url = {item.url} progress1 = {item.progress}/>
            ))}
        </Grid>
    </Container>
</main>
{/* Footer */}
<Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
    <Typography variant="h6" align="center" gutterBottom>
        Footer
    </Typography>
    <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
    >
        END OF PAGE
    </Typography>
    <Copyright />
</Box>
{/* End footer */}
</ThemeProvider>
);
}