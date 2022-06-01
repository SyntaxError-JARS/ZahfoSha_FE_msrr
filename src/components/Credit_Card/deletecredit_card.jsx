import axios from "axios";
import { useRef } from "react"

export default function DeleteCreditCard(){


    const usernameInput = useRef();

    const url = "https://localhost:8080"



    async function deleteCreditCard(){

        const usernameIn = {
            username: "romanerobb"
        }


        try{
            const response = await axios.delete((`${url}/Credit/delete` , usernameIn ))
            console.log(response)
            console.log(response.data)
        }catch (error){
            console.error(error.response.data)
            console.error(error)
        }

    }

    return(
        <>
          <h3>Are you sure you want to delete your credit card? If so please enter your username and hit the delete credit card button.</h3>
        <br></br>
        <br></br>
        <br></br>
        <input placeholder="Enter your username" ref={usernameInput}></input>
        <br></br>
        <button onClick={deleteCreditCard}>Delete CreditCard</button>
        </>

    )

}