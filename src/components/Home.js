import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from "react-router-dom";
import MemberData from "./MemberData";
import Search from "./Search";
import "./Home.css";

function Home() {

    const history = useHistory();
    const routeToHome = () => {
        history.push("/");
    }

    return (
        <Router>
            <div className="App">
                <nav>
                    <h2>Team Members Site</h2>
                    <div className="nav-links">
                        <Link to="/" className="link">Home</Link>
                        <Link to="/memberdata/" className="link">Member List</Link>
                        <Link to="/search" className="link">Search</Link>
                    </div>
                </nav>
                <Switch>
                    <Route path="/memberdata">
                        <MemberData />
                    </Route>
                    <Route path="/search">
                        <Search />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Home;
