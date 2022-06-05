import axios from "axios";
import { useRef, useState } from "react"

export default function CustomerDelete() {

    const [showDelete, setShowDeleted] = useState(false);

    const customerInput = useRef();

    const url = "https://zahfosha.azurewebsites.net"

    async function deleteCustomer(){

        try{
            const response = await axios.delete(`${url}/customer?=${customerInput.current.value}` )

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
        <h4>Delete Your Account!</h4>
        <input placeholder="Please enter your username" ref={customerInput}></input>
        <br></br>
        <br></br>
        <button class="btn btn-danger btn-lg" onClick={() => { 
            deleteCustomer(); 
            setShowDeleted(!showDelete) 
            }}
            >Delete Account</button>
        {showDelete && <p>You Have Successfully Deleted Your Account!</p>}
        </>

    )

}