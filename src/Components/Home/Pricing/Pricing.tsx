import pricingList from "./mockPricing";
import PricingCard from "../../Utils/PricingCard";
import "./Pricing.scss";

function Pricing() {
  const buttonOnClick = (e: any) => {
    const circle: HTMLElement | null = document.querySelector('.pricing span.circle');
    const left = circle?.style.left;
    circle!.style.left = (left === "5px" || !left) ? "35px" : "5px";
  };

  return (
    <div className="pricing-container">
      <div className="pricing">
        <h1>Simple Pricing</h1>
        <p>Lorem ipsum dolor sit amet, consectetur.</p>
        <div className="frequency">
          <span>Monthly</span>
          <span className="button" onClick={buttonOnClick}>
            <span className="circle"></span>
          </span>
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
