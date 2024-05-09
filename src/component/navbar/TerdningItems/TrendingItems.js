import React, { useState, useEffect } from 'react';
import './TrendingItems.css'; // Make sure to import the corresponding CSS file

const TrendingItems = () => {
  const images = [
    'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1623091411395-09e79fdbfcf3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1610047592780-aa246f5635c2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1610048869310-d889ff25c374?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1589363348124-582889525c57?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1610047614222-d33c39abfab2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1610047614256-023d7c028d0b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   'https://images.unsplash.com/photo-1610202631408-fa6ba0f39ca3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1610047520958-b42ebcd2f6cb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1610048509602-51f2a3cbf250?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
'https://images.unsplash.com/photo-1597897569252-9df44c7de0db?q=80&w=1553&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    // 'https://img.bytewave.in/icon/bootstrap.png',
    // 'https://img.bytewave.in/icon/javascript.png',
    // 'https://img.bytewave.in/icon/java.png',
    // 'https://img.bytewave.in/icon/php.png',
    // 'https://img.bytewave.in/icon/flutter.png',
    // 'https://img.bytewave.in/icon/ruby.png',
    // 'https://img.bytewave.in/icon/swift.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (

    <div className='cover'>
     
        <h1 className='heading' style={{ backgroundColor: 'red', color: '#fff' }}>Trending Items</h1>
    <div className='background-trending-items'>
    

      <div className="slider">
     
        <div className='slider-track'>
        
          {images.map((imageUrl, index) => (
            <div className='slid' key={index}>
              <img className='image'
                src={images[(index + currentImageIndex) % images.length]}
                alt={`Trending Item ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default TrendingItems;
