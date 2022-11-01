// This documment shows the menuitems(links) in the app's main navigation menu
// Implemented by app.js.

// Eniko
// Icons + Hover CSS: Razvan 

import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="all-nav">
      <nav>
        <div className="navlink-container">
          <NavLink className="navlink home" end to="/dorm8ts.build/"></NavLink>
        </div>

        <div className="navlink-container">
          <NavLink className="navlink kitchen" to="/dorm8ts.build/kitchen"></NavLink>
        </div>

        <div className="navlink-container">
          <NavLink className="navlink laundry" to="/dorm8ts.build/laundry"></NavLink>
        </div>

        <div className="navlink-container">
          <NavLink className="navlink finances" to="/dorm8ts.build/finances"></NavLink>
        </div>

        {/*Profile is not a navlink here, it is a component because it doesnt display on all pages */}
      </nav>
    </div>
  );
}