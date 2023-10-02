import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Login from '../Login';

const Navbar = () => {
    const [toggle, setToggle] = useState(true);

    const logout = () => {
        localStorage.removeItem("admin");
    }

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3">
                <div className="flex-row d-flex">
                    <button
                        type="button"
                        className="navbar-toggler mr-2 "
                        data-toggle="offcanvas"
                        title="Toggle responsive left sidebar"
                        onClick={() => setToggle(!toggle)}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>


                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsingNavbar"

                >
                    <span className="navbar-toggler-icon" />
                </button>


                {
                    toggle && (
                        <div className="navbar-collapse" id="collapsingNavbar">
                            <ul className="navbar-nav navLink">
                                <li className="nav-item">

                                    <Link to="/home" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="//www.codeply.com">
                                Link
                            </a> */}
                                </li>
                                <li className="nav-item">

                                    <Link to="/login">Login</Link>
                                </li>
                                <li className="nav-item">

                                    <Link to="/register">Registration</Link>
                                </li>

                                <li className="nav-item" >
                                    <Link to="/login" onClick={logout} >
                                        Log Out
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )
                }
            </nav>

        </div>
    )
}

export default Navbar