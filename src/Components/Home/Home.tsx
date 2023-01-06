import Slide from "./Slide/Slide";
import Header from "./Header/Header";
import Courses from "./Courses/Courses";
import Categories from "./Categories/Categories";
import Instructors from "./Instructors/Instructors";
import "./Home.scss";

function Home() {
  return (
    <>
      <Header />
      <Slide />
      <main>
        <Courses />
        <Categories />
        <Instructors />
      </main>
    </>
  );
}

export default Home;
