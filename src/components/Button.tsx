import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button, { ButtonProps } from '@mui/material/Button';
import { ButtonBaseProps } from '@mui/material';

type PropType = ButtonBaseProps & {
    children: React.ReactNode
}

export default function Buttons({children, ...other}:PropType) {
  return (
    
      <Button variant="contained" {...other} color="success" sx={{borderRadius:"30px",
        padding: "10px 30px"
      }} >
        {children}
      </Button>
    
  );
}