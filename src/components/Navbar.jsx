import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function Navbar() {
  return <div >
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand" >Marketplace</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Comprar</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Vender</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Items
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Swords</a></li>
                <li><a className="dropdown-item" href="#">Axes</a></li>
                <li><a className="dropdown-item" href="#">Maces</a></li>
                <li><a className="dropdown-item" href="#">Spears</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"></a>
            </li>
          </ul>
        </div>
      </div>
      <Link to={"/Cart"} className='btn btn-danger px-4 mx-4'><CartWidget /></Link>
    </nav>
  </div>;
}

export default Navbar;
