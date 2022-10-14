// This documment shows the menuitems(links) in the app's main navigation menu
// Implemented by app.js.
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
             <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="/kitchen">
          Kitchen
        </NavLink>
        <NavLink className="navlink" to="/laundry">
          Laundry
        </NavLink>
        </nav>
    );
}