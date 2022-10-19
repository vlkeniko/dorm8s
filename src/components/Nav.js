// This documment shows the menuitems(links) in the app's main navigation menu
// Implemented by app.js.
import { NavLink } from "react-router-dom";
import Home from "../pictures/home.png";
import Kitchen from "../pictures/cutlery.png";
import Laundry from "../pictures/laundry.png";
import Finances from "../pictures/finances.png";
import Profile from "../pictures/profile.png";

export default function Nav() {
  return (
    <>
      <nav>
        <div className="navlink-container">
          <NavLink className="navlink" to="/" >
            <img src={Home} alt="homeicon" className="nav-icon"/>
            Home
          </NavLink>
        </div>

        <div className="navlink-container">
          <NavLink className="navlink" to="/kitchen">
            <img src={Kitchen} alt="homeicon" className="nav-icon"/>
            Kitchen
          </NavLink>
        </div>

        <div className="navlink-container">
          <NavLink className="navlink" to="/laundry">
            <img src={Laundry} alt="homeicon" className="nav-icon"/>
            Laundry
          </NavLink>
        </div>

        <div className="navlink-container">
          <NavLink className="navlink" to="/finances">
            <img src={Finances} alt="homeicon" className="nav-icon"/>
            Finances
          </NavLink>
        </div>

        <div className="navlink-container">
          <NavLink className="navlink" to="/login">
            <img src={Home} alt="homeicon" className="nav-icon"/>
            Log in
          </NavLink>
        </div>
      </nav>
      <div className="navlink-container">
        <NavLink className="navlink navlink-profile" to="/profile">
          <img src={Profile} alt="homeicon" className="nav-icon"/>
          Profile
        </NavLink>
      </div>
    </>
  );
}
