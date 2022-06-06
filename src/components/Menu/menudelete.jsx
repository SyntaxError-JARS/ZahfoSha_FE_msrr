import React from "react";
import axios from "axios";
import { useRef } from "react";

export default function MenuDelete() {

        const itemNameInput = useRef();
        // const costInput = useRef();
        // const proteinInput = useRef();
        // const isSubstitutableInput = useRef();
    
        const url = "https://zahfosha.azurewebsites.net"
    
        async function deletemenuItems(){
    
            const menuItem = {
                menuItem: itemNameInput.current.value,
                // cost: costInput.current.value,
                // protein: proteinInput.current.value,
                // isSubstitutable: isSubstitutableInput.current.value,
            }
    
            if (menuItem.menuItem === "") {
                alert("You need to enter a menu item!");
            }
            try{
                const response = await axios.delete(`${url}/menu?itemName=${itemNameInput.current.value}` , menuItem )
                console.log(response.data)
            }catch(error){
                console.error(error.response.data)
                console.log(error)
            }
    
        }
    
        return (
        
            <>
            <h4>Delete menu item below!</h4>
            <input placeholder="Enter menu item" ref={itemNameInput}></input>
            <br></br>
            <br></br>
            <button class="btn btn-warning btn-lg" onClick={deletemenuItems}>Delete Menu Item</button>
            </>
            
            );
        
    
    }