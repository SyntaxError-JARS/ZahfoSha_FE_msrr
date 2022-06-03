import axios from "axios"
import { useRef, useState } from "react";
import NavBar from "../navbar";

export default function ViewMenu(){

const [menuBody, setMenuBody] = useState();

const viewmenuInputs = useRef();

const url = "https://zahfosha.azurewebsites.net"

    async function getAllMenuItems(){

        try{
        const response = await axios.get(`${url}/menu`)
        const items = await response.data;
        const menuItemsTableRows = items.map((e) => {
            return (
                <tr>
                    <td>{e.menuItem}</td>
                    <td>{e.cost}</td>
                    <td>{String(e.isSubstitutable)}</td>
                    <td>{e.protein}</td>
                </tr>
            )
           
        })
        setMenuBody(menuItemsTableRows)
        console.log(response)
        console.log(response.data)
    } catch (e) {
        console.error(e)
    }

        
    }

    async function findAsingleItem(){
        
        const menuitem =  viewmenuInputs.current.value
        
    
        try{
        const encodedValue = encodeURIComponent(menuitem)
        console.log(menuitem)
        const response = await axios.get(`${url}/menu/zahfosha?menuItem=${encodedValue}`)
        const item = await response.data;
        console.log(item)
        const map = {a:response.data}
        const newArray = Object.values(map)
        console.log(newArray)
        const menuItemTableRow = newArray.map((e) => {
            return (
                <tr>
                    
                    <td>{e.menuItem}</td>
                    <td>{e.cost}</td>
                    <td>{String(e.isSubstitutable)}</td>
                    <td>{e.protein}</td>
                </tr>
            )
           
        })
        setMenuBody(menuItemTableRow)
            
        console.log(response)
        console.log(response.data)
        }catch(error){
        console.error(error)
        console.log(error)
     }
    }

    return(
        <>
  
        <h3>Zahfosha Menu</h3>
        
        <button class="btn btn-secondary btn-lg" onClick={getAllMenuItems}>Press to see all of the menu items</button>
    
    <table>
        <thead>
            <tr>
                <th>Item Name</th>
                <th>Cost</th>
                <th>Is isSubstitutable</th>
                <th>Protein</th>
            </tr>
        </thead>
        <tbody>{menuBody}</tbody>
        </table>
        <input placeholder="Enter the menu item here" ref={viewmenuInputs} /> 
        <br></br>
        <br></br>
        <button class="btn btn-success btn-lg" onClick={findAsingleItem}>Looking for something specific? <br></br> Enter it above and press to find the Item you are looking for.</button>


        </>
    )
}

