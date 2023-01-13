import "./index.scss";

function Recommendations() {
  return <div className="recommendations-container">
    <div className="recommendations">
      <div className="title">
        <h1>Get personnal learning recommendations</h1>
        <p>Enhance your skills with best online courses</p>
      </div>
      <form>
        <select name="category" id="category">
          <option value="" disabled selected>Category</option>
        </select>
        <select name="difficulty" id="difficulty">
          <option value="" disabled selected>Difficulty</option>
        </select>
        <button type="submit">Get started now</button>
      </form>
    </div>
  </div>
}

export default Recommendations;