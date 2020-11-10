import React from 'react';
import { App } from './App'
import { Provider } from "@naturacosmeticos/natds-web";

export const Root = () => (
  <Provider cssPrefix="typescript-sample-app">
    <App />
  </Provider>
)
