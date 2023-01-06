import "./Categories.scss";
import "../../../Assets/Styles/styles.scss";
import send from "../../../Assets/Images/send.svg";
import CategoryCard from "../../Utils/CategoryCard";
import mockCategories from "./mockCategories";

function Categories() {
  return (
    <div className="categories">
      <div className="title">
        <div>
          <h1>top categories</h1>
          <p>10,000+ unique online course list designs</p>
        </div>
        <button>
          <span>all categories</span>
          <span>
            <img src={send} alt="send" width="12" />
          </span>
        </button>
      </div>
      <div className="list">
        {mockCategories.map((category, i) => (
          <CategoryCard
						key={i}
            image={category.image}
            title={category.title}
            courses={category.courses}
          />
        ))}
      </div>
    </div>
  );
}

export default Categories;
