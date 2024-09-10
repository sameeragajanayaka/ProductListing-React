import React, { useState } from "react";
import "./Header.css";
import { useProductContext } from './../store';

const Header = ({ categories}) => {
  const {
    categoryFilter,
    setCategoryFilter,
    priceRangeMinFilter,
    setPriceRangeMinFilter,
    priceRangeMaxFilter,
    setPriceRangeMaxFilter,
  } = useProductContext();
  const [localCategoryFilter, setLocalCategoryFilter] = useState(categoryFilter);
  const [localPriceRange, setLocalPriceRange] = useState([priceRangeMinFilter,priceRangeMaxFilter]);

  const handleCategoryChange = (event) => {
    setLocalCategoryFilter(event.target.value);
  };

  const handlePriceMinChange = (event) => {
    setLocalPriceRange([event.target.value, localPriceRange[1]]);
  };

  const handlePriceMaxChange = (event) => {
    setLocalPriceRange([localPriceRange[0], event.target.value]);
  };

  const handleApplyClick = () => {
    // Update the context/store with the current local state
    setCategoryFilter(localCategoryFilter);
    console.log(localPriceRange);
    setPriceRangeMinFilter(localPriceRange[0]);
    setPriceRangeMaxFilter(localPriceRange[1]);
  };
  return (
    <div className="container">
      <div className="row row-mod">
        <div className=" col-12">
          <div className="bg-gray-100  p-3 row">
            <div className="col-12 col-lg-4 col-md-4 m-1">
              <div className="col-span-2">
                <div className="flex-row items-center">
                  <p className=" font-medium  text-black m-1">Categroy</p>
                  <select className="custom-input " value={localCategoryFilter} onChange={handleCategoryChange}>
                    <option value="">All Categories</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5 col-md-5 m-1">
              <div className="col-span-2">
                <div className="flex-row items-center">
                  <p className=" font-medium  text-black m-1 mx-2">Price</p>
                  <input
                    className="custom-input"
                    placeholder="Min Price"
                    type="number"
                    value={localPriceRange[0]}
                    onChange={handlePriceMinChange}
                  />
                  <p className=" font-medium  text-black m-1 mx-3">to</p>
                  <input
                    className="custom-input"
                    placeholder="Max Price"
                    type="number"
                    value={localPriceRange[1]}
                    onChange={handlePriceMaxChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-2 col-md-2 m-1">
              <button className="custom-button" onClick={handleApplyClick}>
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
