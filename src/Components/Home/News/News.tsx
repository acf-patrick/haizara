import NewsCard from "../../Utils/NewsCard";
import EventCard from "../../Utils/EventCard";
import news from "./mockNews";
import events from "./mockEvents";
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
          {news.map((n, i) => (
            <NewsCard {...n} key={i} />
          ))}
        </div>
        <div className="events">
          {events.map((e, i) => (
            <EventCard {...e} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
