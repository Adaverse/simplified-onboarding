import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Icon from '@mui/material/Icon';
import SvgIcon from '@mui/material/SvgIcon';

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function Navbar() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <>
                {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <React.Fragment>
                    <Typography variant="h6" gutterBottom>
                        Your Profile
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First name"
                            fullWidth
                            autoComplete="given-name"
                            variant="standard"
                            value={"John"}
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            fullWidth
                            autoComplete="family-name"
                            variant="standard"
                            value={"Doe"}
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            required
                            id="address1"
                            name="address1"
                            label="Address line 1"
                            fullWidth
                            autoComplete="shipping address-line1"
                            variant="standard"
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            id="address2"
                            name="address2"
                            label="Address line 2"
                            fullWidth
                            autoComplete="shipping address-line2"
                            variant="standard"
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            autoComplete="shipping address-level2"
                            variant="standard"
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            id="state"
                            name="state"
                            label="State/Province/Region"
                            fullWidth
                            variant="standard"
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="zip"
                            name="zip"
                            label="Zip / Postal code"
                            fullWidth
                            autoComplete="shipping postal-code"
                            variant="standard"
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="country"
                            name="country"
                            label="Country"
                            fullWidth
                            autoComplete="shipping country"
                            variant="standard"
                            value={"INDIA"}
                        />
                        </Grid>
                        {/* <Grid item xs={12}>
                        <FormControlLabel
                            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                            label="Use this address for payment details"
                        />
                        </Grid> */}
                    </Grid>
                    <Typography style={{marginTop: 20}} variant="h6" gutterBottom>
                        Interest for Team Allocation
                    </Typography>
                    <Grid>
                        <Grid item xs={12} sm={6} style={{display:'flex', flexDirection: 'row', flexGrow: 1}}>
                            <Typography component="legend">Java</Typography>
                            <Rating name="size-large" defaultValue={2} size="large" />
                        </Grid>
                        <Grid item xs={12} sm={6} style={{display:'flex', flexDirection: 'row', flexGrow: 1}}>
                            <Typography component="legend">.NET</Typography>
                            <Rating name="size-large" defaultValue={2} size="large" />
                        </Grid>
                        <Grid item xs={12} sm={6} style={{display:'flex', flexDirection: 'row', flexGrow: 1}}>
                            <Typography component="legend">Python</Typography>
                            <Rating name="size-large" defaultValue={2} size="large" />
                        </Grid>
                        <Grid item xs={12} sm={6} style={{display:'flex', flexDirection: 'row', flexGrow: 1}}>
                            <Typography component="legend">Full Stack</Typography>
                            <Rating name="size-large" defaultValue={2} size="large" />
                        </Grid>
                        <Grid item xs={12} sm={6} style={{display:'flex', flexDirection: 'row', flexGrow: 1}}>
                            <Typography component="legend">Spark</Typography>
                            <Rating name="size-large" defaultValue={2} size="large" />
                        </Grid>
                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button onClick={handleClose} sx={{ mt: 3, ml: 1 }} variant="contained">
                        Update
                        </Button>
                    </Box>
                    </React.Fragment>
                </Box>
            </Modal>
            <AppBar position="relative" style={{backgroundColor:'white', display:'flex', flexGrow: 1}}>
                <Toolbar style={{ justifyContent:'space-between'}} onClick={handleOpen}>
                <Box
                    component="img"
                    sx={{
                        height: 50,
                        width: 200,
                    }}
                    alt="The house from the offer."
                    src="/assets/sglogo.jpeg"
                />
                <Typography variant="h6" color="black" noWrap style={{ alignItems:'center',justifyContent:'space-between', display:'flex', flex: 0.09, cursor:'pointer'}}>
                    <Icon style={{color:'red', fontSize: 30}}>account_circle</Icon>
                    {" "} {localStorage.getItem("user")}
                </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;