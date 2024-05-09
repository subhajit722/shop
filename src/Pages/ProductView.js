import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductView.css';
import { useParams,Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

export default function ProductView() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImg, setMainImg] = useState('');
  const [relatedProducts, setRelatedProducts] = useState([]);

  const fetchRelatedProducts = async (category) => {
    try {
      const response = await axios.get(`http://192.168.1.12:5000/api/item/`);
      // const response = await axios.get(`http://192.168.70.67:5000/api/item/`);
      const filteredProducts = response.data.items.filter(item => item.category === category && item.itemid !== id);
      setRelatedProducts(filteredProducts);
    } catch (error) {
      console.error('Error fetching related products:', error);
    }
  };

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://192.168.1.12:5000/api/item/${id}`);
      // const response = await axios.get(`http://192.168.70.67:5000/api/item/${id}`);
      const productData = response.data.item[0];
      setProduct(productData);
      setMainImg(productData.img1);
      fetchRelatedProducts(productData.category);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="product-view">
        <div className="imgbox">
          <div className="mainimg">
            <img className='img1s' src={mainImg} alt={product.itemname}/>
          </div>
          <div className='smallimg'>
            <div className='btnimg' onClick={() => { setMainImg(product.img2) }}>
              <img className='imgs2' src={product.img2} alt={product.itemname}/>
            </div>
            <div className='btnimg' onClick={() => { setMainImg(product.img3) }}>
              <img className='imgs2' src={product.img3} alt={product.itemname}/>
            </div>
            <div className='btnimg' onClick={() => { setMainImg(product.img4) }}>
              <img className='imgs2' src={product.img4} alt={product.itemname}/>
            </div>
            <div className='btnimg' onClick={() => { setMainImg(product.img5) }}>
              <img className='imgs2' src={product.img5} alt={product.itemname}/>
            </div>
          </div>
        </div>
        <div className="product-desc">
          <h2>{product.itemname}</h2>
          <p>Price: ₹{product.price}</p>
          <p>Category: {product.category}</p>
          <button className="add-to-cart">
            <FaShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
      <div className="related-products">
        <h2>Related Products</h2>
        <div className="related-products-list">
      
          {relatedProducts.map((relatedProduct, index) => (
              <Link key={relatedProduct.itemid} to={`/product/${relatedProduct.itemid}`}>
           <div className="related-product">
           <div className="card-inner">
             <div className="card-front">
               <img src={relatedProduct.img1} alt={relatedProduct.itemname} />
             </div>
             <div className="card-back">
               <p>Price: ₹{relatedProduct.price}</p>
               <p>Category: {relatedProduct.category}</p>
               <button className="add-to-cart">Add to Cart</button>
             </div>
           </div>
         </div>
        </Link>
          ))}
        </div>
      </div>
    </>
  );
}
