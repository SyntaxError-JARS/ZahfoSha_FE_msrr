import { Link, useNavigate } from "react-router-dom";
import React from "react";
import CustomerLogin from "../Customer/customerlogin";
import Counter from "../Order/counter";
import CreateOrder from "../Order/createorder"
import bootstrap from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewMenu from "./viewmenu";

export default function Menu() {

    return (
    
        <>
        <ViewMenu />
        <CreateOrder />
        </>
        
        );
    

}