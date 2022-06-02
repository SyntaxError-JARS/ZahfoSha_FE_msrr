import React from "react";
import axios from "axios";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";
import ViewOrder from "../Order/vieworder";
import bootstrap from "bootstrap";
import Credit_Card from "../Credit_Card/credit_card";

export default function CustomerLogin() {

    const UsernameInput = useRef();
    const passwordInput = useRef();
    const [user, setUser] = useContext(userContext);
    const navigate = useNavigate();
    const url = "https://zahfosha.azurewebsites.net";
    const isAdmin = false;

    async function login() {
        // Whenever you are getting a useRefs value, make sure it's inside some function call. Otherwise it will
        // error due to the refInput.current = undefined, meaning there is no .value available
        const customer = {
            username: UsernameInput.current.value,
            password: passwordInput.current.value,
        };

        if (customer.password === "hello") {
            alert("You need to reset your password");
        } else {
            try {
                const response = await axios.post(`${url}/customer`, customer);
                console.log(response.data);
                console.log("Hey this is the customer prior ", user);
                setUser({ ...user, username: customer.username });
                console.log("This is after we set the customer ", user);
                // the below code, manipulates the DOM
                // window.location.replace("http://localhost:3000/dashboard");
                navigate("/dashboard");
            } catch (error) {
                console.error(error.response.data);
                alert(error.response.data);
            }
        }
    }

    return (
        <>
            <h4>Welcome back to ZahFoSha! Please log in below.</h4>
            <input placeholder="Enter Your Customer Username" ref={UsernameInput}></input>
            <br></br>
            <br></br>
            <input type="password" placeholder="Enter Your Password" ref={passwordInput}></input>
            <br></br>
            <br></br>
            <button class="btn btn-outline-primary" onClick={login}>Login</button>

            <ViewOrder />
            <Credit_Card />
        </>
    );
}