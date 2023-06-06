import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom/';
import { CurrentUserProvider } from './contexts/CurrentUserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Router>
        <CurrentUserProvider>
          <App />
        </CurrentUserProvider>
      </Router>
    </React.StrictMode>,
    document.getElementById("root")  
);


//import { StrictMode } from 'react';
//import { createRoot } from 'react-dom/client';

//const rootElement = document.getElementById("root")
//const root = createRoot(rootElement);

//root.render(
//  <StrictMode>
//    <Router>
//      <CurrentUserProvider>
//        <App />
//      </CurrentUserProvider>
//    </Router>
//  </StrictMode>,
//  
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
