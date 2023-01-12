import NewsCard from "../../Utils/NewsCard";
import MinNewsCard from "../../Utils/MinNewsCard";
import news from "./mockNews";
import "./News.scss";

function News() {
  return (
    <div className="news-n-events">
      <div className="title">
        <h1>News & Events</h1>
        <p>Lorem ipsum dolor sit amet, consectetur.</p>
      </div>
      <div className="list">
        <div className="news">
          <NewsCard {...news[0]} />
          <NewsCard {...news[1]} />
        </div>
        <div className="min">
          {news.slice(2).map((e, i) => (
            <MinNewsCard {...e} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
