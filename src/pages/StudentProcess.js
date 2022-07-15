import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from '../components/Form/AddressForm';
import PaymentForm from '../components/Form/PaymentForm';
import Review from '../components/Form/Review';
import Navbar from '../components/navbar/navbar';
import { useHistory, useLocation } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

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

const steps = ['Document Uploaded', 'Laptop Configuration', 'Tools and KT'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm step={step} />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function StudentProcess(props) {
    const history = useHistory();
    const location = useLocation();
  const [activeStep, setActiveStep] = React.useState(location.state.data ? Math.floor(location.state.data.progress/25) === 0 ? 0 : Math.floor(location.state.data.progress/25) - 1 : 0);
    const [waiting, setWaiting] = React.useState(true)
    const [user, setUser] = React.useState(localStorage.getItem('user'))

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  React.useEffect(() => {
    console.log(location);
    console.log(Math.floor(location.state.data.progress/25));
    console.log(waiting)
    console.log(user !== 'admin')
    setTimeout(() => {
        setWaiting(false)
    }, user !== 'admin' ? 5000 : 0)
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
          <Navbar/>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
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
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for joining Societe Generale.
                </Typography>
                <Typography variant="subtitle1">
                  You have been scuccefully ChillBoarded. We have send you the email confirmation for the same.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                {Math.floor(location.state.data.progress/25) === 1 && waiting && user !== 'admin' && <Box sx={{marginTop: 2}}>
                    <Alert severity="info">Approval of your documents is still pending!</Alert>
                </Box>}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  {user === 'admin' ?

                    <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                    disabled={Math.floor(location.state.data.progress/25) === 1 && waiting}
                    >
                    {activeStep === steps.length - 1  ? 'Complete' : Math.floor(location.state.data.progress/25) === 1 && activeStep === 0 ? 'Approve':'Next'}
                    </Button>
                   :
                   <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                    disabled={Math.floor(location.state.data.progress/25) === 1 && waiting}
                  >
                    {activeStep === steps.length - 1  ? 'Complete' : 'Complete'}
                  </Button>}
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
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
    </ThemeProvider>


  );
}