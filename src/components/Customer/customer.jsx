import React from "react";
import AddCreditCard from "../CreditCard/addcreditcard";
import DeleteCreditCard from "../CreditCard/deletecreditcard";
import ViewOrder from "../Order/vieworder";

export default function Customer() {

    return (
    
    <>
        <h3>Hello! Welcome to Zahfosha.</h3>

        <ViewOrder />
        <AddCreditCard />
        <DeleteCreditCard />
    </>
    
    );

}