import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../components/Login';
import { AuthProvider } from './context/AuthProvider';
import Footer from "../components/footer";
import Navbar from '../components/Navbar';




ReactDOM.render(
<React.StrictMode>
    <AuthProvider>
    <Login />
    <Footer/>
    <Navbar/>
    </AuthProvider>
</React.StrictMode>,
// document.getElementById('root')
);



