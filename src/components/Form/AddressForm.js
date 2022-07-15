import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


// import * as React from 'react';
import { styled } from '@mui/material/styles';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}



export default function AddressForm({step}) {
    const [user, setUser] = React.useState(localStorage.getItem('user'))
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Personal Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
            Aadhar Card
        </Grid>
        <Grid item xs={12} sm={6}>
            <input type="file" id="myFile" name="filename" />
        </Grid>
        <Grid item xs={12} sm={6}>
            Pan Card

        </Grid>
        <Grid item xs={12} sm={6}>
            <input type="file" id="myFile" name="filename" />
        </Grid>

        <Grid item xs={12} sm={10}>
        <Typography variant="h6" gutterBottom>
            Interest for Team Allocation
        </Typography>

        </Grid>
        <Grid item xs={12} sm={2}>
            
        </Grid>
        
        

        <Grid item xs={12} sm={6}>
              Java

        </Grid>
        <Grid item xs={12} sm={6}>
             <StyledRating
      name="highlight-selected-only"
      defaultValue={3}
      IconContainerComponent={IconContainer}
      getLabelText={(value: number) => customIcons[value].label}
      highlightSelectedOnly
        />
        </Grid>

        <Grid item xs={12} sm={6}>
              Python

        </Grid>
        <Grid item xs={12} sm={6}>
             <StyledRating
      name="highlight-selected-only"
      defaultValue={3}
      IconContainerComponent={IconContainer}
      getLabelText={(value: number) => customIcons[value].label}
      highlightSelectedOnly
        />
        </Grid>

        <Grid item xs={12} sm={6}>
              .Net

        </Grid>
        <Grid item xs={12} sm={6}>
             <StyledRating
      name="highlight-selected-only"
      defaultValue={3}
      IconContainerComponent={IconContainer}
      getLabelText={(value: number) => customIcons[value].label}
      highlightSelectedOnly
        />
        </Grid>

        <Grid item xs={12} sm={6}>
              Big data

        </Grid>
        <Grid item xs={12} sm={6}>
             <StyledRating
      name="highlight-selected-only"
      defaultValue={3}
      IconContainerComponent={IconContainer}
      getLabelText={(value: number) => customIcons[value].label}
      highlightSelectedOnly
        />
        </Grid>

        <Grid item xs={12} sm={6}>
              Cloud(Azure)

        </Grid>
        <Grid item xs={12} sm={6}>
             <StyledRating
      name="highlight-selected-only"
      defaultValue={3}
      IconContainerComponent={IconContainer}
      getLabelText={(value: number) => customIcons[value].label}
      highlightSelectedOnly
        />
        </Grid>

        <Grid item xs={12} sm={6}>
              ML/AI

        </Grid>
        <Grid item xs={12} sm={6}>
             <StyledRating
      name="highlight-selected-only"
      defaultValue={3}
      IconContainerComponent={IconContainer}
      getLabelText={(value: number) => customIcons[value].label}
      highlightSelectedOnly
        />
        </Grid>

        
      </Grid>
    </React.Fragment>
  );
}



// export default function RadioGroupRating() {
//   return (
//     <StyledRating
//       name="highlight-selected-only"
//       defaultValue={2}
//       IconContainerComponent={IconContainer}
//       getLabelText={(value: number) => customIcons[value].label}
//       highlightSelectedOnly
//     />
//   );
// }
