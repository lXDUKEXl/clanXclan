import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#222" }}>
      <Link to="/" style={{ marginRight: "10px", color: "#0f0" }}>Home</Link>
      <Link to="/teams" style={{ marginRight: "10px", color: "#0f0" }}>Teams</Link>
      <Link to="/matches" style={{ color: "#0f0" }}>Matches</Link>
    </nav>
  );
}
