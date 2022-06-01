import React from "react";
import { useRef } from "react";
import axios from "axios";

export default function MenuUpdate() {

    const fnameInput = useRef();
    const lnameInput = useRef();
    const usernameInput = useRef();
    const passwordInput = useRef();
    //const balanceInput = useRef();
    // const isAdmin = false;


    // const menu = {
            
    //     fname: "Romane",
    //     lname: "Robb",
    //     username: "romanerobb",
    //     password: "passwordrobb",
    //     balance:  10,
    //     isAdmin: false
    // }

    const url = "http://localhost:8080/Zah-fo'-Sha/menu"

    async function MenuUpdate(){

        const menu = {
            
            fname: fnameInput.current.value,
            lname: lnameInput.current.value,
            username: usernameInput.current.value,
            password: passwordInput.current.value,
            balance:  0,
            isAdmin: false
        }
        
        try{
        const response = await axios.post(`${url}/menu/menuupdate` , menu)
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
        <h2>Please Update The Menu Below!</h2>
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
        <button type="button" class="btn btn-outline-secondary" onClick={MenuUpdate}>Log In!</button>
        </>
    )
}