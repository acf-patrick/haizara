import ICourseCardProps from "../../Interfaces/ICourseCard";
import "./CourseCard.scss";

function CourseCard({ props }: { props: ICourseCardProps }) {
  return (
    <div className="course-card">
      <div
        className="image"
        style={{
          background: `url(${
            props.image ? "props.image" : "../../Assets/Images/Surface 1.png"
          })`,
        }}
      >
        <div className="tags">
					
				</div>
      </div>
    </div>
  );
}

export default CourseCard;
