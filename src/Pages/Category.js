import React from 'react';
import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useEffect,useState } from 'react';

export default function Category() {
  const location = useLocation();
  const [ products,setProducts ]= useState([])
  const [pageNumber, setPageNumber] = useState(1); 
  const [resetpag,setresetpage]=useState(false)
  const { pro } = location.state;
  const itemsPerPage = 18; 




 useEffect(() => {
  // Update filtered products when products or page number change
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  setProducts(pro.slice(startIndex, endIndex));

}, [pageNumber, products]);
  const handleNextPage = () => {
    setPageNumber(prevPageNumber => prevPageNumber + 1);
  };

  const handlePrevPage = () => {
    setPageNumber(prevPageNumber => prevPageNumber - 1);
  };
  useEffect(()=>{
if(pro.length < itemsPerPage){
  setresetpage(true)
  setPageNumber(1)
}
else{
setresetpage(false)
}
  },[resetpag ,pro])

  return (
    <div className="Getitems">
    <header className="Getitems-header">
    
      <div className="product-list">
        {products.map(item => (
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
                  {/* Add button with icon */}
                  {/* <button className="add-to-cart">
                    <i className="fas fa-cart-plus"></i> Add to Cart
                  </button> */}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
     <div className="pagination">
        <button disabled={pageNumber === 1} onClick={handlePrevPage}>Prev</button>
        <span>Page {pageNumber}</span>
        <button disabled={products.length < itemsPerPage} onClick={handleNextPage}>Next</button>
      </div> 
    </header>
  </div>
  );
}
