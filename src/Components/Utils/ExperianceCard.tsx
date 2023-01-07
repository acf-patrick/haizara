import "./ExperianceCard.scss";

interface ExperianceCardProps {
  image: string;
  title: string;
  description: string;
}

function ExperianceCard({ image, title, description }: ExperianceCardProps) {
	return <div className="experiance-card">
    <div className="inner">
      <div className="image">
        <img src={image} alt="image" />
      </div>
      <p>{title}</p>
      <p className="description">{description}</p>
    </div>
  </div>
}

export default ExperianceCard;
