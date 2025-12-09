// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
const successMessage = document.querySelector('.success-message');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Simulate form submission (replace with actual form submission logic)
        console.log('Form submitted:', formObject);
        
        // Show success message
        successMessage.style.display = 'block';
        
        // Reset form
        this.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    });
}

// Gallery lightbox functionality
const galleryItems = document.querySelectorAll('.galeria-item');
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = '<span class="lightbox-close">&times;</span><img class="lightbox-content" src="">';
document.body.appendChild(lightbox);

const lightboxContent = lightbox.querySelector('.lightbox-content');
const lightboxClose = lightbox.querySelector('.lightbox-close');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxContent.src = item.src;
        lightboxContent.alt = item.alt;
    });
});

lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Escape key to close lightbox
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'block') {
        lightbox.style.display = 'none';
    }
});

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Parallax effect for hero image
const heroImage = document.querySelector('.hero-image');
if (heroImage) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        heroImage.style.transform = `translateY(${parallax}px)`;
    });
}

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.animation = 'fadeIn 0.5s ease-out';
    });
});

// Form validation enhancement
const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
inputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            input.style.borderColor = '#dc3545';
        } else {
            input.style.borderColor = '#ddd';
        }
    });
    
    input.addEventListener('focus', () => {
        input.style.borderColor = '#007bff';
    });
});

// Social media link hover effects
const socialLinks = document.querySelectorAll('.social-link');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Button click effects
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple effect styles
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Netse website loaded successfully');
    
    // Add current year to copyright if needed
    const copyright = document.querySelector('.copyright');
    if (copyright) {
        const currentYear = new Date().getFullYear();
        copyright.textContent = copyright.textContent.replace('2023', currentYear);
    }
});