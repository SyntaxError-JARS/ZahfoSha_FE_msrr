import React from "react";
import AddCreditCard from "../CreditCard/addcreditcard";
import DeleteCreditCard from "../CreditCard/deletecreditcard";
import ViewOrder from "../Order/vieworder";
import CustomerDelete from "./customerdelete";
import CustomerUpdate from "./customerupdate";

export default function Customer() {

    return (
    
    <>
        <h4>Hello! Welcome to Zahfosha.</h4>

        <ViewOrder />
    <div class="container">
        <div class="row">
        <div class="col"><CustomerUpdate /></div>
        <div class="col"><AddCreditCard /></div>
        </div>
    </div>
    <div class="container">
        <div class="row">
        <div class="col"><DeleteCreditCard /></div>
        <div class="col"><CustomerDelete /></div>
        </div>
    </div>
    </>
    
    );

}