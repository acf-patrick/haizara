import INewsCard from "../../Interfaces/INewsCard";
import "./MinNewsCard.scss";

function MinNewsCard({ date, category, title }: INewsCard) {
  const space = date.indexOf(" ");
  const month = date.slice(0, space).substring(0, 4);
  const day = date.slice(space + 1, date.indexOf(","));

  return (
    <div className="min-news-card">
      <div className="date">
        <span>{day}</span>
        <span>{month}</span>
      </div>
      <div className="content">
        <span>{category}</span>
        <span>{title}</span>
      </div>
    </div>
  );
}

export default MinNewsCard;
