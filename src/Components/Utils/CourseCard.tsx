import ICourseCardProps from "../../Interfaces/ICourseCard";
import surface from "../../Assets/Images/Surface 1.png";
import "./CourseCard.scss";
import { spawn } from "child_process";

function CourseCard({ props }: { props: ICourseCardProps }) {
  return (
    <div className="course-card">
      <div
        className="image"
        style={{
          background: `url(${
            props.image ? props.image : surface
          })`,
        }}
      >
        <div className="tags">
					<span className={props.status ? props.status : "hide"}>{props.status}</span>
          {props.bestSeller && <span className={"best-seller"}>best seller</span>}
        </div>
        <div className="shadow"></div>
      </div>
    </div>
  );
}

export default CourseCard;
