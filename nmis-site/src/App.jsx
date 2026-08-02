import React, { useState, useEffect } from "react";
import Home from "./Home.jsx";
import Registration from "./Registration.jsx";

function getPageFromHash() {
  return window.location.hash === "#register" ? "register" : "home";
}

export default function App() {
  const [page, setPage] = useState(getPageFromHash());

  useEffect(() => {
    function onHashChange() {
      setPage(getPageFromHash());
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  function navigate(target) {
    window.location.hash = target === "register" ? "#register" : "#home";
    setPage(target);
    window.scrollTo(0, 0);
  }

  return page === "register" ? (
    <Registration onNavigate={navigate} />
  ) : (
    <Home onNavigate={navigate} />
  );
}
