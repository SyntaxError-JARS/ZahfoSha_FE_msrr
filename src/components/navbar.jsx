import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

export default function NavBar() {
    const navigate = useNavigate();
    return (
        <nav>
            <Link to="/">
                <button class="p-3 mb-2 bg-primary text-white">Home Page</button>
            </Link>
            <span> </span>
            <Link to="/login">
                <button class="p-3 mb-2 bg-secondary text-white">Login</button>
            </Link>
            <span> </span>
            <Link to="/register">
                <button class="p-3 mb-2 bg-warning text-dark">Sign up</button>
            </Link>
            <span> </span>
            <Link to="/menu">
                <button class="p-3 mb-2 bg-dark text-white">Our Menu/Order</button>
            </Link>
            <span> </span>
            <Link to="/contact">
                <button class="p-3 mb-2 bg-success text-white">Contact Us</button>
            </Link>
        </nav>
    );
}