import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
// import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Spinner from 'react-bootstrap/Spinner';

import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Navbar from '../components/navbar/navbar'

const Grid = styled(MuiGrid)(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& [role="separator"]': {
      margin: theme.spacing(0, 2),
    },
  }));
  

const btn ={backgroundColor: '#F16E10'};

function Landing() {
    const now = 60;
    const content = (
        <div>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
       Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
       Sed malesuada lobortis pretium.`}
        </div>
      );
    return (
        <>
        {/* <div style={{display:'flex'}}>
            <div style={{backgroundColor:'red', flex: 0.5, display:'flex', justifyContent:'center', fontFamily:"pt-sans-regular"}}>
                Hello, NAME
            </div>
            <div style={{backgroundColor:'red', flex: 0.5, justifyContent:'center', display:'flex'}}>
                Hi
            </div>
        </div> */}
        <Navbar/>
        <Grid container>
        <Grid item xs>
            {content}
        </Grid>
        <Divider orientation="vertical" flexItem>
            VERTICAL
        </Divider>
        <Grid item xs>
            {content}
        </Grid>
        </Grid>
        <Button variant="contained">Hello World</Button>
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
      </>
      
    );
}

export default Landing;
