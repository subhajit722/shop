import React from "react";
import './Videolist.css';

const Videolist =()=> {
  const videos = [
    'https://www.youtube.com/embed/pKqpbItLMCE?autoplay=1&loop=1',
    'https://www.youtube.com/embed/ALH7o_zslC8?autoplay=1&loop=1',
    'https://www.youtube.com/embed/pKqpbItLMCE?autoplay=1&loop=1',
    'https://www.youtube.com/embed/le7zR5UjF44?autoplay=1&loop=1',
    'https://www.youtube.com/embed/pKqpbItLMCE?autoplay=1&loop=1',
    'https://www.youtube.com/embed/ALH7o_zslC8?autoplay=1&loop=1',
    'https://www.youtube.com/embed/pKqpbItLMCE?autoplay=1&loop=1',
    'https://www.youtube.com/embed/le7zR5UjF44?autoplay=1&loop=1'
    // Add more YouTube video embed URLs as needed
  ];

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {videos.map((videoUrl, index) => (
          <div key={index} className="carousel-card">
            <iframe
              className="vid"
              width="100%"
              height="100%"
              src={videoUrl}
              title={`Video ${index + 1}`}
              
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              allowautoplay={true}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videolist;
