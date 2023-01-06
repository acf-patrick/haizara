import "./Instructors.scss";
import send from "../../../Assets/Images/send.svg";
import instructors from "./mockInstructors";
import InstructorCard from "../../Utils/InstructorCard";

function Instructors() {
  return (
    <div className="instructors-container">
      <div className="instructors">
        <div className="title">
          <div>
            <h1>learn from the best instructors</h1>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
          <button>
            <span>view all instructors</span>
            <span>
              <img src={send} alt="send" width="12" />
            </span>
          </button>
        </div>
        <div className="list">
          {instructors.map((instructor, i) => (
            <InstructorCard key={i} {...instructor} />
          ))}
        </div>
        <p className="message">
          Want to help people learn, grow and achieve more in life? <a href="#">Become an instructor</a>
        </p>
      </div>
    </div>
  );
}

export default Instructors;
