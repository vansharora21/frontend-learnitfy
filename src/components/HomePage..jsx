import React from 'react';
import CourseCards from './CourseCards';

export default function HomePage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Hero Section */}
      <div className="bg-dark text-white position-relative">
        <div className="position-absolute  w-100 h-100 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80" 
            alt="Background" 
            className="w-100 h-100 object-fit-cover opacity-25"
          />
          <div className="position-absolute top-0 start-0 w-100 h-100" 
               style={{background: "linear-gradient(90deg, rgba(33,37,41,0.9) 0%, rgba(33,37,41,0.6) 100%)"}}></div>
        </div>
        
        <div className="container position-relative py-5" style={{minHeight: "600px", display: "flex", alignItems: "center"}}>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h1 className="display-4 fw-bold mb-3">
                IT Courses that are<br />best for your career
              </h1>
              <p className="fs-5 mb-4">Learn From The Experts. Become An Expert.</p>
              
              <div className="position-relative" style={{maxWidth: "500px"}}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control form-control-lg pe-5"
                    placeholder="What do you want to learn?"
                    style={{ outline: 'none', boxShadow: 'none', border:'2px solid black' }}
                  />
                  <button 
                    className="btn btn-outline-secondary border-start-50 bg-white" 
                    type="button"
                    style={{
                      transition: 'all 0.3s ease',
                      border:'2px solid black',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = 'black';
                      e.currentTarget.style.borderColor = '#6c757d';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = '#6c757d';
                      e.currentTarget.style.borderColor = 'black';
                    }}
                  >
                    <span className="search-icon">
                      <img 
                        src="https://cdn-icons-png.flaticon.com/512/622/622669.png" 
                        alt="search icon" 
                        style={{ width: '20px', height: '20px' }} 
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt="Student learning"
                className="img-fluid rounded-4 shadow-lg"
                style={{borderRadius: "1rem"}}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Categories Section */}
      <div className="py-5 bg-light">
        <div className="container">
          <h3 className="text-center fw-semibold mb-5">
            Explore Our Popular Course Categories
          </h3>
          
          <CourseCards /> 
        </div>
      </div>
    </div>
  );
}
