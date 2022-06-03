import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {

    return (
        <>
        
        <nav>
        <br></br>
            <Link to="/">
                <button class="btn btn-outline-secondary">Instagram</button>
            </Link>
            <span> </span>
            <Link to="/login">
                <button class="btn btn-outline-secondary">Facebook</button>
            </Link>
            <span> </span>
            <Link to="/register">
                <button class="btn btn-outline-secondary">Twitter</button>
            </Link>
            <span> </span>
            <Link to="/menu">
                <button class="btn btn-outline-secondary">YouTube</button>
            </Link>
            <span> </span>
            <Link to="/contact">
                <button class="btn btn-outline-secondary">Tik Tok</button>
            </Link>
            <br></br>
            <br></br>
        </nav>    
        </>
        
        );
    

}