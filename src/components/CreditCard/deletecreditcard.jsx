import axios from "axios";
import { useRef } from "react"

export default function DeleteCreditCard(){


    const usernameInput = useRef();

    const url = "https://zahfosha.azurewebsites.net"



    async function deleteCreditCard(){

        const usernameIn = {
            username: "romanerobb"
        }


        try{
            const response = await axios.delete((`${url}/creditCard` , usernameIn ))
            console.log(response)
            console.log(response.data)
        }catch (error){
            console.error(error.response.data)
            console.error(error)
        }

    }

    return(
        <>
          <h3>Delete Your Credit Card!</h3>
        <input placeholder="Enter your username" ref={usernameInput}></input>
        <br></br>
        <br></br>
        <button class="btn btn-danger btn-lg" onClick={deleteCreditCard}>Delete Credit Card</button>
        </>

    )

}