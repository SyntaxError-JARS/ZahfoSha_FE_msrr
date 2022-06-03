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
        <button class="btn btn-warning btn-lg" onClick={viewAllOrders}>Click To Find All Your Orders</button>
    <center>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Order Id</th>
                    <th scope="col">Menu Item</th>
                    <th scope="col">Comment</th>
                    <th scope="col">isFavorite</th>
                    <th scope="col">Order Date</th>
                    <th scope="col">Username</th>
                </tr>
            </thead>
            <tbody>{orderBody}</tbody>
        </table>
    </center>
        </>
    )
}