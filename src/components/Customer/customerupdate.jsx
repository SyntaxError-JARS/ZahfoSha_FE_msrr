import React from "react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CustomerUpdate() {
    const navigate = useNavigate();

    const customerUsernameInput = useRef();
    const fNameInput = useRef();
    const lNameInput = useRef();
    const passwordInput = useRef();
    //const balanceInput = useRef();
    // const isAdmin = false;


    const url = "https://zahfosha.azurewebsites.net"

    async function customerUpdate(){

        const customer = {
            
            customerUsername: customerUsernameInput.current.value,
            fName: fNameInput.current.value,
            lName: lNameInput.current.value,
            password: passwordInput.current.value,
            balance: 0,
            isAdmin: false
        }

        if (customer.password === "") {
            alert("You have failed to enter a valid password! Please try again!");
        if (customer.customerUsername === "")
            alert("You have failed to enter a valid username! Please try again!");
        }else navigate("/customer");
        
        try{
        const response = await axios.post(`${url}/customer` , customer)
        // balance = 0;
        // isAdmin = false;
        console.log(response)
        } catch(error){
            console.error(error.response.data)
            console.log(error)
        }
    }

    return(
        <>
        <h4>Update your customer information below!</h4>
        <br></br>
        <input placeholder="Update Username" ref={customerUsernameInput}></input>
        <br></br>
        <br></br>
        <input placeholder="Update First Name" ref={fNameInput}></input>
        <br></br>
        <br></br>
        <input placeholder="Update Last Name" ref={lNameInput}></input>
        <br></br>
        <br></br>
        <input type="password" placeholder="Update password" ref={passwordInput}></input>
        <br></br>
        <br></br>
        <button type="button" class="btn btn-warning btn-lg" onClick={customerUpdate}>Update</button>
        </>
    )

    }