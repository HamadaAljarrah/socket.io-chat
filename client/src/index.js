import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom" 
import { RegisterProvider } from './components/RegisterFrom/register-context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <RegisterProvider>
            <App />
        </RegisterProvider>
    </Router>
    
);