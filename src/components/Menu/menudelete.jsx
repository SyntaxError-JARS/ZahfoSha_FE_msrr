import React from "react";
import axios from "axios";
import { useRef } from "react";

export default function MenuDelete() {

        const itemnameInput = useRef();
        const costInput = useRef();
        const proteinInput = useRef();
        const isSubstitutableInput = useRef();
    
        const url = "https://zahfosha.azurewebsites.net"
    
        async function deletemenuItems(){
    
            const menuItem = {
                menuItem: itemnameInput.current.value,
                cost: costInput.current.value,
                protein: proteinInput.current.value,
                isSubstitutable: isSubstitutableInput.current.value,
            }
    
            if (menuItem.menuItem === "") {
                alert("You need to enter a menu item!");
            }
            try{
                const response = await axios.post(`${url}/menu` , menuItem )
                console.log(response)
                console.log(response.data)
            }catch(error){
                console.error(error.response.data)
                console.log(error)
            }
    
        }
    
        return (
        
            <>
            <h4>Delete menu item below!</h4>
            <input placeholder="What is the item's name?" ref={itemnameInput}></input>
            <br></br>
            <br></br>
            <input placeholder="How much does it cost?" ref={costInput}></input>
            <br></br>
            <br></br>
            <input  placeholder="How much protein (in grams) does it contain?" ref={proteinInput}></input>
            <br></br>
            <br></br>
            <input placeholder="Can the item be substitutable?" ref={isSubstitutableInput}></input>
            <br></br>
            <br></br>
            <button class="btn btn-warning btn-lg" onClick={deletemenuItems}>Delete Menu Item</button>
            </>
            
            );
        
    
    }