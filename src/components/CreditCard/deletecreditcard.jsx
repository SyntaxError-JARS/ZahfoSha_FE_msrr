import axios from "axios";
import { useRef, useState } from "react"

export default function DeleteCreditCard(){

    const [showDelete, setShowDeleted] = useState(false);

    const creditCardInput = useRef();

    const url = "https://zahfosha.azurewebsites.net"

    async function deleteCreditCard(){

        const customerUsernameInput = {
            customerUsername: "Robb"
        }

        // if (creditCardInput === "") {
        //     alert("You have failed to enter a valid credit card number! Please try again!");

        try{
            const response = await axios.delete((`${url}/creditcard`, customerUsernameInput))
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
        <input placeholder="Enter your username" ref={creditCardInput}></input>
        <br></br>
        <br></br>
        <button class="btn btn-danger btn-lg" onClick={deleteCreditCard}>Delete CreditCard</button>
        </>

    )

}