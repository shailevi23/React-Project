import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./AppRouter";
import { BrowserRouter as Router,  } from "react-router-dom";
import './index.css';


ReactDOM.render(
<React.StrictMode>
    <Router>
        <AppRouter />
    </Router>
</React.StrictMode>, 
document.getElementById('root'));

