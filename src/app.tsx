import React from 'react';
import './app.css';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { DataProvider } from "./components/data-provider";
import { Dashboard } from "./components/dashboard";

export function App() {
  return (
    <DataProvider>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Customer points calculator
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Dashboard/>
      </main>
    </DataProvider>
  );
}
