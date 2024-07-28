import { styled } from '@mui/material/styles';  
import { DatePicker } from '@mui/x-date-pickers';

export const StyledDatePicker = styled(DatePicker)(() => ({
    width: '160px',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
      },
      '&:hover fieldset': {
        border: 'none',
      },
      '&.Mui-focused fieldset': {
        border: 'none',
      },
      '& .MuiInputAdornment-root': {
        margin: 0,
        padding: 0,
      },
      '& .MuiSvgIcon-root': {
        margin: 0,
        padding: 0,
      },
    },
    '& .MuiInputBase-input': {
      padding: 0,
    },
  }));
  