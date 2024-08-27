import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button, { ButtonProps } from '@mui/material/Button';
import { ButtonBaseProps } from '@mui/material';

type PropType = ButtonProps & {
    children: React.ReactNode
}

export default function Buttons({children, ...other}:PropType) {
  return (
    
      <Button  {...other} sx={{borderRadius:"12px",
        
      }} >
        {children}
      </Button>
    
  );
}