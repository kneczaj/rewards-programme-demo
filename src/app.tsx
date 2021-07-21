import React from 'react';
import './app.css';
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export function App() {
  return (
    <div className="App">
       <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Customer points calculator
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
