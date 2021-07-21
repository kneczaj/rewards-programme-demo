import React, { useMemo } from "react";
import { createContext, createContextHook } from "./context-utils";
import CUSTOMERS from '../data/customers.json';
import TRANSACTIONS from '../data/transactions.json';
import { Customer } from "../models/customer";
import { Transaction, TransactionPayload } from "../models/transaction";
import { DateTime } from "luxon";

export interface ContextProps {
  customers: Customer[];
  transactions: Transaction[];
}

export interface Props {
  children: React.ReactNode;
}


export const DataContext = createContext<ContextProps>('data');
export const useData = createContextHook<ContextProps>(DataContext);

export function DataProvider({ children }: Props): JSX.Element {
  const customers = CUSTOMERS as Customer[];
  const transactions: Transaction[] = useMemo(() => (TRANSACTIONS as TransactionPayload[]).map(item => ({
    ...item,
    date: DateTime.fromISO(item.date)
  })), []);
  return (
    <DataContext.Provider value={{ customers, transactions }}>{children}</DataContext.Provider>
  );
}
