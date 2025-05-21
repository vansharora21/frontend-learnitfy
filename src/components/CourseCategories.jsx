import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineClockCircle } from 'react-icons/ai';

const CourseCard = ({ title, price, hours, rating, image, headerText }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const handleFavoriteClick = (e) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card h-100 border shadow-sm transition-hover">
      <Link 
        to={`/CourseDesc/${title.replace(/\s+/g, '-').toLowerCase()}`} 
        className="text-decoration-none d-flex flex-column h-100"
      >
        <div className="bg-danger p-4 text-center d-flex justify-content-center align-items-center" style={{ height: '140px' }}>
          <h3 className="fs-6 text-white fw-bold text-uppercase text-center lh-base">
            {headerText}
          </h3>
        </div>
        
        <div className="p-3 d-flex flex-column flex-grow-1">
          <h3 className="fs-6 mb-3 text-dark fw-normal">
            {title}
          </h3>
          
          {/* <div className="d-flex justify-content-between mt-auto align-items-center mb-2">
            <span className="fw-bold text-dark">₹{price}</span>
            {rating && (
              <div className="d-flex align-items-center">
                <div className="text-warning">
                  {'★'.repeat(Math.floor(parseFloat(rating)))}
                  {'☆'.repeat(5 - Math.floor(parseFloat(rating)))}
                </div>
                <span className="text-secondary ms-2">({rating.split(' ')[1].replace(/[()]/g, '')})</span>
              </div>
            )}
          </div> */}
          
          <div className="d-flex justify-content-between align-items-center text-secondary mt-2">
            <div className="d-flex align-items-center">
              <AiOutlineClockCircle className="me-1" /> {hours} hours
            </div>
            <button 
              onClick={handleFavoriteClick} 
              className="btn btn-link p-0 border-0"
              style={{ color: isFavorite ? '#ff3333' : '#ccc' }}
            >
              <AiOutlineHeart size={18} />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

const CourseCategories = () => {
  const courses = [
    {
      title: "Sitecore Content Management Training Certification Course",
      price: "23,940.00",
      hours: "16",
      headerText: "SITECORE CONTENT MANAGEMENT",
      image: "/path-to-content-management-image.png"
    },
    {
      title: "Sitecore Training Certification Course Online",
      price: "65,940.00",
      hours: "15",
      rating: "4.5 (44)",
      headerText: "SITECORE",
      image: "/path-to-training-image.png"
    },
    {
      title: "Sitecore JavaScript Services (JSS) Training Certification Course",
      price: "65,940.00",
      hours: "15",
      headerText: "SITECORE JAVA SCRIPT SERVICE",
      image: "/path-to-javascript-image.png"
    },
    {
      title: "Sitecore Advanced Developer Training Certification Course",
      price: "65,940.00",
      hours: "15",
      headerText: "SITECORE ADVANCED DEVELOPER",
      image: "/path-to-advanced-dev-image.png"
    },
    {
      title: "Sitecore SXA Training Certification Course Online",
      price: "65,940.00",
      hours: "15",
      headerText: "Sitecore Experience Accelerator(SXA)",
      image: "/path-to-sxa-image.png"
    },
    {
      title: "Sitecore XM Cloud Training Certification Course",
      price: "65,940.00",
      hours: "15",
      headerText: "SITECORE XM Cloud",
      image: "/path-to-xm-cloud-image.png"
    }
  ];

  return (
    <div className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 text-dark">
          Sitecore Certification Courses
        </h2>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {courses.map((course, index) => (
            <div className="col" key={index}>
              <CourseCard
                title={course.title}
                price={course.price}
                hours={course.hours}
                rating={course.rating}
                image={course.image}
                headerText={course.headerText}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Add this CSS to your stylesheet for the hover effect
// .transition-hover {
//   transition: transform 0.3s ease;
// }
// .transition-hover:hover {
//   transform: translateY(-5px);
// }

export default CourseCategories;
