import React from "react";

const Deals = ({ deals }) => {
  return (
    <div className="deals">
      <div>
        <h1 className="deals-header">Completed Deals</h1>
        <div className="deals-list">
          {deals.map((deal) => (
            <div className="deal-item" key={deal.key}>
              <span>Product: {deal.product}</span>
              <b>Address: {deal.location}</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deals;
