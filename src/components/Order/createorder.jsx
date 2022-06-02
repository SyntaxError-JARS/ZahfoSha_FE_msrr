import React from "react";
import axios from "axios";
import { useContext, useRef } from "react";

export default function OrderCreate() {

    const idInput = useRef();
    const menuItemInput = useRef();
    const commentInput = useRef();
    const isFavoriteInput = useRef();
    const orderDateInput = useRef();
    const usernameInput = useRef();

    const url = "https://zahfosha.azurewebsites.net/"

    async function addOrder(){

        const order = {
            id: idInput.current.value,
            menuItem: menuItemInput.current.value,
            comment: commentInput.current.value,
            isFavorite: isFavoriteInput.current.value,
            orderDate: orderDateInput.current.value,
            username: usernameInput.current.value
        }


        try{
            const response = await axios.post(`${url}/orders` , order )
            console.log(response)
            console.log(response.data)
        }catch(error){
            console.error(error.response.data)
            console.log(error)
        }

    }


    return (
<>
        <h3>Welcome, Please Enter Your Order Below!</h3>
        <br></br>
        <input placeholder="Enter ID" ref={idInput}></input>
        <br></br>
        <input placeholder="Enter The Menu Item" ref={menuItemInput}></input>
        <br></br>
        <input placeholder="Please Enter A Comment" ref={commentInput}></input>
        <br></br>
        <input  placeholder="Is This A Favorite Item?" ref={isFavoriteInput}></input>
        <br></br>
        <input  placeholder="Enter Today's Date" ref={orderDateInput}></input>
        <br></br>
        <input  placeholder="Please Enter Your Username" ref={usernameInput}></input>
        <br></br>
        <br></br>
        <button class="btn btn-secondary btn-lg" onClick={addOrder}>Create Order</button>
        </>
    );
}
