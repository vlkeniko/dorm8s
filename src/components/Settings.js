import React from "react";

export default function Settings(props) {
  return (
    <div className="settings">
      <hr className="profile-hr" />

      <div className="settings-slider">
        <p className="settings-text">Notifications</p>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>

      <div className="settings-slider">
        <p className="settings-text">Dark mode</p>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>

      <div className="view-all">
        <p className="settings-text">Your DORM8s</p>
        <p className="dorm8s-text">{props.lease.tenants}</p>
      </div>
    </div>
  );
}
