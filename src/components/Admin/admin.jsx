import React from "react";
import DeleteCreditCard from "../CreditCard/deletecreditcard";
import CustomerDelete from "../Customer/customerdelete";
import CreateMenuItem from "../Menu/createmenuitem";
import MenuDelete from "../Menu/menudelete";
import MenuUpdate from "../Menu/menuupdate";
import ViewMenu from "../Menu/viewmenu";

export default function Admin() {

    return (
    
        <>
        <center><h1>Welcome Back Admin!</h1></center>
        <br></br>
    <div class="container">
        <div class="row">
        <div class="col"><CreateMenuItem /></div>
        <div class="col"><MenuUpdate /></div>
        <div class="col"><MenuDelete /></div>
        </div>
    </div>
    <div class="container">
        <div class="row">
        <div class="col"><DeleteCreditCard /></div>
        <div class="col"><ViewMenu /></div>
        <div class="col"><CustomerDelete /></div>
        </div>
    </div>
         
        </>
        
        );
    

}