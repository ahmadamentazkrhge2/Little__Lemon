import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Card from "../../pages/Home/components/Testimonials/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SimpleSlider.module.css";
import dbData from "../../../public/db.json"

export default function SimpleSlider() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setData(dbData.testimonials || []);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const settings = {
    dots: true,
    infinite: data.length > 1,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: !isMobile,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          centerMode: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          centerMode: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0',
          dots: true,
          arrows: false,
          swipe: true,
          touchThreshold: 10,
          variableWidth: false,
          adaptiveHeight: false, // غيرت من true إلى false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0',
          dots: true,
          arrows: false,
          swipe: true,
          variableWidth: false,
          adaptiveHeight: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0',
          dots: true,
          arrows: false,
          swipe: true,
          variableWidth: false,
          adaptiveHeight: false
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0',
          dots: true,
          arrows: false,
          swipe: true,
          variableWidth: false,
          adaptiveHeight: false
        }
      }
    ]
  };
  
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loading}>Loading testimonials...</div>
      ) : (
        <Slider {...settings}>
          {data.map((testimonial) => (
            <div key={testimonial.id} className={styles.slideItem}>
              <Card testimonial={testimonial} />
            </div>
          ))}
        </Slider>
      )}
      
      {data.length === 0 && !loading && (
        <div className={styles.noData}>
          No testimonials available
        </div>
      )}
    </div>
  );
}