import axios from "axios";
import { useRef, useState } from "react"
import { Navigate } from "react-router-dom";

export default function DeleteCustomer(){

   const url = "https://zahfosha.azurewebsites.net"

   const customerUsernameInput = useRef();

    async function deleteCustomer(){

        const user = {
            username: customerUsernameInput.current.value
        }

        if (customerUsernameInput === "") {
        alert("You have failed to enter a valid customer username! Please try again!");

        } try{
            const response = await axios.delete((`${url}/customer?username=${customerUsernameInput.current.value}`, user))
            console.log(response)
            console.log(response.data)
            Navigate("/");
        }catch (error){
            console.error(error.response.data)
            console.error(error)
        }

    }

    return(
        <>
        <br></br>
        <br></br>
        <h4>Delete Your Account!</h4>
        <input placeholder="Enter your username" ref={customerUsernameInput}></input>
        <br></br>
        <br></br>
        <button class="btn btn-danger btn-lg" onClick={deleteCustomer}>Delete Customer</button>
        </>

    )

}