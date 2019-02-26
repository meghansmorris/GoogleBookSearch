import React from 'react';
import "./style.css";

const NavBar = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Google Books Search</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="/">Home</a>
                    <a className="nav-item nav-link" href="/search">Search</a>
                    <a className="nav-item nav-link" href="/saved">Saved Books</a>
                </div>
            </div>
        </nav>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Novel Explorations</h1>
                <p class="lead">Search books and create a saved reading list. </p>
            </div>
        </div>
        </>
    )
}

export default NavBar;

