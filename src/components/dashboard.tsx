import React from "react";
import { useData } from "./data-provider";
import { CustomerTransactions } from "./customer-transactions";

export function Dashboard(): JSX.Element {
  const { customers } = useData();
  return customers ? <CustomerTransactions customer={customers[0]}/> : <>No customers</>;
}
