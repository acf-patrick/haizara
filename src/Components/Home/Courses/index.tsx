import { useState } from "react";
import courses from "./mockCourses"
import CourseCard from "../../Utils/CourseCard";
import "../../../Assets/Styles/styles.scss";
import "./index.scss";

function Courses() {
  const [active, setActive] = useState(0);
  let categories: string[] = ["all", "trending", "popular", "featured"];

  return (
    <div className="popular-courses">
      <div className="title">
        <div>
          <h1>explore featured courses</h1>
          <p>10,000+ unique online course list designs</p>
        </div>
        <ul className="categories">
          {categories.map((category, i) => (
            <li key={i}>
              <a
                href="#"
                className={`${i == active ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(i);
                }}
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="courses">
        <button className="left"></button>
        <div className="list">
          {courses.map((course, i) => 
            <CourseCard {...course} key={i} />
          )}
        </div>
        <button className="right"></button>
      </div>
    </div>
  );
}

export default Courses;
