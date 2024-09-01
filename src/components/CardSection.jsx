import React, { useState, useRef, useEffect } from 'react'
import "./CardSection.css"

const CardSection = ({img, vid, title, desc, status}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);
  const descRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        // Auto-play was prevented
        console.log("AutoPlay was prevented:", error);
      });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Adjust this value as needed
      }
    );

    if (descRef.current) {
      observer.observe(descRef.current);
    }

    return () => {
      if (descRef.current) {
        observer.unobserve(descRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    // if (timeoutRef.current) {
    //   clearTimeout(timeoutRef.current);
    // }
    if (!isHovered) {
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(true);
    setIsHovering(false);
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 300);
  };  

  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      const startPosition = window.pageYOffset;
      const targetPosition = startPosition + window.innerHeight;
      const distance = targetPosition - startPosition;
      const duration = 1000; // milliseconds
      let start = null;

      function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }
      
      function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
      }
      
      requestAnimationFrame(animation);
    };

    const button = buttonRef.current;
    button.addEventListener('click', handleClick);

    return () => {
      button.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="card-container">
      {img && <img src={img} alt="img" />}
      {vid && 
        <video
          loop
          autoPlay
          muted
          preload="auto"
          src="/27_EVA_Arise_16x9_b475128e2f.mp4"
          type="video/mp4"
          width="640"
          height="360"
        />}

      <button className="arrow" ref={buttonRef}>
        <div className="arrow-container">
          <img src="/arrow.svg" alt="arrow" />
        </div>
      </button>
      
      <div className={`desc ${isVisible ? 'visible' : ''}`} ref={descRef}>
        <div className="status">
          <p>{status}</p>
        </div>
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div>
          <button className={`btn ${isHovering ? 'hovering' : ''} ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {desc}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardSection