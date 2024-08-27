'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table, { TableProps } from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@/components/Button'
import {  GetUserAction } from '@/actions/users/get-users/interface';
import { User } from '@/actions/users/create-user/interface';
import DeleteButton from './DeleteButton';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    // backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
 Firstname: string,
 Lastname: string,
 Phone: number,
 UniqueID: number,
) {
  return {Firstname, Lastname,Phone, UniqueID };
}

const rows = [
  createData('danial','khoshniyat',9155010619,2525164),
  
];
interface PropType extends TableProps {
  data?: GetUserAction["response"]["data"] 
  // children : React.ReactNode 
} 



export default function CustomizedTables({data , ...other}:PropType) {
  console.log(data)
  return ( 
    <TableContainer component={Paper} sx={{width:"600px", borderRadius:"20px",marginTop:"30px"
    }}>
      <Table sx={{ minWidth: 0}} aria-label="customized table">
      <TableHead>
          <TableRow>
            <StyledTableCell>Firstname</StyledTableCell>
            <StyledTableCell align="right">Lastname</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">UniqueID</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row:User, index:number) => (
            <StyledTableRow key={`${row.id}-${index}`}>
              <StyledTableCell >
                {row.firstname}
              </StyledTableCell>
              <StyledTableCell align="right">{row.lastname}</StyledTableCell>
              <StyledTableCell align="right">{row.phone}</StyledTableCell>
              <StyledTableCell align="right">{row.id}</StyledTableCell>
              <StyledTableCell align="right" sx={{marginRight:"20px"}}>
                <DeleteButton userId={String(row.id)} />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
