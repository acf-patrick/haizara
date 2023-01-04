import { useState } from "react";
import courses from "./mockCourses"
import CourseCard from "../../Utils/CourseCard";
import "./Courses.scss";

function Courses() {
  const [active, setActive] = useState(0);
  let categories: string[] = ["all", "trending", "popular", "featured"];

  return (
    <div className="popular-courses">
      <div className="title">
        <div className="text">
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
          {courses.map(course => 
            <CourseCard props={course} />
          )}
        </div>
        <button className="right"></button>
      </div>
    </div>
  );
}

export default Courses;
