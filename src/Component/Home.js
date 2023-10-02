import React from 'react'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import Navbar from './Navbar'
import '../style.css'
const Home = () => {
    return (
        <div className="container-fluid" id="main">
            <div className="row row-offcanvas row-offcanvas-left">
                <Navbar />
                <Sidebar />
                <Dashboard />
            </div>
        </div>
    )
}

export default Home