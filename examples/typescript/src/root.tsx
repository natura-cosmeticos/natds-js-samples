import React from 'react';
import { App } from './App'
import { buildTheme, ThemeProvider } from "@naturacosmeticos/natds-react";

const theme = buildTheme('natura', 'light')

export const Root = () => (
  <ThemeProvider theme={theme} cssPrefix="typescript-sample-app">
    <App />
  </ThemeProvider>
)
