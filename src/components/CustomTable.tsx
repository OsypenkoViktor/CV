import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { ReactNode } from "react";
import { IExpirienceRow } from "../sections/data/educationData";

interface CustomTableProps {
  rows: IExpirienceRow[];
}

const CustomTable = ({ rows }: CustomTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead sx={{ bgcolor: "lightblue" }}>
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
              <StyledTableCell>{row.position}</StyledTableCell>
              <StyledTableCell>{row.startDate}</StyledTableCell>
              <StyledTableCell>{row.endDate}</StyledTableCell>
              <StyledTableCell>{row.stack}</StyledTableCell>
              <StyledTableCell>{row.responsibilities}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

interface StyledTableElProps {
  children: ReactNode;
}

const StyledTableRow = ({ children }: StyledTableElProps) => {
  return <TableRow>{children}</TableRow>;
};

const StyledTableCell = ({ children }: StyledTableElProps) => {
  return <TableCell>{children}</TableCell>;
};

export default CustomTable;
