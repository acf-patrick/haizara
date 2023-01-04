import { useState } from "react";
import Header from "./Header/Header";
import Slide from "./Slide/Slide";
import Courses from "./Courses/Courses";
import "./Home.scss";

function Home() {
  return (
    <>
      <Header />
      <Slide />
      <main>
        <Courses />
      </main>
    </>
  );
}

export default Home;
