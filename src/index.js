import React from 'react';
import ReactDOM from 'react-dom/client';
// import './Navbar/component//Navbar.css';
// import App from './Navbar/App';
import Navbar from './Navbar'
import Footer from './Footer'
import reportWebVitals from './reportWebVitals';
import About from './Navbar/component/pages/Aboutus'
import Hero from './Hero'
import './bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
  <Navbar />
  <Hero />
  <Footer />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
