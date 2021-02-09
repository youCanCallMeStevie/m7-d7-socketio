import React from "react";
import {} from "react-bootstrap";
import "../Styles/ham-navbar.css"

function HamburgerNavbar() {
  function toggle() {
    // Declare variable menu
    let menu = document.getElementById("side-menu");

    // toggle code
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }

  document.getElementById("ham-button").addEventListener("click", toggle);
  return (
    <div>
      <button onclick="toggle()" id="ham-button" class="ham-button">
        <i class="fas fa-bars"></i>
      </button>
      <div class="side-menu" id="side-bar">
        <h3>Menu</h3>
        <a href="https://www.codingcommanders.com">
          <i class="fas fa-globe"></i> Website
        </a>
        <a target="blank" href="https://twitter.com/codingCommander">
          <i class="fab fa-twitter"></i> Twitter
        </a>
        <a target="blank" href="https://www.facebook.com/codingcommanders/">
          <i class="fab fa-facebook"></i> Facebook
        </a>
        <a target="blank" href="https://www.youtube.com/codingcommanders">
          <i class="fab fa-youtube"></i> YouTube
        </a>
        <h3>Hamburger Menu Tutorials</h3>
        <a href="https://www.codingcommanders.com/mobile-hamburger-menu/">
          Build a Mobile Hamburger Menu
        </a>
        <a href="https://www.codingcommanders.com/website-builder/javascript-hamberger-menu.html">
          JavaScript Hamburger Menu
        </a>
      </div>
    </div>
  );
}
export default HamburgerNavbar;
