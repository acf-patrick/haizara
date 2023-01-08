import pricingList from "./mockPricing";
import PricingCard from "../../Utils/PricingCard";
import "./Pricing.scss";

function Pricing() {
  return (
    <div className="pricing-container">
      <div className="pricing">
        <h1>Simple Pricing</h1>
        <p>Lorem ipsum dolor sit amet, consectetur.</p>
        <div className="frequency">
          <span>Monthly</span>
          <button>
            <span className="circle"></span>
          </button>
          <span>
            Annualy <span className="save">Save 30%</span>
          </span>
        </div>
        <div className="list">
          {pricingList.map((pricing, i) => (
            <PricingCard key={i} {...pricing} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
