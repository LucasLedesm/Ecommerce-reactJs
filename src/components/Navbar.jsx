import React from 'react';
import CartWidget from './CartWidget';
import { Link} from 'react-router-dom';

function Navbar() {
  
  return <div >
    <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark ">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand" ><i className="bi bi-bug-fill"></i>Marketplace</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link to={"/category/spear"}className="nav-link active" aria-current="page">Spears </Link></li>
            <li class="nav-item"><Link to={"/category/sword"} className="nav-link active" aria-current="page">Swords </Link></li>
            <li class="nav-item"><Link to={"/category/axe"} className="nav-link active" aria-current="page">Axes </Link> </li>
            <li class="nav-item"><Link to={"/category/mace"} className="nav-link active" aria-current="page" >Maces </Link> </li>
            <li className="nav-item justify-content-end"> <Link to={"/Cart"} ><CartWidget /></Link></li>
          </ul>
        </div>
      </div>
     
     
    </nav>
  </div>;
}

export default Navbar;
