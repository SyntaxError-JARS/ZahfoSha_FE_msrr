import axios from "axios";
import { useRef, useState } from "react"

export default function DeleteCustomer(){

    const customerDeleteInput = useRef();

    const url = "https://zahfosha.azurewebsites.net"

    async function deleteCustomer(){

        const customerUsernameInput = {
            customerUsername: "Robb"
        }

        if (customerDeleteInput === "") {
        alert("You have failed to enter a valid credit card number! Please try again!");

        } try{
            const response = await axios.delete((`${url}/customer`, customerUsernameInput))
            console.log(response)
            console.log(response.data)
        }catch (error){
            console.error(error.response.data)
            console.error(error)
        }

    }

    return(
        <>
        <br></br>
        <br></br>
        <h4>Delete Your Credit Card!</h4>
        <input placeholder="Enter your username" ref={customerDeleteInput}></input>
        <br></br>
        <br></br>
        <button class="btn btn-danger btn-lg" onClick={deleteCustomer}>Delete Customer</button>
        </>

    )

}