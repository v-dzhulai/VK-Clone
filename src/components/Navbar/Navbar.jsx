import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav">
            <div><Link to="/profile">Profile</Link></div>
            <div><Link to="/messages">Messages</Link></div>
            <div><Link to="/friends">Friends</Link></div>
            <div><Link to="/channels">Channels</Link></div>
            <div><Link to="/music">Music</Link></div>
            <div><Link to="news">News</Link></div>
            <div><Link to="/settings">Settings</Link></div>
        </nav>
    );
};

export default Navbar;
