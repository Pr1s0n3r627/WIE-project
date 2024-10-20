import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css"; // Assuming you have a style.css for global styles

const Main = () => {
  return (
    <div className="main-container">
      <header className="app-header">
        <h1>Health Assistant App</h1>
      </header>
      <main className="content">
        <App />
      </main>
      <footer className="app-footer">
        <p>Powered by AI and Data Science</p>
      </footer>
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
