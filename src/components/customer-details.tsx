import React from "react";
import { Customer } from "../models/customer";
import { CustomerTransactions } from "./customer-transactions";
import { Box, Container, makeStyles, Paper, Typography } from "@material-ui/core";
import { CustomerSummary } from "./customer-summary";

export interface Props {
  customer: Customer;
}

const useStyles = makeStyles({
  header: {
    marginBottom: '0.5em',
    marginTop: '0.25em',
  },
});

export function CustomerDetails({customer}: Props): JSX.Element {
  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h4" className={classes.header}>{customer.name}</Typography>
      <Paper>
        <Box m={2}>
          <Typography variant="h5">
            All transactions
          </Typography>
        </Box>
        <CustomerTransactions customer={customer}/>
      </Paper>
      <Paper>
        <Box m={2}>
        <Typography variant="h5" className={classes.header}>
          Summary
        </Typography>
        </Box>
        <CustomerSummary customer={customer}/>
      </Paper>
    </Container>
  )
}
