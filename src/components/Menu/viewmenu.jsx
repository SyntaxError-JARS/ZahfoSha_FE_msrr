import axios from "axios"
import { useRef, useState, useEffect, userContext, useContext, useNavigate } from "react";

export default function ViewMenu(){

    const [menuBody, setMenuBody] = useState();

    const url = "https://zahfosha.azurewebsites.net"
    
        async function allMenuItems(){
    
            try{
            const response = await axios.get(`${url}/menu`)
            const menus = await response.data;
            const menuItemsTableRows = menus.map((e) => {
                return (
                    <tr>
                        <td>{e.menuItem}</td>
                        <td>{e.cost}</td>
                        <td>{e.protein}</td>
                        <td>{String(e.isSubstitutable)}</td>
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


    return(
        <>
        <h3 class="display-1">Our Menu</h3>
        <button class="btn btn-secondary btn-lg" onClick={allMenuItems}>Press to see all of the menu items</button>
    <table>
        <thead>
            <tr>
                <th>Item Name</th>
                <th>Cost</th>
                <th>Protein</th>
                <th>Is isSubstitutable</th>
            </tr>
        </thead>
        <tbody>{menuBody}</tbody>
    </table>
        <br></br>
        <br></br>
        </>
    )
}

