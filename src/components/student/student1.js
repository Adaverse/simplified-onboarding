import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Student1() {
    return (
        
        <Grid item key={1} xs={12} sm={6} md={4} sx={{ height: '60%' }}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderStyle:'solid' }}
                style = {{backgroundColor:'lightpink' }}
            >
                <Box
                    component="img"
                    sx={{
                        height: 200,
                        width: 300,
                    }}
                    alt="The house from the offer."
                    src="/assets/progress1.jpeg"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h7" component="h2">
                        Ritik Rai
                    </Typography>
                    <Typography>

                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default Student1;