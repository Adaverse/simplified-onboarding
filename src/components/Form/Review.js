import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Team Name : GBSU/FRM/CCR/B2T
        <br/> <br/>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
            Step1 - Functional KT                                                   
        </Grid>
        <Grid item xs={12} sm={6}>
            <Button variant="contained"> GO </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
            Step2 - Technical KT 
        </Grid>
        <Grid item xs={12} sm={6}>
            <Button variant="contained"> GO </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
            Step3 - Project Knowledge
        </Grid>
        <Grid item xs={12} sm={6}>
            <Button variant="contained"> GO </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
            Step4 - Soft Skills courses
        </Grid>
        <Grid item xs={12} sm={6}>
            <Button variant="contained"> GO </Button>
        </Grid>
      
        
        <Grid item xs={12} sm={6}>
        Manager Name 
                                                           
        </Grid>

        <Grid item xs={12} sm={6}>
            Bhupendra Das                                                    
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