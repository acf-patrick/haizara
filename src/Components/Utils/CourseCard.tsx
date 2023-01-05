import { ReactElement } from "react";
import ICourseCardProps from "../../Interfaces/ICourseCard";
import wallClock from "../../Assets/Images/wall-clock 1.svg";
import document from "../../Assets/Images/document 1.svg";
import surface from "../../Assets/Images/Surface 1.png";
import level from "../../Assets/Images/bar-chart 1.svg"
import author from "../../Assets/Images/author.png";
import star from "../../Assets/Images/star.svg";
import "./CourseCard.scss";

function CourseCard({ props }: { props: ICourseCardProps }) {
	let stars: ReactElement[] = [];
	for (let i = 0; i < Math.ceil(props.stars); ++i)
		stars.push(<img key={i} alt="star" src={star} />);

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
			<div className="ranking">
				<span>{props.stars}</span> {stars} <span>({props.year})</span>
			</div>
			<h1>{props.title}</h1>
			<div className="misc">
				<div className="lessons">
					<img src={document} alt="document" />
					<span>{props.lessons} lesson</span>
				</div>
				<div className="duration">
					<img src={wallClock} alt="wall-clock" />
					<span>{props.duration}</span>
				</div>
				<div className="level">
					<img src={level} alt="bar-chart" />
					<span>{props.level}</span>
				</div>
			</div>
			<div className="author-pricing">
				<div className="author">
					<img src={author} alt="author" />
					<span>{props.author}</span>
				</div>
				<div className="price">
					<span className="old">
						${props.oldPrice}
					</span>
					<span className="value">
						${props.price}
					</span>
				</div>
			</div>
    </div>
  );
}

export default CourseCard;
