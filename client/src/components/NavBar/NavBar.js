import React from 'react';
import "./style.css";

const NavBar = () => {
    return(
        <>
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Google Books Search</a>
            <div id="navbarNavAltMarkup">
                <div className="nav">
                    <a className="nav-item nav-link" href="/">Home</a>
                    <a className="nav-item nav-link" href="/search">Search</a>
                    <a className="nav-item nav-link" href="/saved">Saved Books</a>
                </div>
            </div>
        </nav>
        <div className="jumbotron jumbotron-fluid">
            <div className="container text-center">
                <h1 className="display-4 pl-4">Novel Explorations</h1>
                <p className="lead pl-4">Search books and create a saved reading list. </p>
            </div>
        </div>
        </>
    )
}

export default NavBar;

