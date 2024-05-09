import React, { useState, useEffect } from 'react';
import './HotArrival.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const HotArrival = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.utils.toArray('.slider').forEach((item, index) => {
      gsap.fromTo(item, 
        { y: '+=100', opacity: 0 },
        { 
          y: 0, 
          opacity: 1,
          duration: 3,
          ease: 'slow',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'bottom 20%', 
            toggleActions: 'play none none reverse',
            // markers: 5,
          },
        }
      );
    });
  }, []);
 
  const products = [
    {
      "id": 1,
      "title": "Elegant Evening Gown",
      "price": "$299.99",
      "image": "https://www.akirathecouture.com/cdn/shop/files/86FE1192-0A9C-4B1A-987A-ADE392F952D5.png?v=1714483052&width=360",
      "image2": "https://www.akirathecouture.com/cdn/shop/files/F04FC7A2-5778-4CEA-A5D8-B6BE8BAEDE2E.png?v=1714278243&width=360" 
    },
    {
      "id": 2,
      "title": "Summer Floral Dress",
      "price": "$159.95",
      "image": "https://www.akirathecouture.com/cdn/shop/files/F04FC7A2-5778-4CEA-A5D8-B6BE8BAEDE2E.png?v=1714278243&width=360",
      "image2": "https://www.akirathecouture.com/cdn/shop/files/86FE1192-0A9C-4B1A-987A-ADE392F952D5.png?v=1714483052&width=360"
    },
    {
      "id": 3,
      "title": "Casual Denim Top",
      "price": "$89.50",
      "image": "https://www.akirathecouture.com/cdn/shop/files/9FF2344B-2172-4243-988D-17ED2A387E62.png?v=1714197735&width=360",
      "image2": "https://www.akirathecouture.com/cdn/shop/files/5244B6E2-2E73-4E4D-8B90-C81392FD57F6.jpg?v=1713962474&width=360" 
    },
    {
      "id": 4,
      "title": "Classic Leather Jacket",
      "price": "$499.99",
      "image": "https://www.akirathecouture.com/cdn/shop/files/5244B6E2-2E73-4E4D-8B90-C81392FD57F6.jpg?v=1713962474&width=360",
      "image2": "https://www.akirathecouture.com/cdn/shop/files/9FF2344B-2172-4243-988D-17ED2A387E62.png?v=1714197735&width=360"
    },
    {
      "id": 5,
      "title": "Red Carpet Silk Gown",
      "price": "$999.99",
      "image": "https://www.akirathecouture.com/cdn/shop/files/99DC17E2-A8CE-4336-846B-3AEA5983F38E.jpg?v=1713696719&width=1296",
      "image2": "https://www.akirathecouture.com/cdn/shop/files/91238261-6FF9-4BD1-9B7A-A1932C96D918.jpg?v=1713529213&width=360"
    },
    {
      "id": 6,
      "title": "Winter Wool Coat",
      "price": "$279.99",
      "image": "https://www.akirathecouture.com/cdn/shop/files/91238261-6FF9-4BD1-9B7A-A1932C96D918.jpg?v=1713529213&width=360",
      "image2": "https://www.akirathecouture.com/cdn/shop/files/99DC17E2-A8CE-4336-846B-3AEA5983F38E.jpg?v=1713696719&width=1296"
    },
    {
      "id": 7,
      "title": "Boho Chic Skirt",
      "price": "$149.99",
      "image": "https://www.akirathecouture.com/cdn/shop/files/23FDB9FD-ACA9-474C-B351-7DF98B10F4DA.png?v=1713443878&width=360",
      "image2": "https://www.akirathecouture.com/cdn/shop/files/99DC17E2-A8CE-4336-846B-3AEA5983F38E.jpg?v=1713696719&width=1296"
    },
    {
      "id": 8,
      "title": "Spring Blouse",
      "price": "$129.95",
      "image": "https://www.akirathecouture.com/cdn/shop/files/FD5C23FB-E2C4-4A2A-A715-2EB1B7AF2D42.png?v=1713271345&width=360",
      "image2": "https://www.akirathecouture.com/cdn/shop/files/99DC17E2-A8CE-4336-846B-3AEA5983F38E.jpg?v=1713696719&width=1296"
    },
    {
      "id": 9,
      "title": "Office Blazer",
      "price": "$189.99",
      "image": "https://www.akirathecouture.com/cdn/shop/files/D1C0BA73-3F1A-43D8-B7A9-A19041D178ED.png?v=1713095258&width=360",
      "image2": "https://www.akirathecouture.com/cdn/shop/files/99DC17E2-A8CE-4336-846B-3AEA5983F38E.jpg?v=1713696719&width=1296"
    },
    {
      "id": 10,
      "title": "Graphic Tee",
      "price": "$49.99",
      "image": "https://www.akirathecouture.com/cdn/shop/files/76CAEA44-AF9F-4B08-9E6F-51E25E36181B.png?v=1712924793&width=360",
      "image2": "https://www.akirathecouture.com/cdn/shop/files/99DC17E2-A8CE-4336-846B-3AEA5983F38E.jpg?v=1713696719&width=1296"
    },
    {
      "id": 11,
      "title": "Evening Clutch",
      "price": "$79.95",
      "image": "https://www.akirathecouture.com/cdn/shop/files/B28536FD-9B97-4163-A46F-2DC5DB58D97C.png?v=1712843358&width=360",
      "image2": "https://www.akirathecouture.com/cdn/shop/files/99DC17E2-A8CE-4336-846B-3AEA5983F38E.jpg?v=1713696719&width=1296"
    },
    {
      "id": 12,
      "title": "Designer Sunglasses",
      "price": "$249.99",
      "image": "https://www.akirathecouture.com/cdn/shop/files/E4CC2923-FD94-46B7-9D14-7E5D1BD0C8BC.jpg?v=1712758978&width=360",
      "image2": "https://www.akirathecouture.com/cdn/shop/files/99DC17E2-A8CE-4336-846B-3AEA5983F38E.jpg?v=1713696719&width=1296"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className='cover'>
      <h1 className='heading' style={{ color: '#fff', textAlign: 'center' }}>Hot Arrivals</h1>
      <div className='background-trending-items' style={{ boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)' }}>
        <h4 style={{ margin:'0px' }}>What's New</h4>

        <div className="slider">
          <div className='slider-track'>
            {products.map((product, index) => (
              <div className='slid' key={index}>
                <div className='changimg'>
                <img className='image'
                  src={products[(index + currentImageIndex) % products.length].image}
                
                />
                 <img className='image im'
                  src={products[(index + currentImageIndex) % products.length].image2}
                
                /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotArrival;