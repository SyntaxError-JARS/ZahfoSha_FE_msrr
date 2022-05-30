import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import credit_card from "./components/Credit_Card";
// import deletecredit_card from "./components/Credit_Card";
// import customer from "./components/Customer";
// import createorder from "./components/Order";
// import order from "./components/Order";
// import menuupdate from "./components/Menu";
// import menuwelcome from "./components/Menu";

export const userContext = createContext();

function App() {
    const [user, setUser] = useState({ email: "Guest" });
    // React-router-dom provideds us the ability to emulate multipage websites while still only being a single page
    return (
        <>
        <center>
        <h1>ZahfoSha</h1>
        <h5>by Matthew Swaney and Romane Robb</h5>
            <BrowserRouter>
                <userContext.Provider value={[user, setUser]}>
                    <NavBar />
                    <Routes>
                       <Route path="login" element={<menuwelcome />} />
                        <Route path="register" element={<order />} />
                        <Route exact path="" element={<cre />} />
                        <Route path="order" element={<order />} />
                        <Route path="menu" element={<menuwelcome></menuwelcome>} />
                        <Route path="update" element={<menuupdate></menuupdate>} />
                    </Routes>
                </userContext.Provider>
            </BrowserRouter>
            </center>
        </>
    );
}

export default App;