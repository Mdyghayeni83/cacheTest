'use client'

import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import { colors } from '@mui/material';
import { red } from '@mui/material/colors';



const AppInput = styled(TextField)<TextFieldProps>(({ theme }) => ({
   width : "200px",
   
   margin : "0px",
   height: "52px",
   
   '& .MuiInputLabel-formControl':{
    color: 'gray'
   },
   
   '& .MuiInputBase-formControl':{
    borderRadius: '30px'
   }
  }));
export default function Input(props:TextFieldProps) {
      
  return (
    
     
     <AppInput color="success"  size='small'  {...props} sx={{
        
      ...(props.sx)
   }}>

     </AppInput>
    
  );
}