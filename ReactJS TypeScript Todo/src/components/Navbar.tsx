import React, {FunctionComponent} from "react";
import {NavLink} from "react-router-dom";

export const Navbar: FunctionComponent = () => {
    return (
        <nav>
            <div className="nav-wrapper teal lighten-3 px1">
                <a href="/" className="brand-logo">React + TypeScript</a>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/">Job List</NavLink></li>
                    <li><NavLink to="/about">Information</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
