import { Link, useNavigate } from "react-router-dom";
import React from "react";
import CustomerLogin from "../Customer/customerlogin";
import Counter from "../Order/counter";
import CreateOrder from "../Order/createorder"
import bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Menu() {

    return (
    
        <>
        <h3>Please take a look at our menu below!<br></br>And then place your order.</h3>
        
        <h3><a href="#" class="text-success">Cheese Pizza | $20.00 |</a></h3>
        <h6>Three different cheeses! A New York staple!</h6>
        {/* <Link to="/login"><button type="button" class="btn btn-primary btn-lg">Login To Order</button></Link>
        <Counter /> */}

        <h3><a href="#" class="text-success">Vegetarian Paradise | $25.00 |</a></h3>
        <h6>Not a fan of meat? Well, we got you covered!</h6>
        {/* <Link to="/login"><button type="button" class="btn btn-primary btn-lg">Login To Order</button></Link>
        <Counter /> */}
  
        <h3><a href="#" class="text-success">Meat Lovers | $30.00 |</a></h3>
        <h6>Meat lovers rejoice! The savior is here!</h6>
        {/* <Link to="/login"><button type="button" class="btn btn-primary btn-lg">Login To Order</button></Link>
        <Counter /> */}
    
        <h3><a href="#" class="text-success">Salad |$15.00 |</a></h3>
        <h6>A salad a day keeps the doctor away!</h6>
        {/* <Link to="/login"><button type="button" class="btn btn-primary btn-lg">Login To Order</button></Link>
        <Counter /> */}
      
        <h3><a href="#" class="text-success">New York Style | $30.00 |</a></h3>
        <h6>Bacon, cheese, pepperoni and more!</h6>
        {/* <Link to="/login"><button type="button" class="btn btn-primary btn-lg">Login To Order</button></Link>
        <Counter /> */}

        <CreateOrder />
        
        </>
        
        );
    

}