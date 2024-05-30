import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const PrettoSlider = styled(Slider)(({ theme }) => ({
  color: '#a2df77',
  height: 8,
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active': {
      boxShadow: 'inherit',
    },
  },
  '& .MuiSlider-track': {
    height: 8,
    borderRadius: 4,
  },
  '& .MuiSlider-rail': {
    height: 8,
    borderRadius: 4,
  },
}));

const CustomSlider = ({ label, value, setValue }) => {
  const handleChange = (event, newValue) => {
    // Ensure minimum range of one
    if (newValue[1] - newValue[0] < 1) {
      setValue([newValue[0], newValue[0] + 1]);
    } else {
      setValue(newValue);
    }
  };

  return (
    <Paper sx={{ width: 300 + 24 * 2, padding: 3 }}>
      <Typography gutterBottom>{label}</Typography>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        value={value}
        onChange={handleChange}
        min={1957}
        max={2020}
      />
    </Paper>
  );
};

export default CustomSlider;