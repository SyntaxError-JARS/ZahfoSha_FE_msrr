import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import PokemonWelcome from "./components/pokemon-welcome";
import TrainerDashboard from "./components/trainer-dashboard";
import TrainerLogin from "./components/trainer-login";
import TrainerRegister from "./components/trainer-register";
import TrainerUpdate from "./components/trainer-update";
import TrainerWelcome from "./components/trainer-welcome";

export const userContext = createContext();

function App() {
    const [user, setUser] = useState({ email: "Guest" });
    // React-router-dom provideds us the ability to emulate multipage websites while still only being a single page
    return (
        <>
            <BrowserRouter>
                <userContext.Provider value={[user, setUser]}>
                    <NavBar />
                    <Routes>
                        <Route path="login" element={<TrainerLogin />} />
                        <Route path="register" element={<TrainerRegister />} />
                        <Route exact path="" element={<TrainerWelcome />} />
                        <Route path="pokemon" element={<PokemonWelcome />} />
                        <Route path="dashboard" element={<TrainerDashboard></TrainerDashboard>} />
                        <Route path="update" element={<TrainerUpdate></TrainerUpdate>} />
                    </Routes>
                </userContext.Provider>
            </BrowserRouter>
        </>
    );
}

export default App;