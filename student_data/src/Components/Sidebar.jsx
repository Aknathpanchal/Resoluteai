import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <div className="div-button">
        <button>
          <i className="fa-solid fa-user-plus"></i>Add Student
        </button>
        <button>
          <i className="fa-solid fa-list-check"></i>Manage Student
        </button>
        <button>
          <i className="fa-solid fa-right-from-bracket"></i>Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
