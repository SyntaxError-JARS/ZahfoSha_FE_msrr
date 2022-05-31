import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CustomerRegistration from "./components/Customer/customerregistration";
import CustomerLogin from "./components/Customer/customerlogin";
import Order from "./components/Order/order";
import MenuUpdate from "./components/Menu/menuupdate";
import Menu from "./components/Menu/menu";
import HomePage from "./components/homepage";
import AdminLogin from "./components/Admin/adminlogin";

export const userContext = createContext();

function App() {
    const [user, setUser] = useState({ email: "Guest" });
    // React-router-dom provideds us the ability to emulate multipage websites while still only being a single page
    return (
        <>
        <center>
        <h1 class="display-1">ZahfoSha</h1>
        <h5>by Matthew Swaney and Romane Robb</h5>
            <BrowserRouter>
                <userContext.Provider value={[user, setUser]}>
                    <NavBar />
                    <Routes>
                        <Route path="admin" element={<AdminLogin />} />
                        <Route exact path="" element={<HomePage />} />
                       <Route path="login" element={<CustomerLogin />} />
                        <Route path="register" element={<CustomerRegistration />} />
                       <Route path="order" element={<Order />} />
                        <Route path="menu" element={<Menu />} />
                        <Route path="update" element={<MenuUpdate />} />
                    </Routes>
                </userContext.Provider>
            </BrowserRouter>
            </center>
        </>
    );
}

export default App;