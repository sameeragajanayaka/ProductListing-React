import React from "react";
import "./Product.css";

const Product = ({ productdetail }) => {
  return (
    <div className="col-12 col-lg-3 col-md-4 p-2">
      <div className="card custom-card">
        <div
          className="card-img-top bg-cover custom-img"
          style={{ backgroundImage: `url(${productdetail.img})` }}
        ></div>
        <div className="card-body px-4 py-3">
          <h5 className="card-title text-dark text-uppercase">
            {productdetail.title}
          </h5>
          <p className="card-text">
            <span className="text-dark fw-bold">
              LKR {parseFloat(productdetail.price).toFixed(2)}
            </span>
            <br />
            <span className="text-muted">
              {productdetail.color} - {productdetail.category}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
