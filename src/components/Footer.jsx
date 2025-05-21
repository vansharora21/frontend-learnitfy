import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavigation = (e) => {
    if (location.pathname === e.currentTarget.getAttribute('href')) {
      e.preventDefault();
    }
    scrollToTop();
  };

  return (
    <footer style={{
      backgroundColor: '#1a1a1a',
      color: '#ffffff',
      padding: '4rem 0 2rem 0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Company Info */}
          <div>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <h2 style={{ marginBottom: '1rem' }}>
                <span style={{ color: '#ff6b00' }}>Learnitfy</span>
                <span style={{ color: '#ffffff' }}></span>
              </h2>
            </Link>
            <p style={{ color: '#999', marginBottom: '1rem', lineHeight: '1.6' }}>
              Educational Technology Solutions
              <br />
              123 Learning Plaza, Knowledge Park
              <br />
              Tech City, Digital State - 100001
              <br />
              India
              <br/>
              <br/>
              
              +1 1133223332332

            </p>
          </div>

          {/* About Section */}
          <div>
            <h3 style={{ color: '#ff6b00', marginBottom: '1.5rem' }}>About <br/> Learnitfy</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link to="/about" onClick={handleNavigation} style={{ 
                  color: '#999', 
                  textDecoration: 'none', 
                  transition: 'color 0.3s ease' 
                }}
                onMouseEnter={(e) => e.target.style.color = '#ff6b00'}
                onMouseLeave={(e) => e.target.style.color = '#999'}>
                  About
                </Link>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link to="/careers" onClick={handleNavigation} style={{ 
                  color: '#999', 
                  textDecoration: 'none', 
                  transition: 'color 0.3s ease' 
                }}
                onMouseEnter={(e) => e.target.style.color = '#ff6b00'}
                onMouseLeave={(e) => e.target.style.color = '#999'}>
                  Careers
                </Link>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link to="/contact" onClick={handleNavigation} style={{ 
                  color: '#999', 
                  textDecoration: 'none', 
                  transition: 'color 0.3s ease' 
                }}
                onMouseEnter={(e) => e.target.style.color = '#ff6b00'}
                onMouseLeave={(e) => e.target.style.color = '#999'}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 style={{ color: '#ff6b00', marginBottom: '1.5rem' }}>Resources</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link to="/courses" onClick={handleNavigation} style={{ 
                  color: '#999', 
                  textDecoration: 'none', 
                  transition: 'color 0.3s ease' 
                }}
                onMouseEnter={(e) => e.target.style.color = '#ff6b00'}
                onMouseLeave={(e) => e.target.style.color = '#999'}>
                  All Courses
                </Link>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link to="/help" onClick={handleNavigation} style={{ 
                  color: '#999', 
                  textDecoration: 'none', 
                  transition: 'color 0.3s ease' 
                }}
                onMouseEnter={(e) => e.target.style.color = '#ff6b00'}
                onMouseLeave={(e) => e.target.style.color = '#999'}>
                  Help Center
                </Link>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <Link to="/privacy" onClick={handleNavigation} style={{ 
                  color: '#999', 
                  textDecoration: 'none', 
                  transition: 'color 0.3s ease' 
                }}
                onMouseEnter={(e) => e.target.style.color = '#ff6b00'}
                onMouseLeave={(e) => e.target.style.color = '#999'}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div>
            <h3 style={{ color: '#ff6b00', marginBottom: '1.5rem' }}>Connect With Us</h3>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'flex-start'
            }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#ff6b00',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#ff6b00',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#ff6b00',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #333',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Link to="/privacy" onClick={handleNavigation} style={{ 
              color: '#999', 
              textDecoration: 'none', 
              transition: 'color 0.3s ease' 
            }}
            onMouseEnter={(e) => e.target.style.color = '#ff6b00'}
            onMouseLeave={(e) => e.target.style.color = '#999'}>
              Privacy Policy
            </Link>
            <Link to="/terms" onClick={handleNavigation} style={{ 
              color: '#999', 
              textDecoration: 'none', 
              transition: 'color 0.3s ease' 
            }}
            onMouseEnter={(e) => e.target.style.color = '#ff6b00'}
            onMouseLeave={(e) => e.target.style.color = '#999'}>
              Terms of Service
            </Link>
          </div>
          <p style={{ color: '#999', margin: 0 }}>
            © 2024 Learnitfy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;