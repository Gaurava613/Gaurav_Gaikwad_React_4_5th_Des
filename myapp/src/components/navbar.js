import { Link } from "react-router-dom"




const NavBar=()=>{
    return(
        <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
         <h2>   Your Brand</h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav  ">
              <li className="nav-item">
                <Link to={'/home'} className="nav-link">
                <h6>  Home</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/details'} className="nav-link">
                <h6> Details</h6>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    )
}

export default NavBar;

