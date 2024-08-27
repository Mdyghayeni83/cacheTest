'use client'

import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import { colors } from '@mui/material';
import { red } from '@mui/material/colors';



const AppInput = styled(TextField)<TextFieldProps>(({ theme }) => ({
   width : "200px",
   
   margin : "10px",
   height: "52px",
   borderRadius : "25px",
   '& .MuiInputLabel-formControl':{
    color: 'gray'
   },
   
   '& .MuiInputBase-formControl':{
    borderRadius: '50px'
   }
  }));
export default function BasicTextFields(props:TextFieldProps) {
      
  return (
    
     
     <AppInput color="success"  size='small'  {...props} sx={{
        
        ...(props.sx)
     }}>

     </AppInput>
    
  );
}