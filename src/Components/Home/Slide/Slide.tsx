import "./Slide.scss";
import amazon from "../../../Assets/Images/amazon-4.svg";
import amd from "../../../Assets/Images/amd-logo-1-2.svg";
import cisco from "../../../Assets/Images/cisco-2-1-2.svg";
import dropcam from "../../../Assets/Images/dropcam.svg";
import logitech from "../../../Assets/Images/logitech-2-1-3-1.svg";
import spotify from "../../../Assets/Images/Spotify-2-2.svg";


function Slide() {
  const logos: string[] = [
    amazon, amd, cisco,
    dropcam, logitech, spotify
  ];

  return (
    <>
      <div className="slide_container">
        <div className="text">
          <h1>
            <span>master the skills to</span>
            <span>
              {" "}
              drive your <span className="career">Career</span>
            </span>
          </h1>
          <p>
            <span>free online courses from the world's leading experts.</span>
            <span>join 17 million learners today</span>
          </p>
          <div className="buttons">
            <button>join for free</button>
            <button>find courses</button>
          </div>
        </div>
      </div>
      <div className="logos">
        {logos.map((logo, index) => <img src={logo} key={index} alt={logo} />)}
      </div>
    </>
  );
}

export default Slide;
