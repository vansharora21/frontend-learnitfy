import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Assets/PNG-01.png'; // Update with your actual file name

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm" style={{ padding: '0.25rem 0rem' }}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img 
                        src={logo}
                        alt="Logo"
                        style={{ width: '85px', height: 'auto ', marginRight: '5px',marginLeft:'' }} // Adjust size as needed
                    />
                    {/* <span style={{ color: 'rgb(41, 39, 39)', fontWeight: 'bold' }}>Learnitfy</span> */}
                </Link>
                
                <div className="d-flex align-items-center me-auto nav-links">
                    <Link to="/" className="nav-item">
                        <span className="nav-text">Home</span>
                    </Link>
                    <Link to="/about" className="nav-item">
                        <span className="nav-text">About Us</span>
                    </Link>
                    <Link to="/contact" className="nav-item">
                        <span className="nav-text">Contact Us</span>
                    </Link>
                </div>
                
                <div className="d-flex align-items-center justify-content-end flex-grow-1">
                    <div className="search-bar" style={{ maxWidth: '300px', padding: '17px' }}>
                        <div className="input-group input-group-sm">
                            <input 
                                type="search" 
                                className="form-control border-end-100" 
                                placeholder="Search for Course"
                                aria-label="Search"
                                style={{ outline: 'none', boxShadow: 'none',border:'1px solid black' }}
                            />
                            <button className="btn btn-outline-secondary border-start-100 bg-blue" type="button">
                                <span className="search-icon">
                                    <img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" alt="search icon" style={{ width: '20px', height: '20px' }} />
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Social Media Icons */}
                    <div style={{ display: 'flex', gap: '1rem', marginLeft: '1rem' }}>
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

            <style jsx>{`
                /* Navigation Styles */
                .nav-links {
                    position: relative;
                    display: flex;
                    gap: 1rem;
                }

                .nav-item {
                    position: relative;
                    color: #6a778e;
                    text-decoration: none;
                    padding: 0.75rem 1rem;
                    transition: color 250ms ease;
                    font-weight: 600;
                }

                .nav-item:before {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: rgb(227, 148, 28);
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 250ms ease;
                }

                .nav-item:hover {
                    color: rgb(237, 123, 53);
                }

                .nav-item:hover:before {
                    transform: scaleX(1);
                }

                .nav-text {
                    position: relative;
                    display: inline-block;
                    transition: transform 250ms ease;
                }

                .nav-item:hover .nav-text {
                    transform: translateY(-2px);
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
