import { Link, NavLink } from "react-router";
import './Header.css';
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/user.slice";

function Header() {
    const dispatch = useDispatch();
    return (
        <header>
            <ul className="nav-list">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>
                <li><Link onClick={() => dispatch(logout())}>Logout</Link></li>
            </ul>
        </header>
    )
}

export default Header