import students from "./mockStudents";
import send from "../../../Assets/Images/send.svg";
import StudentCard from "../../Utils/StudentCard";
import "../../../Assets/Styles/styles.scss";
import "./Students.scss";

function Students() {
  return (
    <div className="students-container">
      <div className="students">
        <div className="title">
          <div>
            <h1>top students</h1>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
          <button>
            <span>view all students</span>
            <span>
              <img src={send} alt="send" width="12" />
            </span>
          </button>
        </div>
        <div className="list">
          {students.map((student, i) => (
            <StudentCard {...student} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Students;
