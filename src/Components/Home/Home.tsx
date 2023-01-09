import News from "./News/News";
import Slide from "./Slide/Slide";
import Header from "./Header/Header";
import Pricing from "./Pricing/Pricing";
import Courses from "./Courses/Courses";
import Students from "./Students/Students";
import Categories from "./Categories/Categories";
import Instructors from "./Instructors/Instructors";
import ExperianceCard from "../Utils/ExperianceCard";
import learn from "../../Assets/Images/learn.svg";
import {ReactComponent as Apple} from "../../Assets/Images/apple.svg";
import experts from "../../Assets/Images/experts.svg";
import {ReactComponent as GooglePlay} from "../../Assets/Images/google-play.svg";
import certificate from "../../Assets/Images/certificate 1.svg";
import onlineLearning from "../../Assets/Images/online-learning 1.svg";
import "./Home.scss";

function Home() {
  const experianceCards: string[][] = [
    [
      experts,
      "Learn with Experts",
      "Grursus mal suada facil lisis that ipsum ameti consecte.",
    ],
    [
      learn,
      "Learn Anything",
      "Grursus mal suada facil lisis that ipsum ameti consecte.",
    ],
    [
      onlineLearning,
      "Flexible Learning",
      "Grursus mal suada facil lisis that ipsum ameti consecte.",
    ],
    [
      certificate,
      "Industrial Standard",
      "Grursus mal suada facil lisis that ipsum ameti consecte.",
    ],
  ];

  return (
    <>
      <Header />
      <Slide />
      <main>
        <Courses />
        <Categories />
        <Instructors />
        <Students />
        <div className="experiance">
          <h1>Start your Learning Journey Today!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
          <div>
            {experianceCards.map((e, i) => (
              <ExperianceCard
                image={e[0]}
                title={e[1]}
                description={e[2]}
                key={i}
              />
            ))}
          </div>
        </div>
        <Pricing />
        <div className="apps">
          <div className="frame"></div>
          <div className="links">
            <h1>
              <div>Learn From</div>
              <div>Anywhere</div>
            </h1>
            <p>
              Take classes on the go with the educrat app. Stream or download to
              watch on the plane, the subway, or wherever you learn best.
            </p>
            <div className="buttons">
              <button>
                <Apple />
                <div>
                  <span>Download on the</span>
                  <span>Apple Store</span>
                </div>
              </button>
              <button>
                <GooglePlay />
                <div>
                  <span>Get it on</span>
                  <span>Google Play</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <News />
      </main>
    </>
  );
}

export default Home;
