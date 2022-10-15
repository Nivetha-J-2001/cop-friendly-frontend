import React from "react";
import { useHistory } from "react-router-dom";
import "../../CSS/header.css";
export default function Header() {
    const history=useHistory();
    return(
        <nav className="navbar">
            <h2>COB eSEVA APP</h2>
            <ul className="nav-links">
            <li onClick={()=> { history.push("/"); localStorage.clear(); }}>Logout</li>
            </ul>
        </nav>
    )
}