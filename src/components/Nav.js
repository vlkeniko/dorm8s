// This documment shows the menuitems(links) in the app's main navigation menu
// Implemented by app.js.
import { NavLink } from "react-router-dom";
import Profile from "../pictures/profile.png";

export default function Nav() {
  return (
    <div className="all-nav">
      <nav>
        <div className="navlink-container">
          <NavLink className="navlink home" end to="/" >
          </NavLink>
        </div>

        <div className="navlink-container">
          <NavLink className="navlink kitchen" to="/kitchen">
          </NavLink>
        </div>

        <div className="navlink-container">
          <NavLink className="navlink laundry" to="/laundry">
          </NavLink>
        </div>

        <div className="navlink-container">
          <NavLink className="navlink finances" to="/finances">
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
