import React, { useState, useEffect } from "react";

useEffect(() => {
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

function handleScroll() {
  setIsScrolling(window.pageYOffset > 0);
}
return (
  <nav className={isScrolling ? "navbar-scrolling" : "navbar"}>
    {/* navbar content here */}
  </nav>
);