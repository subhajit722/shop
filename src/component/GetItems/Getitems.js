import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom'; 
import { FaShoppingCart } from 'react-icons/fa';
import './Getitems.css';

function Getitems() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [pageNumber, setPageNumber] = useState(1); 
  const itemsPerPage = 18; 
const  user = localStorage.getItem('userid')
const navigate = useNavigate()
  const addtocard =()=> {
    if(user){
      console.log('user is here')
    }
    else{
navigate('/login')
    }

  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Update filtered products when products or page number change
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setFilteredProducts(products.slice(startIndex, endIndex));
  }, [pageNumber, products]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.1.12:5000/api/item/');
      // const response = await axios.get(`http://192.168.70.67:5000/api/item/`);
      setProducts(response.data.items);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleCategoryChange = (e) => {
    const category = parseInt(e.target.value);
    setSelectedCategory(category);
    if (category === '') {
      setFilteredProducts(products.slice(0, itemsPerPage));
    } else {
      const filteredData = products.filter(product => product.category === category);
      setFilteredProducts(filteredData.slice(0, itemsPerPage)); 
    }
    setPageNumber(1);
  };

  const handleNextPage = () => {
    setPageNumber(prevPageNumber => prevPageNumber + 1);
  };

  const handlePrevPage = () => {
    setPageNumber(prevPageNumber => prevPageNumber - 1);
  };

  return (
    <div className="Getitems">
      <header className="Getitems-header">
        <h1>Product List</h1>
        <div className="filter">
          <label htmlFor="categorySelect">Filter by category:</label>
          <select id="categorySelect" value={selectedCategory} onChange={handleCategoryChange}>
            <option value='1'>All</option>
            <option value='2'>Shirt</option>
            <option value='3'>Saree</option>
            <option value='4'>Jacket</option>
          </select>
        </div>
        <div className="product-list">
          {filteredProducts.map(item => (
            <Link key={item.itemid} to={`/product/${item.itemid}`} className="product-item">
              <div className="card-inner">
                <div className="card-front">
                  <img className="product-img" src={item.img1} alt={item.itemname} />
                </div>
                <div className="card-back">
                  <div className="product-info">
                    <h3>{item.itemname}</h3>
                    <p>Price: ₹{item.price}</p>
                    <p>Category: {item.category}</p>
              
                    <button className="add-to-cart" onClick={()=>{
                      addtocard()
                    }}>
            <FaShoppingCart /> Add to Cart
          </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="pagination">
          <button disabled={pageNumber === 1} onClick={handlePrevPage}>Prev</button>
          <span>Page {pageNumber}</span>
          <button disabled={filteredProducts.length < itemsPerPage} onClick={handleNextPage}>Next</button>
        </div>
      </header>
    </div>
  );
}

export default Getitems;
