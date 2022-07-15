import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import { useHistory, useLocation } from 'react-router-dom';

function CircularProgressWithLabel(props) {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" sx={{zIndex: 2}} {...props} thickness={5} size={50}/>
        <CircularProgress variant="determinate" value={100} sx={{position:'absolute', color:'lightgrey'}} thickness={5} size={50}/>
        {/* <CircularProgress variant="determinate" progress={100} color="red"/> */}
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  }
  
  CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     * @default 0
     */
    value: PropTypes.number.isRequired,
  };

  
function Student({name, url, progress1}) {
    const history = useHistory();
    const [progress, setProgress] = React.useState(progress1);

    // React.useEffect(() => {
    //     const timer = setInterval(() => {
    //       setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    //     }, 800);
    //     return () => {
    //       clearInterval(timer);
    //     };
    //   }, []);

    const handleClick = () => {
        history.push('/onboardProgress', {data: {progress: progress1}})
    }

    return (
        
        <Grid item key={1} xs={12} sm={6} md={4} sx={{ height: '70%' }}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderStyle:'solid' }}
                style = {{backgroundColor:'lightgrey' }}
            >
                {/* <Box
                    component="img"
                    sx={{
                        height: 200,
                        width: 300,
                    }}
                    alt="The house from the offer."
                    src={url}
                /> */}
                <Box style={{backgroundColor:'white', display:'flex', justifyContent:'center', padding: 20}}>
                <CircularProgressWithLabel value={progress} />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h7" component="h2" sx={{}}>
                        {name}
                    </Typography>
                    <Typography>

                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium" variant='contained' sx={{display: 'flex', flexGrow: 1}} onClick={handleClick}>View</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default Student;