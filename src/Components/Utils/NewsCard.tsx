import surface from "../../Assets/Images/image 121.png";
import INewsCard from "../../Interfaces/INewsCard";
import "./NewsCard.scss";

function NewsCard({ image, title, category, date }: INewsCard) {
  return (
    <div className="news-card">
      <div className="image">
        <img src={image ? image : surface} alt="image" />
      </div>
      <div className="category">{category}</div>
      <h1>{title}</h1>
      <div className="date">{date}</div>
    </div>
  );
}

export default NewsCard;
