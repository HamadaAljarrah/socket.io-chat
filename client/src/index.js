import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {VisitorProvider} from './Context/visitor-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <VisitorProvider>
        <App />
    </VisitorProvider>
);