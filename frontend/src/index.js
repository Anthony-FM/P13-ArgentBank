import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
// Composants
import Header from './components/Header';
// Pages
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import UserAccount from './pages/UserAccount';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
        <Routes>        
          <Route  path="/" element={<Home/>}/>
          <Route  path="/signin" element={<SignIn/>}/>
          <Route  path="/user/:userId" element={<UserAccount/>}/>
          <Route  path="*" element={<NotFound/>}/>
        </Routes>
    </Router>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
