import React from 'react';
import { NavLink } from "react-router-dom";


const Nav = () => {


    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="navbar-brand" href="#" style={{ color: "white", marginLeft: "10px" }}>Vishal Mahto</div>
                  <NavLink to="/" className="nav"><div>Add Users</div></NavLink>
                  <NavLink to="/add"  className="nav"><div>All User</div></NavLink>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                </div>
            </nav>

        </div>
    )

}

export default Nav;