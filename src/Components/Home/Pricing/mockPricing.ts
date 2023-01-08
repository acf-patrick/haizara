import IPricingCard from "../../../Interfaces/IPricingCard";

const pricingList: IPricingCard[] = [
  {
    type: "Basic",
    price: "Free",
    frequency: "per month",
    description: "Standard listing submission, active for 30 days.",
    features: [
      "All Operating Supported",
      "Great Interface",
      "Allows encryption",
      "Face recognized system",
      "24/7 Full support",
    ],
  },
  {
    type: "Professional",
    price: "$599.95",
    frequency: "per month",
    description: "Standard listing submission, active for 30 days.",
    features: [
      "All Operating Supported",
      "Great Interface",
      "Allows encryption",
      "Face recognized system",
      "24/7 Full support",
    ],
  },
  {
    type: "Business",
    price: "$999.95",
    frequency: "per month",
    description: "Standard listing submission, active for 30 days.",
    features: [
      "All Operating Supported",
      "Great Interface",
      "Allows encryption",
      "Face recognized system",
      "24/7 Full support",
    ],
  },
];

export default pricingList;
