import React from "react";
import { useRef } from "react";
import axios from "axios";

export default function CustomerRegistration() {

    const fnameInput = useRef();
    const lnameInput = useRef();
    const usernameInput = useRef();
    const passwordInput = useRef();
    //const balanceInput = useRef();
    // const isAdmin = false;


    // const customer = {
            
    //     fname: "Romane",
    //     lname: "Robb",
    //     username: "romanerobb",
    //     password: "passwordrobb",
    //     balance:  10,
    //     isAdmin: false
    // }

    const url = "https://localhost:8080"

    async function customerReg(){

        const customer = {
            
            fname: fnameInput.current.value,
            lname: lnameInput.current.value,
            username: usernameInput.current.value,
            password: passwordInput.current.value,
            balance:  0,
            isAdmin: false
        }
        
        try{
        const response = await axios.post(`${url}/customer/customerregistration` , customer)
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
        <h2>Welcome to Zahfosha!</h2>
        <h2>Please Enter Your Customer Information Below To Sign Up!</h2>
        <br></br>
        <input placeholder="Enter First Name" ref={fnameInput}></input>
        <br></br>
        <input placeholder="Enter Last Name" ref={lnameInput}></input>
        <br></br>
        <input placeholder="Enter Username" ref={usernameInput}></input>
        <br></br>
        <input type="password" placeholder="Enter password" ref={passwordInput}></input>
        <br></br>
        <br></br>
        <button type="button" class="btn btn-outline-warning" onClick={customerReg}>Register</button>
        </>
    )

}