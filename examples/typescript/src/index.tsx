import * as React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App'
import {Provider} from "@naturacosmeticos/natds-web";

ReactDOM.render(
    <React.StrictMode>
        <Provider>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
