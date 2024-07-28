import { Select as SelectTag } from '@mui/material';
import { styled } from '@mui/material/styles';  

export const Select = styled(SelectTag)({  
    '& .MuiOutlinedInput-notchedOutline': {  
        border: 'none'  
    },  
    '&:hover .MuiOutlinedInput-notchedOutline': {  
        border: 'none'
    },  
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {  
        border: 'none' 
    },  
    '& .MuiSelect-select': {  
        outline: 'none',  
        border: 'none',  
        padding: 0,
        '&:focus': {  
            border: 'none',  
            borderRadius: 0 
        }  
    }  
});  