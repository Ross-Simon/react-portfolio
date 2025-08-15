import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react'; 
const screenscribe = '/path/tw/SereneScribe.png';
const cyParent = '/path/tw/CyParent.png';
const lllPresidency = '/path/tw/LLL_Presidency.png';

function App() {

// State for form inputs if you want controlled components
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  // Handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    alert(`Thank you for your message, ${formData.firstName} ${formData.lastName}!\n\nYour message about "${formData.subject}" has been received. We'll get back to you at ${formData.email} soon!`);
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Generate random color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Generate random gradient
  const getRandomGradient = () => {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const angle = Math.floor(Math.random() * 360);
    return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
  };

  // Change background color
  const changeBackground = (projectNumber) => {
    const randomGradient = getRandomGradient();
    console.log(`Random gradient applied: ${randomGradient}`);
    return randomGradient;
  };

    useEffect(() => {
    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e) => {
      if (e.target.closest('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    // Add scroll effect to navbar
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
      } else {
        navbar.style.backgroundColor = '';
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Add loading animation to project cards
    const cards = document.querySelectorAll('.project-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    });

    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });

    // Cleanup
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="App">
      {/* Navigation Bar */}
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
            <a className="navbar-brand" href="#"><FontAwesomeIcon icon={faCode} /> My Portfolio</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact Me</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    {/* Hero Section */} 
    <section id="home" className="hero-section">
        <div className="container">
            <h1>My Portfolio</h1>
            <p>Hey there! I'm Ross, an aspiring web developer aiming to create smooth digital experiences.</p>
        </div>
    </section>

    {/* Portfolio Section */} 
    <section id="portfolio" className="portfolio-section">
        <div className="container">
            <h2 className="section-title">My Top 3 Projects</h2>
            <div className="row">
                {/* Project 1 */} 
                <div className="col-lg-4 col-md-6">
                    <div className="card project-card">
                        <img src="/SereneScribe.png" alt="SereneScribe" />
                        <div className="card-body">
                          <h3 className="project-title" onClick={() => changeBackground(1)}>SereneScribe</h3>
                        <p class="project-description">A versatile and unique note taking app for optimizing productivity.</p>
                            <button className="btn btn-custom" data-bs-toggle="modal" data-bs-target="#project1Modal">
                                View Details <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Project 2 */} 
                <div className="col-lg-4 col-md-6">
                    <div className="card project-card">
                        <img src="/CyParent.png" alt="CyParent" />
                        <div className="card-body">
                            <h3 className="project-title" onClick={() => changeBackground(2)}>CyParent</h3>
                        <p class="project-description">A Parental Management and Control App for managing children's digital activity.</p>
                            <button className="btn btn-custom" data-bs-toggle="modal" data-bs-target="#project2Modal">
                                View Details <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Project 3 */} 
                <div className="col-lg-4 col-md-6">
                    <div className="card project-card">
                        <img src="/LLL_Presidency.png" alt="LLL_Presidency" />
                        <div className="card-body">
                            <h3 className="project-title" onClick={() => changeBackground(3)}>Organization Presidency</h3>
                            <p className="project-description">A Digital Graphic Design that initiated my presidency in De La Salle Lipa's organization for scholars.</p>
                            <button className="btn btn-custom" data-bs-toggle="modal" data-bs-target="#project3Modal">
                                View Details <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Project Modals */}
    {/* Modal 1 */} 
    <div className="modal fade" id="project1Modal" tabIndex="-1">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">SereneScribe</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                    <div className="text-center">
                    <img src="/SereneScribe.png" alt="SereneScribe" />
                    </div>
                    <h6>Project Overview</h6>
                    <p>SereneScribe A versatile and unique app for optimizing productivity and efficiency in note-taking, task management, and other useful features.</p>
                
                    <h6>Technologies Used</h6>
                <ul>
                    <li>Frontend: React.js, Redux, Material-UI</li>
                    <li>Backend: Python, Django REST Framework</li>
                    <li>Database: PostgreSQL</li>
                    <li>Real-time: WebSocket</li>
                </ul>
                
                <h6>Key Features</h6>
                <ul>
                    <li>Real-time collaboration</li>
                    <li>Drag-and-drop task organization</li>
                    <li>Team member assignment</li>
                    <li>Progress tracking and reporting</li>
                    <li>Deadline notifications</li>
                </ul>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    {/* Modal 2 */}
    <div className="modal fade" id="project2Modal" tabIndex="-1">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">CyParent</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                    <div className="text-center">
                    <img src={cyParent} alt="CyParent" />
                    </div>
                    <h6>Project Overview</h6>
                    <p>CyParent is a parental management and control application designed to help parents monitor and manage their children's digital activity effectively.</p>
                
                <h6>Technologies Used</h6>
                <ul>
                    <li>Frontend: React.js, Redux, Material-UI</li>
                    <li>Backend: Python, Django REST Framework</li>
                    <li>Database: PostgreSQL</li>
                    <li>Real-time: WebSocket</li>
                </ul>
                
                <h6>Key Features</h6>
                <ul>
                    <li>Real-time monitoring of digital activity</li>
                    <li>Content filtering and blocking capabilities</li>
                    <li>Usage reporting and analytics</li>
                    <li>Time management tools</li>
                    <li>Alerts and notifications for suspicious activities</li>
                </ul>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    {/* Modal 3 */}
    <div className="modal fade" id="project3Modal" tabIndex="-1">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Organization Presidency</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                    <div className="text-center">
                    <img src={lllPresidency} alt="LLL Presidency" />
                    </div>
                    <h6>Project Overview</h6>
                    <p>This project showcases the digital graphic design and application planning that initiated my term of presidency at De La Salle Lipa's organization for scholars.</p>
                
                <h6>Technologies Used</h6>
                <ul>
                    <li>Design Tools: Canva, Adobe Photoshop</li>
                </ul>
                
                <h6>Key Features</h6>
                <ul>
                    <li>Engaging visual design for promotional materials</li>
                    <li>Effective communication strategies to engage members</li>
                    <li>Collaboration with team members for project success</li>
                </ul>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    {/* Contact Section */} 
    <section id="contact" className="contact-section">
        <div className="container">
            <h2 className="section-title">Send a Message</h2>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <form id="contactForm" onSubmit={handleFormSubmit}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="firstName" required/>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastName" required/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="email" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input type="text" className="form-control" id="subject" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="5" required></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-custom btn-lg">
                                <i className="fas fa-paper-plane"></i> Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    {/* Footer */}
    <footer className="footer">
        <div className="container">
            <p>&copy; 2024 My Portfolio. All rights reserved.</p>
            <div className="social-icons">
                <a href="#"><i className="fab fa-github"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
    </footer>

  </div>
  );
}

export default App;
