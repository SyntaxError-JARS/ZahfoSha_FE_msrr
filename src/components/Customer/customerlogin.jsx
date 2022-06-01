import React from "react";
import axios from "axios";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";

export default function CustomerLogin() {

    const emailInput = useRef();
    const passwordInput = useRef();
    const [user, setUser] = useContext(userContext);
    const navigate = useNavigate();
    const url = "http://localhost:8080/Zah-fo'-Sha";
    const isAdmin = false;

    async function login() {
        // Whenever you are getting a useRefs value, make sure it's inside some function call. Otherwise it will
        // error due to the refInput.current = undefined, meaning there is no .value available
        const customer = {
            email: emailInput.current.value,
            password: passwordInput.current.value,
        };

        if (customer.password === "hello") {
            alert("You need to reset your password");
        } else {
            try {
                const response = await axios.post(`${url}/auth`, customer);
                console.log(response.data);
                console.log("Hey this is the customer prior ", user);
                setUser({ ...user, email: customer.email });
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
            <input placeholder="Enter Customer Email" ref={emailInput}></input>
            <input type="password" placeholder="Enter Customer Password" ref={passwordInput}></input>
            <button onClick={login}>Login</button>
        </>
    );
}