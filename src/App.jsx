import React, { useEffect, useRef, useState } from 'react';
import { GooglePlayLogo,AppleLogo ,Book,Note,ListNumbers,HeadCircuit,Calculator ,CalendarDots  ,Briefcase ,ChatsCircle,Newspaper ,EnvelopeSimple ,MapPin,InstagramLogo,LinkedinLogo,List,X} from "@phosphor-icons/react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'

function App() {
    const sidebarRef = useRef(null);
    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
  
    useEffect(() => {
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
      });
  
      const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        let current = '';
  
        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
          }
        });
  
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const openMenu = () => {
      sidebarRef.current.classList.remove('closed');
      sidebarRef.current.classList.add('open');
    };
  
    const closeMenu = () => {
      sidebarRef.current.classList.remove('open');
      sidebarRef.current.classList.add('closed');
    };
  
    const handleAnchorClick = (e, targetId) => {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth',
        });
        closeMenu();
      }
    };
  
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    };
  
    const handleMouseLeaveOrUp = () => setIsDragging(false);
  
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };
  return (
    <>
     {/* <!-- Navigation Bar --> */}
    <nav className="fixed top-0 left-0 right-0 z-50 glass py-4">
        <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">
                <a href="#" className="text-2xl font-bold gradient-text">Smart Study</a>
                
                <div className="hidden md:flex space-x-8">
                    <a href="#home"  onClick={(e) => handleAnchorClick(e, '#home')} className="nav-link text-slate-300 hover:text-white active">Home</a>
                    <a href="#about" onClick={(e) => handleAnchorClick(e, '#about')} className="nav-link text-slate-300 hover:text-white">About</a>
                    <a href="#features" onClick={(e) => handleAnchorClick(e, '#features')} className="nav-link text-slate-300 hover:text-white">Features</a>
                    <a href="#reviews" onClick={(e) => handleAnchorClick(e, '#reviews')} className="nav-link text-slate-300 hover:text-white">Reviews</a>
                    <a href="#contact" onClick={(e) => handleAnchorClick(e, '#contact')} className="nav-link text-slate-300 hover:text-white">Contact</a>
                </div>
                
                <button id="menu-toggle" onClick={()=>openMenu()} className="md:hidden text-slate-300 hover:text-white focus:outline-none">
                <List size={30} color="#fcfcfc" weight="bold" />
                </button>
            </div>
        </div>
    </nav>

    {/* <!-- Mobile Sidebar --> */}
    <div id="sidebar" ref={sidebarRef} className="sidebar fixed top-0 right-0 h-full w-64 bg-slate-900/95 backdrop-blur-lg z-50 p-6 closed md:hidden">
        <div className="flex justify-end">
            <button id="close-menu" onClick={closeMenu} className="text-slate-300 hover:text-white">
            <X size={30} color="#fcfcfc" weight="bold" />
            </button>
        </div>
        
        <div   className="mt-8 space-y-6">
            <a href="#home" className="block text-lg text-slate-300 hover:text-white">Home</a>
            <a href="#about" className="block text-lg text-slate-300 hover:text-white">About</a>
            <a href="#features" className="block text-lg text-slate-300 hover:text-white">Features</a>
            <a href="#reviews" className="block text-lg text-slate-300 hover:text-white">Reviews</a>
            <a href="#contact" className="block text-lg text-slate-300 hover:text-white">Contact</a>
        </div>
    </div>

    {/* <!-- Hero Section --> */}
    <section id="home" className="min-h-screen hero-bg pt-24 flex items-center relative overflow-hidden">
        {/* <!-- Floating elements --> */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-purple-500/20 floating"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-indigo-500/20 floating floating-delay-1"></div>
        <div className="absolute bottom-1/4 left-1/3 w-10 h-10 rounded-full bg-purple-500/20 floating floating-delay-2"></div>
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 rounded-full bg-indigo-500/20 floating"></div>
        {/* //// */}
        <div className="absolute top-1/4 left-1/2 w-8 h-8 rounded-full bg-purple-500/20 floating"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full bg-indigo-500/20 floating floating-delay-1"></div>
        <div className="absolute bottom-1/2 left-1/3 w-10 h-10 rounded-full bg-purple-500/20 floating floating-delay-2"></div>
        <div className="absolute bottom-1/3 right-1/2 w-6 h-6 rounded-full bg-indigo-500/20 floating"></div>

        <div className="container mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-12 md:mb-0" data-aos="fade-right">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="gradient-text">Smart Study</span> – Smarter Learning Starts Here
                    </h1>
                    <p className="text-xl text-slate-300 mb-8 max-w-lg">
                        All your study tools, AI tutors, and college resources in one smart platform.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <a href="#" className="gradient-bg glow text-white px-8 py-4 rounded-lg font-semibold text-center hover:opacity-90 transition duration-300 flex items-center justify-center">
                        <GooglePlayLogo size={25} color="#fcfbfe"  className="fab mr-3 text-xl"/> Install for Android
                        </a>
                        <a href="#" className="bg-slate-800 glow text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-slate-700 transition duration-300 flex items-center justify-center">
                        <AppleLogo size={25} color="#fcfbfe" className="fab mr-3 text-xl"/>Install for iOS
                        </a>
                    </div>
                </div>
                
                <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
                    <div className="relative">
                        <div className="gradient-border p-2 rounded-3xl">
                            <div className="w-64 h-auto bg-slate-800 rounded-2xl overflow-hidden">
                                <img src="https://cdn.dribbble.com/users/1787323/screenshots/14267644/media/4b91e6d5a9b5d1c8a3b8d4f4e5c5d5e5.png" alt="Smart Study App" className="w-full h-auto"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- About Section --> */}
    <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
            <div className="glass rounded-3xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-12 md:mb-0" data-aos="fade-right">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">What is Smart Study?</h2>
                        <p className="text-lg text-slate-300 mb-6">
                            Smart Study is revolutionizing academic success by combining AI-powered tools with carefully curated educational resources. Our platform is designed to help college students study smarter, not harder.
                        </p>
                        <p className="text-lg text-slate-300">
                            We believe every student deserves access to high-quality learning tools regardless of their background. Our mission is to make academic excellence accessible to all through technology.
                        </p>
                    </div>
                    
                    <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
                        <div className="relative w-full max-w-md">
                            <div className="gradient-border p-1 rounded-2xl">
                                <div className="bg-slate-800 rounded-xl p-8">
                                    <img src="https://cdn.dribbble.com/users/1787323/screenshots/14267644/media/4b91e6d5a9b5d1c8a3b8d4f4e5c5d5e5.png" alt="About Smart Study" className="w-full h-auto"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Features Section --> */}
    <section id="features" className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16" data-aos="fade-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Powerful Features</h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                    Everything you need to excel in your academic journey
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <!-- Feature 1 --> */}
                <div className="feature-card glass rounded-xl p-8" data-aos="zoom-in">
                    <div className="gradient-bg p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <Book size={40} color="#fcfbfe" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center">Smart Bank</h3>
                    <p className="text-slate-300 text-center">Curated college question papers with solutions and explanations.</p>
                </div>
                
                {/* <!-- Feature 2 --> */}
                <div className="feature-card glass rounded-xl p-8" data-aos="zoom-in" data-aos-delay="100">
                    <div className="gradient-bg p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <Note size={40} color="#fcfbfe" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center">Quick Notes</h3>
                    <p className="text-slate-300 text-center">Concise, downloadable notes from top students and professors.</p>
                </div>
                
                {/* <!-- Feature 3 --> */}
                <div className="feature-card glass rounded-xl p-8" data-aos="zoom-in" data-aos-delay="200">
                    <div className="gradient-bg p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <ListNumbers size={40} color="#fcfbfe" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center">Syllabus Finder</h3>
                    <p className="text-slate-300 text-center">Explore multi-college syllabi with topic breakdowns.</p>
                </div>
                
                {/* <!-- Feature 4 --> */}
                <div className="feature-card glass rounded-xl p-8" data-aos="zoom-in">
                    <div className="gradient-bg p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <HeadCircuit size={40} color="#fcfbfe" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center">AI Tutor</h3>
                    <p className="text-slate-300 text-center">Chatbot-based learning assistant for instant doubt solving.</p>
                </div>
                
                {/* <!-- Feature 5 --> */}
                <div className="feature-card glass rounded-xl p-8" data-aos="zoom-in" data-aos-delay="100">
                    <div className="gradient-bg p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <Calculator size={40} color="#fcfbfe" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center">Grade Wizard</h3>
                    <p className="text-slate-300 text-center">Predict & calculate your academic performance.</p>
                </div>
                
                {/* <!-- Feature 6 --> */}
                <div className="feature-card glass rounded-xl p-8" data-aos="zoom-in" data-aos-delay="200">
                    <div className="gradient-bg p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <CalendarDots size={40} color="#fcfbfe" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center">Study Scheduler</h3>
                    <p className="text-slate-300 text-center">Smart AI planner that adapts to your learning pace.</p>
                </div>
                
                {/* <!-- Feature 7 --> */}
                <div className="feature-card glass rounded-xl p-8" data-aos="zoom-in">
                    <div className="gradient-bg p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <Briefcase size={40} color="#fcfbfe" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center">Prep Lab</h3>
                    <p className="text-slate-300 text-center">Interview training and resume builder.</p>
                </div>
                
                {/* <!-- Feature 8 --> */}
                <div className="feature-card glass rounded-xl p-8" data-aos="zoom-in" data-aos-delay="100">
                    <div className="gradient-bg p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <ChatsCircle size={40} color="#fcfbfe" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center">Forum Zone</h3>
                    <p className="text-slate-300 text-center">Student-led discussions and collaboration.</p>
                </div>
                
                {/* <!-- Feature 9 --> */}
                <div className="feature-card glass rounded-xl p-8" data-aos="zoom-in" data-aos-delay="200">
                    <div className="gradient-bg p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <Newspaper size={40} color="#fcfbfe" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center">News Bites</h3>
                    <p className="text-slate-300 text-center">Daily academic headlines and updates.</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Reviews Section --> */}
    <section id="reviews" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-transparent backdrop-blur-sm z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16" data-aos="fade-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">What Students Say</h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                    Join thousands of students who transformed their learning
                </p>
            </div>
            
            <div className="relative">
                <div className="scroll-container flex overflow-x-auto pb-8 space-x-6 scrollbar-hide" ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}>
                    {/* <!-- Review 1 --> */}
                    <div className="scroll-item flex-shrink-0 testimonial-card glass rounded-2xl p-8" data-aos="fade-right">
                        <div className="flex items-center mb-6">
                            <div className="gradient-bg w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">JS</div>
                            <div>
                                <h4 className="font-semibold text-lg">Jessica S.</h4>
                                <div className="star-rating text-yellow-400">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <p className="text-slate-300 italic">
                            "The AI tutor helped me understand concepts I'd been struggling with for months. My grades improved by a full letter grade in just one semester!"
                        </p>
                    </div>
                    
                    {/* <!-- Review 2 --> */}
                    <div className="scroll-item flex-shrink-0 testimonial-card glass rounded-2xl p-8" data-aos="fade-right" data-aos-delay="100">
                        <div className="flex items-center mb-6">
                            <div className="gradient-bg w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">AM</div>
                            <div>
                                <h4 className="font-semibold text-lg">Alex M.</h4>
                                <div className="star-rating text-yellow-400">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                        <p className="text-slate-300 italic">
                            "The question bank and notes saved me hundreds of hours. Instead of searching through multiple sources, everything I need is in one place. The schedule planner keeps me on track too."
                        </p>
                    </div>
                    
                    {/* <!-- Review 3 --> */}
                    <div className="scroll-item flex-shrink-0 testimonial-card glass rounded-2xl p-8" data-aos="fade-right" data-aos-delay="200">
                        <div className="flex items-center mb-6">
                            <div className="gradient-bg w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">RK</div>
                            <div>
                                <h4 className="font-semibold text-lg">Rahul K.</h4>
                                <div className="star-rating text-yellow-400">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <p className="text-slate-300 italic">
                            "As an international student, the discussion forums were incredibly helpful. The interview prep resources helped me land my dream internship. Worth every penny!"
                        </p>
                    </div>
                    
                    {/* <!-- Review 4 --> */}
                    <div className="scroll-item flex-shrink-0 testimonial-card glass rounded-2xl p-8" data-aos="fade-right" data-aos-delay="300">
                        <div className="flex items-center mb-6">
                            <div className="gradient-bg w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">TP</div>
                            <div>
                                <h4 className="font-semibold text-lg">Taylor P.</h4>
                                <div className="star-rating text-yellow-400">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <p className="text-slate-300 italic">
                            "The grade calculator took all the guesswork out of my finals. I knew exactly what I needed to score to maintain my GPA. The AI tutor is like having a personal professor 24/7."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Contact Section --> */}
    <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
            <div className="glass rounded-3xl p-8 md:p-12">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12" data-aos="fade-right">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Get in Touch</h2>
                        <p className="text-lg text-slate-300 mb-8">
                            Have questions or feedback? We'd love to hear from you!
                        </p>
                        
                        <form className="space-y-6">
                            <div>
                                <label  htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                                <input type="text" id="name" className="input-glow w-full px-4 py-3 bg-slate-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-slate-700"/>
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                                <input type="email" id="email" className="input-glow w-full px-4 py-3 bg-slate-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-slate-700"/>
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                                <textarea id="message" rows="5" className="input-glow w-full px-4 py-3 bg-slate-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 border border-slate-700"></textarea>
                            </div>
                            
                            <button type="submit" className="gradient-bg glow text-white px-8 py-3 rounded-lg font-semibold w-full hover:opacity-90 transition duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>
                    
                    <div className="lg:w-1/2 lg:pl-12" data-aos="fade-left">
                        <div className="h-full flex flex-col justify-between">
                            <div className="mb-12">
                                <h3 className="text-2xl font-semibold mb-6 gradient-text">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="gradient-bg p-3 rounded-full mr-4">
                                        <EnvelopeSimple size={20} color="#fcfbfe" />
                                        </div>
                                        <div>
                                            <p className="text-slate-300">Email</p>
                                            <a href="mailto:support@smartstudy.app" className="text-purple-400 hover:text-purple-300">support@smartstudy.app</a>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start">
                                        <div className="gradient-bg p-3 rounded-full mr-4">
                                        <MapPin size={20} color="#fcfbfe" />
                                        </div>
                                        <div>
                                            <p className="text-slate-300">Office</p>
                                            <p className="text-slate-300">123 Education St, Tech City, TC 10001</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <h3 className="text-2xl font-semibold mb-6 gradient-text">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a href="#"  className="gradient-bg w-12 h-12 rounded-full flex items-center justify-center text-white hover:opacity-90 transform transition-transform duration-300 ease-in-out
                   hover:scale-110 cursor-pointer">
                                    <InstagramLogo size={30} color="#fcfbfe" />
                                    </a>
                                    
                                    <a href="#" className="gradient-bg w-12 h-12 rounded-full flex items-center justify-center text-white hover:opacity-90 transform transition-transform duration-300 ease-in-out
                   hover:scale-110 cursor-pointer">
                                    <LinkedinLogo size={30} color="#fcfbfe" />
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Footer --> */}
    <footer className="bg-transparent py-8 border-t border-slate-800">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <p className="text-slate-400">© 2025 Smart Study. All rights reserved.</p>
                </div>
                
                <div className="flex space-x-6 mb-6 md:mb-0">
                    <a href="#" className="text-slate-400 hover:text-purple-400">Terms</a>
                    <a href="#" className="text-slate-400 hover:text-purple-400">Privacy</a>
                    <a href="#" className="text-slate-400 hover:text-purple-400">Cookies</a>
                </div>
                
                <div className="flex space-x-4">
                    <a href="#" className="text-slate-400 hover:text-purple-400">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="text-slate-400 hover:text-purple-400">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-slate-400 hover:text-purple-400">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>

    {/* <!-- Chat Widget --> */}
    {/* <div className="fixed bottom-8 right-8 z-50">
        <button className="gradient-bg chat-widget w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg">
            <i className="fas fa-comment-dots text-2xl"></i>
        </button>
    </div> */}
    </>
  )
}

export default App
