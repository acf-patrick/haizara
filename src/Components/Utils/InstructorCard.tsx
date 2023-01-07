import "./InstructorCard.scss";
import star from "../../Assets/Images/star.svg";
import course from "../../Assets/Images/course.svg";
import twitter from "../../Assets/Images/twitter.svg";
import student from "../../Assets/Images/student.svg";
import facebook from "../../Assets/Images/facebook.svg";
import linkedin from "../../Assets/Images/linkedin.svg";
import instagram from "../../Assets/Images/instagram.svg";
import IInstructorCard from "../../Interfaces/IInstructorCard";
import defaultPhoto from "../../Assets/Images/Surface 2.png";

function InstructorCard({
  photo,
  name,
  status,
  stars,
  students,
  courses,
  facebook: facebookLink,
  twitter: twitterLink,
  instagram: instagramLink,
  linkedin: linkedinLink,
}: IInstructorCard) {
  return (
    <div className="instructor-card">
      <div
        className="photo"
        style={{
          background: `url(${photo ? photo : defaultPhoto})`,
        }}
      >
        <div className="inner">
          <div className="links">
            <a href={facebookLink ? facebookLink : "#"}>
              <img src={facebook} alt="facebook" />
            </a>
            <a href={twitterLink ? twitterLink : "#"}>
              <img src={twitter} alt="twitter" />
            </a>
            <a href={instagramLink ? instagramLink : "#"}>
              <img src={instagram} alt="instagram" />
            </a>
            <a href={linkedinLink ? linkedinLink : "#"}>
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
      <p className="name">{name}</p>
      <p className="status">{status}</p>
      <div className="misc">
        <span>
          <img src={star} alt="star" /> {stars}
        </span>
        <img src={student} alt="student" />
        <span>{students} Students</span>
        <img src={course} alt="course" />
        <span>{courses} Courses</span>
      </div>
    </div>
  );
}

export default InstructorCard;
