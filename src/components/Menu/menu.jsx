import { Link, useNavigate } from "react-router-dom";
import React from "react";
import CustomerLogin from "../Customer/customerlogin";

export default function Menu() {

    return (
    
        <>
        <h1>Please take a look at our menu below!</h1>

        <h2>Cheese Pizza</h2>
        <h3>$20.00</h3>
        <h4>This is the most delicious slice I've ever had!</h4>
        <Link to="/login"><button type="button" class="btn btn-primary btn-lg">Login To Order</button></Link>
        <br></br>
        <br></br>

        <h2>Vegetarian Paradise</h2>
        <h3>$25.00</h3>
        <h4>This is the most delicious slice I've ever had!</h4>
        <Link to="/login"><button type="button" class="btn btn-primary btn-lg">Login To Order</button></Link>
        <br></br>
        <br></br>

        <h2>Meat Lovers</h2>
        <h3>$30.00</h3>
        <h4>This is the most delicious slice I've ever had!</h4>
        <Link to="/login"><button type="button" class="btn btn-primary btn-lg">Login To Order</button></Link>
        <br></br>
        <br></br>

        <h2>Salad</h2>
        <h3>$15.00</h3>
        <h4>This is the most delicious slice I've ever had!</h4>
        <Link to="/login"><button type="button" class="btn btn-primary btn-lg">Login To Order</button></Link>
        <br></br>
        <br></br>

        <h2>New York Style</h2>
        <h3>$30.00</h3>
        <h4>This is the most delicious slice I've ever had!</h4>
        <Link to="/login"><button type="button" class="btn btn-primary btn-lg">Login To Order</button></Link>
        <br></br>
        <br></br>
        
        </>
        
        );
    

}