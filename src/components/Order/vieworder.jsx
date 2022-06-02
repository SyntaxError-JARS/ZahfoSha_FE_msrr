import React from "react";
import axios from "axios";
import { useContext, useState, useRef } from "react";

export default function ViewOrder() {

    const [orderBody, setOrderBody] = useState();

    const url = "https://zahfosha.azurewebsites.net"

    async function viewAllOrders(){

        try{
        const response = await axios.get(`${url}/orders`, orderBody)
        const orders = await response.data;
        const menuItemsTableRows = orders.map((e) => {
            return (
                <tr>
                    <td>{e.id}</td>
                    <td>{e.menuItem}</td>
                    <td>{e.comment}</td>
                    <td>{String(e.isFavorite)}</td>
                    <td>{e.orderDate}</td>
                    <td>{e.username}</td>
                </tr>
            )
           
        })
        setOrderBody(menuItemsTableRows)
        console.log(response)
        console.log(response.data)
    } catch (e) {
        console.error(e)
    }
    }

    return(
        <>
     
        <h3>Here Are Your Orders</h3>
                
        <button class="btn btn-warning btn-lg" onClick={viewAllOrders}>Click To Find All Your Orders</button>
    
        <table>
            <thead>
                <tr>
                    <th>Order Id</th>
                    <th>Menu Item</th>
                    <th>Comment</th>
                    <th>isFavorite</th>
                    <th>Order Date</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>{orderBody}</tbody>
        </table>

        </>
    )
}