import React from "react";
import axios from "axios";
import { useRef } from "react";

export default function CreateMenuItem() {

    const itemnameInput = useRef();
    const costInput = useRef();
    const isSubstitutableInput = useRef();
    const proteinInput = useRef();

    const url = "https://zahfosha.azurewebsites.net"

    async function createmenuItems(){

        const menuItem = {
            menuItem: itemnameInput.current.value,
            cost: costInput.current.value,
            protein: proteinInput.current.value,
            isSubstitutable: isSubstitutableInput.current.value,
        }


        try{
            const response = await axios.post(`${url}/menu/createmenuitem` , menuItem )
            console.log(response)
            console.log(response.data)
        }catch(error){
            console.error(error.response.data)
            console.log(error)
        }

    }

    return (
    
        <>
        
        <h3>Hello Admin!<br></br>Add a new menu item below!</h3>
        <input placeholder="What is the item's name?" ref={itemnameInput}></input>
        <br></br>
        <br></br>
        <input placeholder="How much does it cost?" ref={costInput}></input>
        <br></br>
        <br></br>
        <input  placeholder="How much protein does it contain?" ref={proteinInput}></input>
        <br></br>
        <br></br>
        <input placeholder="Can the item be substitutable?" ref={isSubstitutableInput}></input>
        <br></br>
        <br></br>
        <button class="btn btn-success btn-lg" onClick={createmenuItems}>Create Menu Item</button>

        </>
        
        );
    

}