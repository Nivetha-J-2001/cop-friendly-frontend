import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "../../CSS/header.css";
export default function Header() {
    const history=useHistory();
    return(
        <nav className="navbar">
            <h2>COP eSEVA APP</h2>
            <ul className="nav-links">
            <li onClick={()=> { history.push("/"); localStorage.clear(); toast.error("Logout successfully")}}>
                <input type="submit" value="Logout"/>
            </li>
            </ul>
        </nav>
    )
}