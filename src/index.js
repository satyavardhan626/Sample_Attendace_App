import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import App from './initialpage.js';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import {configureStore} from "./redux/rootReducer"

ReactDOM.render(
    <Provider store={configureStore()}>
        <App />,
 </Provider>,

    document.getElementById('root'));

serviceWorker.unregister();
