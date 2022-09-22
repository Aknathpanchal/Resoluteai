import "./App.css";
import React from "react";
import Add from "./Components/Add";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr",
          border: "1px solid red",
          height: "550px",
          backgroundColor: "#FFFDFA",
          padding: "1%",
        }}
      >
        <div
          style={{
            border: "1px solid blue",
            display: "grid",
            gridTemplateRows: "1fr 2fr",
            padding: "1%",
          }}
        >
          <div>
            <h1>LOGO</h1>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", padding: "1%" }}
          >
            <button>
              <i className="fa-solid fa-user-plus"></i>Add Student
            </button>
            <button>
              <i class="fa-solid fa-list-check"></i>Manage Student
            </button>
            <button>
              <i class="fa-solid fa-right-from-bracket"></i>Logout
            </button>
          </div>
        </div>

        <div>
          <div
            style={{ border: "1px solid black", height: "18%", width: "100%" }}
          >
            <div
              style={{
                border: "1px solid black",
                margin: "3% 10% 0% 60%",
                width: "30%",
                height: "20%",
                padding: "1%",
              }}
            >
              <i class="fa-solid fa-user"></i>username@resoluteai.in
            </div>
          </div>
          <div>
            <Add />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
