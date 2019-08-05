import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact-us">Contact us</Link>
            </nav>
        );
    }
}

export default Navbar;