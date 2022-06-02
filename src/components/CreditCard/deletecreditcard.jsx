import axios from "axios";
import { useRef, useState } from "react"

export default function DeleteCreditCard(){

    const [showDelete, setShowDeleted] = useState(false);

    const creditCardInput = useRef();

    const url = "https://zahfosha.azurewebsites.net"

    async function deleteCreditCard(){

        try{
            const response = await axios.delete(`${url}/Credit/delete-card?cardNumber=${creditCardInput.current.value}` )

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
        <h3>Delete Your Credit Card!</h3>
        <input placeholder="Enter your credit card number" ref={creditCardInput}></input>
        <br></br>
        <br></br>
        <button class="btn btn-danger btn-lg" onClick={() => { 
            deleteCreditCard(); 
            setShowDeleted(!showDelete) 
            }}
            >Delete Credit Card</button>
        {showDelete && <p>You Have Successfully Deleted Your Credit Card</p>}
        </>

    )

}