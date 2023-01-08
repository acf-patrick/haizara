import IPricingCard from "../../Interfaces/IPricingCard";
import {ReactComponent as Check} from "../../Assets/Images/check.svg";
import "./PricingCard.scss";

function PricingCard({
  type,
  price,
  frequency,
  description,
  features,
}: IPricingCard) {
  return (
    <div className="pricing-card">
      <div className="head">
        <p>{type}</p>
        <p>{price}</p>
        <p>{frequency}</p>
      </div>
      <div className="body">
        <p className="description">{description}</p>
        <div className="features">
          {features.map((feature, i) => (
            <div key={i}>
              <Check />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <button>Get Started Now</button>
      </div>
    </div>
  );
}

export default PricingCard;
