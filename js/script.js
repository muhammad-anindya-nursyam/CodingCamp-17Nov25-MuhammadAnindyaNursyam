// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Welcome Message
    const welcomeMessage = document.getElementById('welcome-message');
    const userName = "Muhammad Anindya Nursyam";
    welcomeMessage.textContent = `Hi, ${userName}`;
    
    // Form Validation and Submission
    const messageForm = document.getElementById('message-form');
    const formResult = document.getElementById('result-content');
    
    messageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message-text').value.trim();
        
        // Reset error messages
        document.querySelectorAll('.error-message').forEach(el => {
            el.textContent = '';
        });
        
        let isValid = true;
        
        // Name validation
        if (name === '') {
            document.getElementById('name-error').textContent = 'Name is required';
            isValid = false;
        }
        
        // Email validation
        if (email === '') {
            document.getElementById('email-error').textContent = 'Email is required';
            isValid = false;
        } else if (!isValidEmail(email)) {
            document.getElementById('email-error').textContent = 'Please enter a valid email';
            isValid = false;
        }
        
        // Phone validation
        if (phone === '') {
            document.getElementById('phone-error').textContent = 'Phone number is required';
            isValid = false;
        } else if (!isValidPhone(phone)) {
            document.getElementById('phone-error').textContent = 'Please enter a valid phone number';
            isValid = false;
        }
        
        // Message validation
        if (message === '') {
            document.getElementById('message-error').textContent = 'Message is required';
            isValid = false;
        }
        
        // If form is valid, display results
        if (isValid) {
            // Add animation to form result
            formResult.parentElement.style.opacity = '0';
            formResult.parentElement.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                formResult.innerHTML = `
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone Number:</strong> ${phone}</p>
                    <p><strong>Message:</strong> ${message}</p>
                    <div class="success-message" style="margin-top: 1rem; padding: 10px; background: #d4edda; color: #155724; border-radius: 5px;">
                        <i class="fas fa-check-circle"></i> Thank you for your message! We'll get back to you soon.
                    </div>
                `;
                
                formResult.parentElement.style.opacity = '1';
                formResult.parentElement.style.transform = 'translateY(0)';
                formResult.parentElement.style.transition = 'all 0.5s ease';
            }, 300);
            
            // Reset form
            messageForm.reset();
        }
    });
    
    // Helper functions for validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function isValidPhone(phone) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
        return phoneRegex.test(phone);
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Achievement buttons functionality
    document.querySelectorAll('.achievement-btn').forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.achievement-card');
            const title = card.querySelector('h3').textContent;
            alert(`You clicked on: ${title}\n\nThis would typically open a modal with more details about this achievement.`);
        });
    });
    
    // Scroll animations
    const fadeElements = document.querySelectorAll('.vision, .mission, .achievement-card, .banner, .about-company');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // Add some interactive effects
    document.querySelectorAll('.achievement-card, .vision, .mission').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
