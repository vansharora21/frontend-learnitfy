import React, { useState } from 'react';

const ContactUs = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: 'India',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    try {
      const response = await fetch('https://your-api-endpoint.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Success:', data);
        alert('Thanks for reaching out! We\'ll be in touch soon.');
        // Optionally reset the form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          country: 'India',
          message: ''
        });
      } else {
        console.error('Error:', response.statusText);
        alert('There was an error submitting your form. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your form. Please try again.');
    }
  };

  // Theme color
  const themeColor = 'rgb(255, 112, 10)';

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Hero Section */}
      <section style={{ 
        background: `linear-gradient(135deg, ${themeColor} 0%, #ff8c42 100%)`, 
        color: 'white', 
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: 'radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)',
          backgroundSize: '100px 100px'
        }}></div>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            marginBottom: '1.5rem',
            fontWeight: '700'
          }}>Contact Us</h1>
          <p style={{
            fontSize: '1.25rem',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6',
            opacity: 0.9
          }}>
            Our team is happy to answer your sales questions. Fill out the form and we'll be in touch as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={{ 
        padding: '5rem 0', 
        backgroundImage: 'linear-gradient(to bottom, #f8f9fa, white)',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '4rem',
          alignItems: 'flex-start'
        }}>
          {/* Contact Form */}
          <div style={{ 
            flex: '1.5', 
            minWidth: '500px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            padding: '2.5rem',
            marginBottom: '2rem'
          }}>
            <form onSubmit={handleSubmit}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <div>
                  <label 
                    htmlFor="firstName" 
                    style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem',
                      fontSize: '0.9rem',
                      color: '#4b5563'
                    }}
                  >
                    First name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Jane"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.375rem',
                      border: '1px solid #e5e7eb',
                      fontSize: '1rem',
                      transition: 'border-color 0.15s ease-in-out',
                      outline: 'none',
                      '&:focus': {
                        borderColor: themeColor
                      }
                    }}
                  />
                </div>
                <div>
                  <label 
                    htmlFor="lastName" 
                    style={{ 
                      display: 'block', 
                      marginBottom: '0.5rem',
                      fontSize: '0.9rem',
                      color: '#4b5563'
                    }}
                  >
                    Last name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.375rem',
                      border: '1px solid #e5e7eb',
                      fontSize: '1rem',
                      transition: 'border-color 0.15s ease-in-out',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label 
                  htmlFor="email" 
                  style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem',
                    fontSize: '0.9rem',
                    color: '#4b5563'
                  }}
                >
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane.doe@example.com"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.375rem',
                    border: '1px solid #e5e7eb',
                    fontSize: '1rem',
                    transition: 'border-color 0.15s ease-in-out',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label 
                  htmlFor="country" 
                  style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem',
                    fontSize: '0.9rem',
                    color: '#4b5563'
                  }}
                >
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.375rem',
                    border: '1px solid #e5e7eb',
                    fontSize: '1rem',
                    transition: 'border-color 0.15s ease-in-out',
                    outline: 'none',
                    appearance: 'none',
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23666\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E")',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    paddingRight: '2.5rem'
                  }}
                >
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="India">India</option>
                </select>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label 
                  htmlFor="message" 
                  style={{ 
                    display: 'block', 
                    marginBottom: '0.5rem',
                    fontSize: '0.9rem',
                    color: '#4b5563'
                  }}
                >
                  Anything else?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your project, needs, and timeline."
                  rows="4"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.375rem',
                    border: '1px solid #e5e7eb',
                    fontSize: '1rem',
                    resize: 'vertical',
                    transition: 'border-color 0.15s ease-in-out',
                    outline: 'none'
                  }}
                ></textarea>
              </div>

              <button
                type="submit"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  backgroundColor: themeColor,
                  color: 'white',
                  border: 'none',
                  padding: '0.875rem 1.5rem',
                  borderRadius: '0.375rem',
                  fontSize: '1rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                  boxShadow: isHovered 
                    ? `0 8px 15px rgba(255, 107, 0, 0.2)` 
                    : `0 2px 4px rgba(255, 107, 0, 0.1)`
                }}
              >
                Contact Us
              </button>
            </form>
          </div>

          {/* Right Side - Social Proof */}
          <div style={{ flex: '1', minWidth: '300px' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              {/* Removed unused commented-out code */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
