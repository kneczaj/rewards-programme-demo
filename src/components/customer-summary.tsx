import React, { useMemo } from "react";
import { Customer } from "../models/customer";
import { useData } from "./data-provider";
import { DateTime } from "luxon";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";

export interface Props {
  customer: Customer;
}

export interface PointsPerMonth {
  yearMonth: string;
  points: number;
}

export function CustomerSummary({customer}: Props): JSX.Element {
  const {getTransactions} = useData();
  const perMonth: PointsPerMonth[] = useMemo(() => {
    const all = getTransactions(customer.id);
    const months = new Set(all.map(transaction => transaction.date.toFormat('yyyy-MM')));
    return [...months].map(monthYear => {
      const date = DateTime.fromFormat(monthYear, 'yyyy-MM');
      const filtered = all.filter(item => item.date.month === date.month && item.date.year === date.year);
      const points = filtered.reduce((sum, item) => sum + item.points, 0);
      return {
        yearMonth: date.toFormat('yyyy-MM'),
        points
      }
    })
  }, [getTransactions, customer]);
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Month</TableCell>
            <TableCell align="right">Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {perMonth.map((data, idx) =>
            <TableRow key={data.yearMonth}>
              <TableCell component="th" scope="row">
                {data.yearMonth}
              </TableCell>
              <TableCell align={'right'}>
                {data.points}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
