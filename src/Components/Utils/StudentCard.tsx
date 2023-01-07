import IStudentCard from "../../Interfaces/IStudentCard";
import defaultPhoto from "../../Assets/Images/Surface 5.png";
import badgeSvg from "../../Assets/Images/badge.svg";
import { ReactComponent as Twitter } from "../../Assets/Images/twitter.svg";
import { ReactComponent as Facebook } from "../../Assets/Images/facebook.svg";
import { ReactComponent as Linkedin } from "../../Assets/Images/linkedin.svg";
import { ReactComponent as Instagram } from "../../Assets/Images/instagram.svg";
import "./StudentCard.scss";

function StudentCard({
  photo,
  name,
  badge,
  status,
  tags,
  facebook,
  twitter,
  instagram,
  linkedin,
}: IStudentCard) {
  return (
    <div className="student-card">
      {badge && (
        <span className="badge">
          <span>
            <img src={badgeSvg} alt="badge" />
          </span>
          <span>{badge}</span>
        </span>
      )}
      <div className="inner">
        <div className="photo">
          <img src={photo ? photo : defaultPhoto} alt="photo" />
        </div>
        <p className="name">{name}</p>
        <p className="status">{status}</p>
        <div className="links">
          <a href={facebook ? facebook : "#"}>
            <Facebook />
          </a>
          <a href={twitter ? twitter : "#"}>
            <Twitter />
          </a>
          <a href={instagram ? instagram : "#"}>
            <Instagram />
          </a>
          <a href={linkedin ? linkedin : "#"}>
            <Linkedin />
          </a>
        </div>
        <div className="tags">
          {tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
        <div className="button">
          <button>View Profile</button>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
