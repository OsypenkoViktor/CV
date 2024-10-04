import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { ReactNode } from "react";

const CustomTable = () =>{

    function createData(
        position: string,
        startDate: string,
        endDate: string,
        stack: string,
        responsibilities: string,
      ) {
        return { position, startDate, endDate, stack, responsibilities };
      }
      
      const rows = [
        createData('Automation quality engeneer', "June 2024", "September 2024", "Node js, \n Cypress", "Creating"),
        createData('Full stack dev', "September 2024", "still", "Node js \n Next js", "sone text"),
      ];

    return( <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead sx={{bgcolor:"lightblue"}}>
            <TableRow>
              <StyledTableCell>Position</StyledTableCell>
              <StyledTableCell>Start date</StyledTableCell>
              <StyledTableCell>End date</StyledTableCell>
              <StyledTableCell>Technologies stack</StyledTableCell>
              <StyledTableCell>Responsibilities</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.position}>
                <StyledTableCell>
                  {row.position}
                </StyledTableCell>
                <StyledTableCell>{row.startDate}</StyledTableCell>
                <StyledTableCell>{row.endDate}</StyledTableCell>
                <StyledTableCell>{row.stack}</StyledTableCell>
                <StyledTableCell>{row.responsibilities}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>)
}

interface StyledTableElProps {
    children:ReactNode
}

const StyledTableRow = ({children}:StyledTableElProps) =>{
    return(
        <TableRow sx={{}}>{children}</TableRow>
    )
}

const StyledTableCell = ({children}:StyledTableElProps) =>{
    return(
        <TableCell sx={{}}>{children}</TableCell>
    )
}

export default CustomTable;