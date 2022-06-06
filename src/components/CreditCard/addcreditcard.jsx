import React, { useRef } from 'react';
import axios from 'axios';
import bootstrap from 'bootstrap';
import { useNavigate } from "react-router-dom";


export default function AddCreditCard() {

    const url = "https://zahfosha.azurewebsites.net"

    const navigate = useNavigate();

    const cc_NumberInput = useRef();
    const cc_NameInput = useRef();
    const cvvInput = useRef();
    const exp_DateInput = useRef();
    const zipInput = useRef();
    const limitsInput = useRef();
    const customer_UsernameInput = useRef();

    async function addCredit(){

        const Credit = {
            
            cardNumber: cc_NumberInput.current.value,
            cardName: cc_NameInput.current.value,
            cvv: cvvInput.current.value,
            expDate: exp_DateInput.current.value,
            zipCode: zipInput.current.value,
            creditLimit: limitsInput.current.value,
            username: customer_UsernameInput.current.value
        }

        if (Credit.username === "") {
            alert("You have failed to enter a valid username! Please try again!");
        if (Credit.cardName === "")
            alert("You have failed to enter a valid username! Please try again!");
        }else navigate("/customer");
        
        try{
        const response = await axios.post(`${url}/creditcard` , Credit)
       
        console.log(response)
        } catch(error){
            console.error(error.response.data)
            console.log(error)
        }
    }

    return(
        <>
        <h4>Add A Credit Card To Your Account!</h4>
        <input placeholder="Enter card number" ref={cc_NumberInput}></input>
        <br></br>
        <input placeholder="Enter name on card" ref={cc_NameInput}></input>
        <br></br>
        <input placeholder="Enter the cvv" ref={cvvInput}></input>
        <br></br>
        <input placeholder="Enter expiration date" ref={exp_DateInput}></input>
        <br></br>
        <input placeholder="Enter the zip code" ref={zipInput}></input>
        <br></br>
        <input placeholder="Enter the credit limit" ref={limitsInput}></input>
        <br></br>
        <input placeholder="Enter your username" ref={customer_UsernameInput}></input>
        <br></br>
        <br></br>
        <button class="btn btn-success btn-lg" onClick={addCredit}>Add Credit Card</button>
        </>
    )
}