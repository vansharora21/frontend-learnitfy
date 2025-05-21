import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Custom hook for hover functionality
function useHover() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  
  useEffect(() => {
    const element = ref.current;
    
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    
    if (element) {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [ref]);
  
  return [ref, isHovered];
}

// Hoverable Text component that uses the useHover hook
const HoverableText = ({ children }) => {
  const [hoverRef, isHovered] = useHover();
  
  return (
    <span
      ref={hoverRef}
      style={{
        backgroundColor: isHovered ? '#ff6b00' : 'transparent',
        color: isHovered ? 'white' : '#666',
        padding: '0.25rem 0.5rem',
        borderRadius: '4px',
        transition: 'all 0.3s ease'
      }}
    >
      {children}
    </span>
  );
};

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('mission');

  const stats = [
    { number: "5K", label: "Active Students", icon: "👨‍🎓" },
    { number: "10+", label: "Mentors", icon: "👨‍🏫" },
    { number: "200+", label: "Courses", icon: "📚" },
    { number: "50+", label: "Awards", icon: "🏆" }
  ];

  const content = {
    mission: {
      title: "Our Mission",
      description: "To revolutionize online education and make quality learning accessible to everyone.",
      points: [
        "Innovative Learning Methods",
        "Industry Expert Instructors",
        "Flexible Learning Schedule",
        "Practical Hands-on Experience"
      ]
    },
    vision: {
      title: "Our Vision",
      description: "To become the world's leading platform for transformative online education.",
      points: [
        "Global Learning Community",
        "Cutting-edge Technology",
        "Personalized Learning Paths",
        "Industry-relevant Content"
      ]
    },
    values: {
      title: "Our Values",
      description: "We believe in excellence, innovation, and student success.",
      points: [
        "Excellence in Education",
        "Student-First Approach",
        "Continuous Innovation",
        "Community Collaboration"
      ]
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const AnimatedCounter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        setCount(Math.floor(end * percentage));

        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return <span>{count}</span>;
  };

  return (
    <div style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s ease-in' }}>


      {/* Hero Section with Parallax */}
      <div style={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        marginTop:'none',
        padding: '15rem 0',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3)',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.7)'
        }} />
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2
        }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            marginBottom: '2rem',
            transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 1s ease'
          }}>
            About Learnitfy
          </h1>
          <p style={{ 
            fontSize: '1.5rem', 
            maxWidth: '800px', 
            margin: '0 auto',
            lineHeight: '1.8',
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            opacity: isVisible ? 1 : 0,
            transition: 'all 1s ease 0.3s'
          }}>
            ❝ We are passionate about revolutionizing the way we learn. ❞
          </p>
        </div>
      </div>

      {/* Interactive Tabs Section */}
      <div style={{
        padding: '5rem 0',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '3rem',
            gap: '1rem'
          }}>
            {Object.keys(content).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '5px',
                  backgroundColor: activeTab === tab ? '#ff6b00' : '#fff',
                  color: activeTab === tab ? '#fff' : '#333',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontWeight: 'bold'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab) {
                    e.target.style.backgroundColor = '#ffe0cc';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab) {
                    e.target.style.backgroundColor = '#fff';
                  }
                }}
              >
                {content[tab].title}
              </button>
            ))}
          </div>

          <div style={{
            textAlign: 'center',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.5s ease'
          }}>
            <h3 style={{ marginBottom: '1.5rem', color: '#333' }}>
              {content[activeTab].description}
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              marginTop: '2rem'
            }}>
              {content[activeTab].points.map((point, index) => (
                <div
                  key={index}
                  style={{
                    padding: '2rem',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <HoverableText>{point}</HoverableText>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animated Stats Section */}
      <div style={{
        padding: '4rem 0',
        backgroundColor: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem'
        }}>
          {stats.map((stat, index) => (
            <div
              key={index}
              style={{
                textAlign: 'center',
                padding: '2rem',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{stat.icon}</div>
              <h3 style={{
                fontSize: '2.5rem',
                color: '#ff6b00',
                marginBottom: '0.5rem'
              }}>
                <AnimatedCounter end={parseInt(stat.number)} />
                {stat.number.includes('+') ? '+' : ''}
              </h3>
              <p style={{ color: '#666' }}><HoverableText>{stat.label}</HoverableText></p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section with Hover Effect */}
      <div style={{
        padding: '5rem 0',
        backgroundColor: '#f8f9fa',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '2rem' }}>Ready to Start Learning?</h2>
        <Link 
          to="/contact"
          style={{
            backgroundColor: '#ff6b00',
            color: 'white',
            padding: '1.5rem 3rem',
            borderRadius: '50px',
            textDecoration: 'none',
            display: 'inline-block',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#e65c00';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#ff6b00';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Get Started Now
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
