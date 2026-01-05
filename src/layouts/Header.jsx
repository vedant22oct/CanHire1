import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
<<<<<<< HEAD
import { useDispatch } from 'react-redux';

function Header() {
  // const [key, setKey] = useState('home');
     const dispatch = useDispatch();

    return (<header>
            <ul className="nav-list">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>
                <li><Link onClick={() => dispatch(logout())}>Logout</Link></li>
            </ul>
        </header>)
    /*
=======

function Header() {
    const [key, setKey] = useState('home');

>>>>>>> 8d6fac1b39faa877845963d21edd5a9b2f5c9470
    return (
        <>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="home" title="Home">
                    Tab content for Home
                </Tab>
                <Tab eventKey="profile" title="Apply Job">
                    Tab content for Job List and apply
                </Tab>
                <Tab eventKey="contact" title="Signup" disabled>
                    Tab content for Signin and signup
                </Tab>
                <Tab eventKey="contact" title="Tech Interview" disabled>
                    Tab content for Signin and signup
                </Tab>
                <Tab eventKey="contact" title="MANAGER" disabled>
                    Tab content for  Manage approval
                </Tab>
                <Tab eventKey="contact" title="Desk Allocate" disabled>
                    Tab content for Desk Allocation
                </Tab>
                <Tab eventKey="contact" title="Laptop Allocate" disabled>
                    Tab content for Laptop and equipment allocation
                </Tab>
            </Tabs >
        </>
<<<<<<< HEAD
    ); */
=======
    );
>>>>>>> 8d6fac1b39faa877845963d21edd5a9b2f5c9470
}

export default Header;