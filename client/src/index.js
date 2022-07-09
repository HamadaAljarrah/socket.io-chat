import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom" 
import { RegisterProvider } from './components/RegisterFrom/register-context';
import { ChatProvider } from './components/Chat/chat-context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <RegisterProvider>
            <ChatProvider>
                <App />
            </ChatProvider>     
        </RegisterProvider>
    </Router>
    
);