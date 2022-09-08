import React  from "react";
import "../style/navbar.css"
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar() {
    return(
        <>
            <Navbar className="nav navbar-expand-lg navbar-dark shadow-5-strong" expand="lg" fixed="top">
                <a class="navbar-brand" href="/">Damien Drozd</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">    
                    <li><a class="nav-item nav-link" href="/">A propos</a></li>
                    <li><a class="nav-item nav-link" href="/blog">Blog</a></li>
                    <li><a class="nav-item nav-link" href="/context">L'entreprise</a></li>
                    <li><a class="nav-item nav-link" href="/contact">Contact</a></li>
                    <li><a class="nav-item nav-link" href="https://www.linkedin.com/in/damiendrozd/">LinkedIn</a></li>              
                    <li><a class="nav-item nav-link" href="https://github.com/DamienDrozd">GitHub</a></li>
                </ul>
            </Navbar>
        </>
    );
}