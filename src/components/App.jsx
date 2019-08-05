import React, { lazy, Suspense } from "react";

import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
const Contact = React.lazy(() => import('./Contact.jsx'));
const About = React.lazy(() => import('./About.jsx'));

import { HashRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <>
                <Suspense fallback={<div>Loading...</div>}>
                    <Navbar />

                    <Route exact path="/" component={Home} />
                    <Route path="/contact-us" component={Contact} />
                    <Route path="/about" component={About} />
                </Suspense>
            </>
        );

    }
}

export default App;