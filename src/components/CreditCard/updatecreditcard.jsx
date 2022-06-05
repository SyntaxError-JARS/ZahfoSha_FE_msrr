import React, { useRef } from 'react';
import axios from 'axios';
import bootstrap from 'bootstrap';


export default function UpdateCreditCard() {

    const cardNumberInput = useRef();
    const cardNameInput = useRef();
    const cvvInput = useRef();
    const expDateInput = useRef();
    const zipCodeInput = useRef();
    const creditLimitInput = useRef();
    const usernameInput = useRef();
   

    const url = "https://zahforsha.azurewebsites.net"

    async function updateCredit(){

        const Credit = {
            
            cardNumber: cardNumberInput.current.value,
            cardName: cardNameInput.current.value,
            cvv: cvvInput.current.value,
            expDate: expDateInput.current.value,
            zipCode: zipCodeInput.current.value,
            creditLimit: creditLimitInput.current.value,
            username: usernameInput.current.value
        }
        
        try{
        const response = await axios.post(`${url}/creditcard/add` , Credit)
       
        console.log(response)
        } catch(error){
            console.error(error.response.data)
            console.log(error)
        }
    }

    return(
        <>
        <h4>Update Your Credit Card!</h4>
        <input placeholder="Enter card number" ref={cardNumberInput}></input>
        <br></br>
        <input placeholder="Enter name on card" ref={cardNameInput}></input>
        <br></br>
        <input placeholder="Enter the cvv" ref={cvvInput}></input>
        <br></br>
        <input placeholder="Enter expiration date" ref={expDateInput}></input>
        <br></br>
        <input placeholder="Enter the zip code" ref={zipCodeInput}></input>
        <br></br>
        <input placeholder="Enter your username" ref={usernameInput}></input>
        <br></br>
        <br></br>
        <button class="btn btn-success btn-lg" onClick={updateCredit}>Add Credit Card</button>
        </>
    )
}