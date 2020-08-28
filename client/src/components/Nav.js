import React from 'react'
import "./Nav.css"
import {Link} from "react-router-dom"

const Nav = () => {
    return (
        <nav>
            <h2>Dog Breed Selector</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/register">Register Breed</Link>
                </li>
                <li>
                    <Link to="/images">Images</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav

