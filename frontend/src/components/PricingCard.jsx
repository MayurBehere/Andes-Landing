/* eslint-disable react/prop-types */
// src/components/PricingCard.js

const PricingCard = ({ icon, title, description, actualPrice, fakePrice, linkText, linkUrl }) => {
  // Extract numeric value from actualPrice string
  const numericActualPrice = parseFloat(actualPrice);

  const discountPercentage = Math.round(((fakePrice - numericActualPrice) / fakePrice) * 100);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center mb-4">
        <img src={icon} alt={title} className="w-12 h-12 mr-4" />
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <div className="mb-4">
        <span className="text-xl font-bold text-blue-600">₹{actualPrice}</span>
        <span className="line-through text-red-500 ml-2">₹{fakePrice}</span>
        <span className="text-green-500 ml-2">{discountPercentage}% off</span>
      </div>
      <a href={linkUrl} className="text-blue-500 hover:underline">{linkText}</a>
    </div>
  );
};

export default PricingCard;