import ICategoryCard from "../../Interfaces/ICategoryCard";
import "./CategoryCard.scss";

function CategoryCard({ image: Image, title, courses }: ICategoryCard) {
  return (
    <div className="category-card">
      <div className="image">
				<Image />
			</div>
      <h1>{title}</h1>
      <p>{courses}+ Courses</p>
    </div>
  );
}

export default CategoryCard;
