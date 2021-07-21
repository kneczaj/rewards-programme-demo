import React, { useMemo } from "react";
import { Customer } from "../models/customer";
import { useData } from "./data-provider";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";

export interface Props {
  customer: Customer;
}

export function CustomerTransactions({customer}: Props) {
  const {getTransactions} = useData();
  const transactions = useMemo(() => getTransactions(customer.id), [customer, getTransactions]);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Amount [$]</TableCell>
            <TableCell align="right">Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction, idx) =>
            <TableRow key={transaction.id}>
              <TableCell component="th" scope="row">
                {idx + 1}
              </TableCell>
              <TableCell align={'right'}>
                {transaction.date.toLocaleString()}
              </TableCell>
              <TableCell align={'right'}>
                {transaction.amount}
              </TableCell>
              <TableCell align={'right'}>
                {transaction.points}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
