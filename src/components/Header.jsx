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
<<<<<<< HEAD
                <li><NavLink to="/joblist">ApplyJob</NavLink></li>
                <li><NavLink to="/signin">Candidate Signin</NavLink></li>
                <li><NavLink to="/techinterview">TechInterview</NavLink></li>
                <li><NavLink to="/techinterview">Location</NavLink></li>
                <li><NavLink to="/techinterview">Equipment</NavLink></li>
=======
                <li><NavLink to="/products">Products</NavLink></li>
>>>>>>> 8d6fac1b39faa877845963d21edd5a9b2f5c9470
                <li><NavLink to="/users">Users</NavLink></li>
                <li><Link onClick={() => dispatch(logout())}>Logout</Link></li>
            </ul>
        </header>
    )
<<<<<<< HEAD
    //test change
}
//<li><NavLink to="/products">Products</NavLink></li>
                
export default Header;
=======
}

export default Header
>>>>>>> 8d6fac1b39faa877845963d21edd5a9b2f5c9470
