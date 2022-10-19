// This documment shows the menuitems(links) in the app's main navigation menu
// Implemented by app.js.
import { NavLink } from "react-router-dom";
import Home from "../pictures/home.png"

export default function Nav() {
  return (
    <>
        <nav>
       
      <NavLink className="navlink" to="/" >
      Home</NavLink>
      <NavLink className="navlink" to="/kitchen" >
      Kitchen</NavLink>
      <NavLink className="navlink" to="/laundry" >
      Laundry</NavLink>
      <NavLink className="navlink" to="/finances" >
      Finances</NavLink>
      <NavLink className="navlink" to="/login">
      Log in</NavLink>
    </nav>

<NavLink className="navlink navlink-profile" to="/profile" >
Profile</NavLink>
    </>

  );
}
