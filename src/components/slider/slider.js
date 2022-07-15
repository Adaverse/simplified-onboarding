import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: 'uploaded documents',
  },
  {
    value: 25,
    label: 'documents to be verified',
  },
  {
    value: 50,
    label: 'Laptop configuired',
  },
  {
    value: 75,
    label: 'Team verified',
  },
  {
    value: 100,
    label: 'KT compleated',
  },
];



export default function DiscreteSliderLabel() {
  return (
    <Box sx={{ height: 150 }} marginLeft = {60}>
        <br/> <br/> <br/>
      <Slider
        aria-label="Always visible"
        defaultValue={80}
        // getAriaValueText={valuetext}
        step={25}
        marks={marks}
        valueLabelDisplay="on"
        orientation="vertical"
      />
      <br/> <br/> <br/>
    </Box>
  );
}