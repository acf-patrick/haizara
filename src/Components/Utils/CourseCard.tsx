import { ReactElement } from "react";
import ICourseCardProps from "../../Interfaces/ICourseCard";
import wallClock from "../../Assets/Images/wall-clock 1.svg";
import document from "../../Assets/Images/document 1.svg";
import surface from "../../Assets/Images/Surface 1.png";
import levelSvg from "../../Assets/Images/bar-chart 1.svg";
import authorDefault from "../../Assets/Images/author.png";
import star from "../../Assets/Images/star.svg";
import "./CourseCard.scss";

function CourseCard({
  image,
  year,
  stars,
  title,
  lessons,
  duration,
  level,
  authorPhoto,
  author,
  oldPrice,
  price,
  bestSeller,
  status,
}: ICourseCardProps) {
  let starsElt: ReactElement[] = [];
  for (let i = 0; i < Math.ceil(stars); ++i)
    starsElt.push(<img key={i} alt="star" src={star} />);

  return (
    <div className="course-card">
      <div
        className="image"
        style={{
          background: `url(${image ? image : surface})`,
        }}
      >
        <div className="tags">
          <span className={status ? status : "hide"}>
            {status}
          </span>
          {bestSeller && (
            <span className={"best-seller"}>best seller</span>
          )}
        </div>
        <div className="shadow"></div>
      </div>
      <div className="ranking">
        <span>{stars}</span> {starsElt} <span>({year})</span>
      </div>
      <h1>{title}</h1>
      <div className="misc">
        <div className="lessons">
          <img src={document} alt="document" />
          <span>{lessons} lesson</span>
        </div>
        <div className="duration">
          <img src={wallClock} alt="wall-clock" />
          <span>{duration}</span>
        </div>
        <div className="level">
          <img src={levelSvg} alt="bar-chart" />
          <span>{level}</span>
        </div>
      </div>
      <div className="author-pricing">
        <div className="author">
          <img src={authorPhoto ? authorPhoto : authorDefault} alt="author" />
          <span>{author}</span>
        </div>
        <div className="price">
          <span className="old">${oldPrice}</span>
          <span className="value">${price}</span>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
