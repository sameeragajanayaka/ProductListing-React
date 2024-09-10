import { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceRangeMinFilter, setPriceRangeMinFilter] = useState("0");
  const [priceRangeMaxFilter, setPriceRangeMaxFilter] = useState("10000");
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  const value = {
    categoryFilter,
    setCategoryFilter,
    priceRangeMinFilter,
    setPriceRangeMinFilter,
    priceRangeMaxFilter,
    setPriceRangeMaxFilter,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
