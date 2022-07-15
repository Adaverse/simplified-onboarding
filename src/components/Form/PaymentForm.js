import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Configuration
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
            Step1 - GAIA Account                                                    
        </Grid>
        <Grid item xs={12} sm={6}>
            <Button variant="contained"> GO </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
            Step2 - BIGIP VPN 
        </Grid>
        <Grid item xs={12} sm={6}>
            <Button variant="contained"> GO </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
            Step3 - Setup your MFA card
        </Grid>
        <Grid item xs={12} sm={6}>
            <Button variant="contained"> GO </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
            Step4 - Enable Certification
        </Grid>
        <Grid item xs={12} sm={6}>
            <Button variant="contained"> GO </Button>
        </Grid>
        <Grid item xs={12} sm={1}>
        <AddIcCallIcon />                                                    
        </Grid>
        
        <Grid item xs={12} sm={5}>
        Hotline number
                                                           
        </Grid>

        <Grid item xs={12} sm={6}>
            xxxxxxxxx                                                    
        </Grid>

        <Grid item xs={12} sm={3}>
                                                                
        </Grid>
        <Grid item xs={12} sm={6}>
            <a href="">CHAT ON SUPPORT</a>
        </Grid> 
        <Grid item xs={12} sm={3}>
                                                                
        </Grid>
      </Grid>
    </React.Fragment>
  );
}