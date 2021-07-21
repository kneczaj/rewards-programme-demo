import React from "react";
import { useData } from "./data-provider";
import { CustomerDetails } from "./customer-details";

export function Dashboard(): JSX.Element {
  const { customers } = useData();
  return customers ? <CustomerDetails customer={customers[0]}/> : <>No customers</>;
}
