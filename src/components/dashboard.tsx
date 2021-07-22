import React, { useMemo, useState } from "react";
import { useData } from "./data-provider";
import { CustomerDetails } from "./customer-details";
import { Grid, List, ListItem, ListItemText, ListSubheader, Typography } from "@material-ui/core";
import { Customer } from "../models/customer";
import { isUndefined } from "../util";

export function Dashboard(): JSX.Element {
  const {customers} = useData();
  const [active, setActive] = useState<Customer['id'] | undefined>(undefined);
  const activeCustomer = useMemo(
    () => customers.find(item => item.id === active),
    [active, customers]
  );
  if (!customers) {
    return <>No customers</>;
  }
  return (
    <Grid container spacing={0}>
      <Grid item xs={2}>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader id="nested-list-subheader">
              Customers
            </ListSubheader>
          }
        >
          {customers.map(customer =>
            <ListItem button onClick={() => setActive(customer.id)}>
              <ListItemText primary={customer.name}/>
            </ListItem>
          )}
        </List>
      </Grid>
      <Grid item xs={10}>
        {isUndefined(activeCustomer)
          ? <Typography>Choose customer from the list</Typography>
          : <CustomerDetails customer={activeCustomer}/>
        }
      </Grid>
    </Grid>
  );
}
