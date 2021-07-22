import React, { useCallback, useMemo } from "react";
import { createContext, createContextHook } from "./context-utils";
import CUSTOMERS from '../data/customers.json';
import TRANSACTIONS from '../data/transactions.json';
import { Customer } from "../models/customer";
import { Transaction, TransactionPayload } from "../models/transaction";
import { DateTime } from "luxon";

export interface ContextProps {
  customers: Customer[];
  getTransactions: (customerId: Customer['id']) => Transaction[];
}

export interface Props {
  children: React.ReactNode;
}


export const DataContext = createContext<ContextProps>('data');
export const useData = createContextHook<ContextProps>(DataContext);

export function getPoints(amount: number): number {
  const over100 = (Math.max(amount, 100) - 100)*2;
  const over50 = Math.max(Math.min(amount, 100), 50) - 50;
  return over50 + over100;
}

export function DataProvider({ children }: Props): JSX.Element {
  const customers = CUSTOMERS as Customer[];
  const transactions: Transaction[] = useMemo(() => (TRANSACTIONS as TransactionPayload[]).map(item => ({
    ...item,
    date: DateTime.fromISO(item.date),
    points: getPoints(item.amount)
  })), []);
  const getTransactions = useCallback((customerId: Customer['id']) => {
    return transactions.filter(item => item.customerId === customerId);
  }, [transactions])
  return (
    <DataContext.Provider value={{ customers, getTransactions }}>{children}</DataContext.Provider>
  );
}
