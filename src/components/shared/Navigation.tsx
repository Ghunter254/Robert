import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header>
      <h1 className="pageheader">
        Your <span className="text-gradient">3D Printing</span> solution
      </h1>
      <nav className="Navigation">
        <ul className="Navbaritems">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
          <li><Link to="/cart">View Cart</Link></li>
          <li><Link to="/login"><img className="icon"src="/assets/User1.png" alt="User" /></Link></li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}

export default Navigation;
