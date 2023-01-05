import { useState } from "react";
import Header from "./Header/Header";
import Slide from "./Slide/Slide";
import Categories from "./Categories/Categories";
import Courses from "./Courses/Courses";
import "./Home.scss";

function Home() {
  return (
    <>
      <Header />
      <Slide />
      <main>
        <Courses />
        <Categories />
      </main>
    </>
  );
}

export default Home;
