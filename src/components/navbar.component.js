import React, { Component, useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import "../style/navbar.css"


export default function NavBar() {
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand">Damien Drozd</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">                  
                    
                    <li><a class="nav-item nav-link" href="/">A propos</a></li>
                    <li><a class="nav-item nav-link" href="/blog">Blog</a></li>
                    <li><a class="nav-item nav-link" href="/contact">Contact</a></li>
                    <li><a class="nav-item nav-link" href="/context">L'entreprise</a></li>
                    
                </ul>
            </nav>
        </>
    );
}