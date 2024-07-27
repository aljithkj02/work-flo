import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';  

export const Input = styled(TextField)({  
    '& .MuiOutlinedInput-root': {  
      '& fieldset': {  
        borderColor: 'transparent', 
      },  
      '&:hover fieldset': {  
        borderColor: 'transparent', 
      },  
      '&.Mui-focused fieldset': {  
        borderColor: 'transparent', 
      }  
    },  
    '& .MuiInputBase-input': {  
      backgroundColor: '#EBEBEB', 
      borderRadius: 7, 
      padding: '10px 15px',  
      fontSize: '17px',
    }  
});  