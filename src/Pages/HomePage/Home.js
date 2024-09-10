import { useProductContext } from './../../store';
import Header from "./../../components/Header";
import HeaderMain from "./../../components/HeaderMain";
import Pagination from "./../../components/Pagination";
import Product from "./../../components/Product";
import React, { useEffect,useState} from "react";
function Home() {
    const {
      categoryFilter,
      priceRangeMinFilter,
      priceRangeMaxFilter,
      sortBy,
      setSortBy,
      sortOrder,
      setSortOrder
    } = useProductContext();
    const categories = ["Shoes", "Bag", "Watch"];
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1); // Current page
    const [productsPerPage] = useState(8); // Products per page
    const [totalPages, setTotalPages] = useState(0);
  
    
  
    const load = async () => {
      try {
        const res = await fetch("https://my-json-server.typicode.com/sameeragajanayaka/productlistdb/posts");
        const data = await res.json();
        setProducts(data);  // Store the fetched data in the state
        setLoading(true);  // Set loading to false once data is loaded
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(true);  // Handle errors and stop loading
      }
    };
  
    // useEffect to automatically run the load function when the component mounts
    useEffect(() => {
      load();  // Automatically call load when component mounts
    });
    
    const filteredProducts = products.filter((product) => {
      const categoryMatches = !categoryFilter || product.category.toLowerCase().includes(categoryFilter.toLowerCase());
      const priceMatches = product.price >= parseFloat(priceRangeMinFilter) && product.price <= parseFloat(priceRangeMaxFilter);
      return categoryMatches && priceMatches;
    });
  
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (sortBy === 'name') {
        return sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
      } else {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
      }
    });
    
    useEffect(() => {
      const totalPagesCalc = Math.ceil(sortedProducts.length / productsPerPage);
      setTotalPages(totalPagesCalc);
    }, [sortedProducts, productsPerPage]);
   
      const paginatedData = sortedProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
      );
    
  
    const handlePageChange = (page) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page); // Use setCurrentPage to update the page
      }
    };
  
    if (loading) {
    return (
      <div className="App pb-5" >
        <HeaderMain cate="Home" />
        <div className="container">
          <div className="row pt-5 pb-4">
            <div className="col-10 offset-1 center">
              <h2>Our Products</h2>
            </div>
          </div>
        </div>
        <Header categories={categories} />
        <div className="sort-block container pt-3">
          <select className="custom-input mx-1" value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}>
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
          </select>
          <select className="custom-input" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <div className="container pt-4">
          <div className="row center">
            {paginatedData.map((product, index) => (
              
              <Product key={product.id} productdetail={product} />
            
            ))}
          </div>
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    );
  }
  }
  
  export default Home;