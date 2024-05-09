import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import './Navbar.css'; // Make sure to import the corresponding CSS file
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [products, setProducts] = useState([]);
  const [productid, setProductid] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [serachproduct,setsearchproduct]= useState([])
  const searchProducts = (e) => {
    setSearchQuery(e.target.value);
    const pro = products.filter(item => item.itemname.toLowerCase().includes(searchQuery.toLowerCase()));
    console.log(pro)
    if(pro.length > 6){
    setsearchproduct(pro.slice(0,5));
    console.log(serachproduct)
    }else{
      setsearchproduct(pro)
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get(`http://192.168.70.67:5000/api/item/`);
        const response = await axios.get('http://192.168.1.12:5000/api/item/');
        setsearchproduct(response.data.items);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [searchProducts]);

  const navigate = useNavigate();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavbarVisible(currentScrollY < prevScrollY || currentScrollY <= 0);
      setPrevScrollY(currentScrollY);
      if (currentScrollY > prevScrollY) {
      
        setSearchQuery('');
       
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const fetchData = async () => {
    try {
      // const response = await axios.get(`http://192.168.70.67:5000/api/item/`);
      const response = await axios.get('http://192.168.1.12:5000/api/item/');
      let pro = response.data.items;
setProducts(response.data.items)
       if (productid !== 'search' && productid !=='') {
        pro = pro.filter(item => item.category === parseInt(productid));
        navigate('/category', { state: { pro } });
      }

    
      
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [productid]);

  useEffect(() => {
    const handleClickOutside = event => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



  useEffect(() => {
    if (prevScrollY > 0) {
      setSearchQuery('');
      setProducts([]);
    }
  }, [prevScrollY]);

  const gotouser =()=>{
    const user = localStorage.getItem('userid')
    if(user){
      navigate('/card')
    }
    else{
      navigate('/login')
    }
  }

  return (
    <div className={`navbar ${isNavbarVisible ? 'visible' : 'no'}`}>
      <div className="navbar-container">
        <Link to={"/"} className="logo-container">
          Logo
        </Link>
        <div className="nav-links-container">
          <div className="nav-icons">
            <FaSearch className="nav-icon" onClick={toggleSearch} />
            <FaUser className="nav-icon" onClick={gotouser} />
            <FaShoppingCart className="nav-icon" />
          </div>
        </div>
        {/* Toggle button added here */}
        <div className="toggle-drawer" onClick={toggleDrawer}>
          {isDrawerOpen ? <>&#10006;</> : <>&#9776;</>}
        </div>
      </div>
      {isDrawerOpen && (
        <div className="drawer">
          <div className="drawer-close" onClick={toggleDrawer}>
            &#10006;
          </div>
          <div className="drawer-links">
            <p onClick={() => setProductid(0)} className="drawer-link">SALE UPTO 40% OFF</p>
            <p onClick={() => setProductid(1)} className="drawer-link">COTTON WEAR</p>
            <p onClick={() => setProductid(2)} className="drawer-link">ANARKALI</p>
            <p onClick={() => setProductid(3)} className="drawer-link">LEHENGA</p>
            <p onClick={() => setProductid(4)} className="drawer-link">DRAPED DRESSES</p>
            <p onClick={() => setProductid(1)} className="drawer-link">PARTY WEAR</p>
            <p onClick={() => setProductid(2)} className="drawer-link">GOWN</p>
            <p onClick={() => setProductid(0)} className="drawer-link">SHOP ALL</p>
          </div>
        </div>
      )}
      {isSearchOpen && (
        <div className={`search-bar ${isSearchOpen ? 'open' : ''}`} ref={searchRef}>
          {/* Your search bar JSX here */}
          <input
            type="text"
            placeholder="Search..."
            className='in'
            value={searchQuery}
            onChange={(e) =>searchProducts(e)
            }
          />
          <button onClick={searchProducts}>Search</button>
        </div>
      )}
     



{searchQuery && (
  <div className='search-results'>
    {serachproduct.map(product => (
      <div key={product.itemid} className="search-item">
        <img src={product.img1} alt={product.itemname} className="search-item-img" />
      
          <p className="search-item-name">{product.itemname}</p>
          <p className="search-item-price">{product.price}</p>
       
      </div>
    ))}
  </div>
)}
      <div className='navlink'>
        <p onClick={() => setProductid(0)} className="drawer-link">SALE UPTO 40% OFF</p>
        <p onClick={() => setProductid(1)} className="drawer-link">COTTON WEAR</p>
        <p onClick={() => setProductid(2)} className="drawer-link">ANARKALI</p>
        <p onClick={() => setProductid(3)} className="drawer-link">LEHENGA</p>
        <p onClick={() => setProductid(4)} className="drawer-link">DRAPED DRESSES</p>
        <p onClick={() => setProductid(1)} className="drawer-link">PARTY WEAR</p>
        <p onClick={() => setProductid(2)} className="drawer-link">GOWN</p>
        <p onClick={() => setProductid(0)} className="drawer-link">SHOP ALL</p>
      </div>
    </div>
  );
};

export default Navbar;


