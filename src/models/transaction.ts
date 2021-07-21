import { Customer } from "./customer";
import { DateTime } from "luxon";

export interface TransactionPayload {
  id: number;
  customerId: Customer['id'];
  amount: number;
  date: string;
}

export interface Transaction {
  id: number;
  customerId: Customer['id'];
  amount: number;
  date: DateTime;
}
