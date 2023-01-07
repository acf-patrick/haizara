import Slide from "./Slide/Slide";
import Header from "./Header/Header";
import Courses from "./Courses/Courses";
import Students from "./Students/Students";
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
        <Students />
      </main>
    </>
  );
}

export default Home;
