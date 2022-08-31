import ReactDom from 'react-dom/client';
import React from "react";
import App from './App.jsx';
import "../css/reset.css";
import "../css/style.css";
import {GoogleOAuthProvider} from '@react-oauth/google';

const root = ReactDom.createRoot(document.getElementById('root'));
const clientId = '708566449515-17hiv1du9nklaptrbmh80r4on4ichata.apps.googleusercontent.com';

root.render(
    <GoogleOAuthProvider clientId={clientId}>
        <App/>
    </GoogleOAuthProvider>

);