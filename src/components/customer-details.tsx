import React from "react";
import { Customer } from "../models/customer";
import { CustomerTransactions } from "./customer-transactions";
import { Paper, Typography } from "@material-ui/core";
import { CustomerSummary } from "./customer-summary";

export interface Props {
  customer: Customer;
}

export function CustomerDetails({ customer }: Props): JSX.Element {
  return (
    <>
      <Typography variant="h1">{customer.name}</Typography>
      <Paper>
        <Typography variant="h2">
          All transactions
        </Typography>
        <CustomerTransactions customer={customer}/>
      </Paper>
      <Paper>
        <Typography variant="h2">
          Summary
        </Typography>
        <CustomerSummary customer={customer}/>
      </Paper>
    </>
  )
}
