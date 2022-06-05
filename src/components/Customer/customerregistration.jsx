import React from "react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CustomerRegistration() {
    
    const navigate = useNavigate();

    const url = "https://zahfosha.azurewebsites.net"

    const customerUsernameInput = useRef();
    const fNameInput = useRef();
    const lNameInput = useRef();
    const passwordInput = useRef();
    const balanceInput = useRef();
    const isAdminInput = useRef();

    async function customerReg(){

        const customer = {
            
            customerUsername: customerUsernameInput.current.value,
            fName: fNameInput.current.value,
            lName: lNameInput.current.value,
            password: passwordInput.current.value,
            balance: balanceInput.current.value,
            isAdmin: isAdminInput.current.value
        }

        if (customer.password === "") {
            alert("You have failed to enter a valid password! Please try again!");
        if (customer.customerUsername === "")
            alert("You have failed to enter a valid username! Please try again!");
        }else navigate("/customer");
        
        try{
            const response = await axios.post(`${url}/customer` , customer)
            console.log(response.data)
        } catch (error) {
            console.error(error.response.data)
            // console.log(error)
            alert(error.response.data);
        }
    }

    return(
        <>
            <h4>Please enter your customer information below to sign up!</h4>
            <br></br>
            <input placeholder="Enter Username" ref={customerUsernameInput}></input>
            <br></br>
            <br></br>
            <input placeholder="Enter First Name" ref={fNameInput}></input>
            <br></br>
            <br></br>
            <input placeholder="Enter Last Name" ref={lNameInput}></input>
            <br></br>
            <br></br>
            <input type="password" placeholder="Enter password" ref={passwordInput}></input>
            <br></br>
            <br></br>
            <input type="password" placeholder="Enter balance" ref={balanceInput}></input>
            <br></br>
            <br></br>
            <input type="password" placeholder="isAdmin" ref={isAdminInput}></input>
            <br></br>
            <br></br>
            <button type="button" class="btn btn-outline-warning btn-lg display-1" onClick={customerReg}>Register</button>
        </>
    );

    }