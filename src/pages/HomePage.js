import React from "react";
import CardGrid from "../components/CardGrid";
import PrimarySearchAppBar from "../components/PrimarySearchAppBar";

function HomePage() {
  return (
    <div>
      <PrimarySearchAppBar />
      <CardGrid />
    </div>
  );
}

export default HomePage;
