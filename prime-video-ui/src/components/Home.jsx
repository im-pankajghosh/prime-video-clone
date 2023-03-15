import React from "react";
import Overview from "../pages/Overview";
import Primevideo from "../pages/Primevideo";
export default function Home() {
  let login = localStorage.getItem("login");
  if (!login) {
    return (
      <>
        <Overview />
      </>
    );
  }
  if (login) {
    return (
      <>
        <Primevideo />
      </>
    );
  }
}
