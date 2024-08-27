'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
    backgroundColor: theme.palette.action.hover,
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

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} sx={{width:"600px", borderRadius:"20px",
        backgroundColor:"rgb(244, 239, 239)"
    }}>
      <Table sx={{ minWidth: 0}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Firstname</StyledTableCell>
            <StyledTableCell align="right">Lastname</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">UniqueID</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Firstname}>
              <StyledTableCell >
                {row.Firstname}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Lastname}</StyledTableCell>
              <StyledTableCell align="right">{row.Phone}</StyledTableCell>
              <StyledTableCell align="right">{row.UniqueID}</StyledTableCell>
              <StyledTableCell align="right">{row.UniqueID}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
