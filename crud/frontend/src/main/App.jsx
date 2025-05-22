import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

import React from 'react'
import {BrowserRouter} from 'react-router-dom'


import Logo from '../components/templete/Logo'
import Nav from '../components/templete/Nav'
import Routes from './Routes'
import Footer from '../components/templete/Footer'

export default props => 
    <BrowserRouter>
        <div className="app">
            <Logo />        
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>

    