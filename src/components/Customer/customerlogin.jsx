import React from "react";
import axios from "axios";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";
import ViewOrder from "../Order/vieworder";
import bootstrap from "bootstrap";
import AddCreditCard from "../CreditCard/addcreditcard";
import DeleteCreditCard from "../CreditCard/deletecreditcard";
import Customer from "./customer";

export default function CustomerLogin() {

    const usernameInput = useRef();
    const passwordInput = useRef();
    const [user, setUser] = useContext(userContext);
    const navigate = useNavigate();
    const url = "https://zahfosha.azurewebsites.net";
    const isAdmin = false;

    async function login() {
        // Whenever you are getting a useRefs value, make sure it's inside some function call. Otherwise it will
        // error due to the refInput.current = undefined, meaning there is no .value available
        const customer = {
            username: usernameInput.current.value,
            password: passwordInput.current.value,
        };

        if (customer.username === "") {
            alert("You need to enter a username!");
        }
        if (customer.password === "") {
            alert("You need to enter a password!");
        }
        if (customer.password === "admin") {
                navigate("/admin");
        } else {
            try {
                const response = await axios.post(`${url}/auth`, customer);
                console.log(response.data);
                // console.log("Hey this is the customer prior ", user);
                // setUser({ ...user, username: customer.username });
                // console.log("This is after we set the customer ", user);
                // the below code, manipulates the DOM
                // window.location.replace("http://localhost:3000/dashboard");
                navigate("/customer");
        } catch (error) {
            console.error(error.response.data);
            alert(error.response.data);
            }
        }
    }

    return (
        <>
            <h2>Welcome back to Zahfosha!<br></br> Please log in below.</h2>
            <h4><a href="#" class="text-white bg-dark">Use your admin password to log in as an admin!</a></h4>
            <br></br>
            <input placeholder="Enter Your Customer Username" ref={usernameInput}></input>
            <br></br>
            <br></br>
            <input type="password" placeholder="Enter Your Password" ref={passwordInput}></input>
            <br></br>
            <br></br>
            <button class="btn btn-outline-primary btn-lg" onClick={login}>Login</button>
        </>
    );
}