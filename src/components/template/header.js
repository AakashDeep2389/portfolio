import React, { useEffect } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

const Header = () => {




    return (
        <header className="header-container">
            <div className="page-container ">
                {/* <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container">
                        <a class="navbar-brand" href="#">Akash Deep</a>
                        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <NavLink to="/" exact className="nav-link">Home</NavLink>
                                </li>
                                <li class="nav-item">
                                    <HashLink smooth to="#projects" exact className="nav-link">Project</HashLink>
                                </li>
                                <li class="nav-item">
                                    <a href="https://drive.google.com/file/d/1m0RxWeKyhkiLSmg7d72k5mOXbGZcE1Uz/view" className="nav-link" target="_blank" >Resume</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav> */}
                <Navbar expand="md" className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container">
                        <Link to="/" exact class="navbar-brand">
                            Akash Deep
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" >
                            <i className="fas fa-bars"></i>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <li class="nav-item active">
                                    <NavLink to="/" exact className="nav-link">Home</NavLink>
                                </li>
                                <li class="nav-item">
                                    <HashLink smooth to="#projects" exact className="nav-link">Project</HashLink>
                                </li>
                                <li class="nav-item">
                                    <a href="https://drive.google.com/file/d/1m0RxWeKyhkiLSmg7d72k5mOXbGZcE1Uz/view" className="nav-link" target="_blank" >Resume</a>
                                </li>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div >
        </header >
    )
}

export default Header
