import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Icon from '@mui/material/Icon';
import SvgIcon from '@mui/material/SvgIcon';


function Navbar() {
    return (
        <>
            <AppBar position="relative" style={{backgroundColor:'white'}}>
                <Toolbar style={{ justifyContent:'space-between'}}>
                <Box
                    component="img"
                    sx={{
                        height: 30,
                        width: 150,
                    }}
                    alt="The house from the offer."
                    src="/assets/sg1.png"
                />
                <Typography variant="h6" color="black" noWrap style={{ alignItems:'center',justifyContent:'space-between', display:'flex', flex: 0.09}}>
                    <Icon style={{color:'red', fontSize: 30}}>account_circle</Icon>
                    {" "} John Doe
                </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;
