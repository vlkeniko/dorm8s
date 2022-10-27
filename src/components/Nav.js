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
    <div className="all-nav">
      <nav>
        <div className="navlink-container">
          <NavLink className="navlink home" activeClassName="navlink home-active" to="/" >
          </NavLink>
        </div>

        <div className="navlink-container">
          <NavLink className="navlink kitchen" activeClassName="navlink kitchen-active" to="/kitchen">
          </NavLink>
        </div>

        <div className="navlink-container">
          <NavLink className="navlink laundry" activeClassName="navlink kitchen-active" to="/laundry">
          </NavLink>
        </div>

        <div className="navlink-container">
          <NavLink className="navlink finances" activeClassName="navlink finances-active" to="/finances">
          </NavLink>
        </div>

        <div className="navlink-container">
          <NavLink className="navlink" to="/login">
          </NavLink>
        </div>
      </nav>
      <div className="navlink-container">
        <NavLink className="navlink navlink-profile" to="/profile">
          <img src={Profile} alt="homeicon" className="nav-icon"/>
        </NavLink>
      </div>
    </div>
  );
}
