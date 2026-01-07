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
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
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
// Only append if not already present
if (!document.querySelector('#ripple-styles')) {
    rippleStyle.id = 'ripple-styles';
    document.head.appendChild(rippleStyle);
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Netse website loaded successfully');
    
    // Add current year to copyright if needed
    const copyright = document.querySelector('.copyright');
    if (copyright) {
        const currentYear = new Date().getFullYear();
        copyright.textContent = copyright.textContent.replace('2023', currentYear);
    }
    
    // Initialize gallery slider
    initGallerySlider();
    
    // Initialize enhanced form validation
    initFormValidation();
});

// GALLERY SLIDER FUNCTIONALITY
function initGallerySlider() {
    const sliderContainer = document.querySelector('.gallery-slider');
    if (!sliderContainer) return;
    
    const slides = sliderContainer.querySelectorAll('.slide');
    const prevBtn = sliderContainer.querySelector('.gallery-prev');
    const nextBtn = sliderContainer.querySelector('.gallery-next');
    const dotsContainer = sliderContainer.querySelector('.gallery-dots');
    
    if (slides.length === 0) return;
    
    if (!prevBtn || !nextBtn || !dotsContainer) return;
    
    let currentSlide = 0;
    let autoSlideEnabled = true;
    let autoSlideInterval;
    const autoSlideDelay = 5000;
    
    // Create dot navigation
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'dot' + (index === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = dotsContainer.querySelectorAll('.dot');
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            dots[i].classList.toggle('active', i === index);
        });
        
        currentSlide = index;
    }
    
    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }
    
    function prevSlide() {
        const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
    }
    
    function goToSlide(index) {
        showSlide(index);
        resetAutoSlide();
    }
    
    function startAutoSlide() {
        if (autoSlideEnabled) {
            autoSlideInterval = setInterval(nextSlide, autoSlideDelay);
        }
    }
    
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    function resetAutoSlide() {
        stopAutoSlide();
        startAutoSlide();
    }
    
    function toggleAutoSlide() {
        autoSlideEnabled = !autoSlideEnabled;
        if (autoSlideEnabled) {
            startAutoSlide();
        } else {
            stopAutoSlide();
        }
        return autoSlideEnabled;
    }
    
    // Event listeners
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });
    
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });
    
    // Keyboard navigation
    sliderContainer.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            resetAutoSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            resetAutoSlide();
        } else if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            toggleAutoSlide();
        }
    });
    
    // Pause auto-slide on hover
    sliderContainer.addEventListener('mouseenter', stopAutoSlide);
    sliderContainer.addEventListener('mouseleave', startAutoSlide);
    
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    sliderContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    sliderContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            resetAutoSlide();
        }
    }
    
    // Expose toggle function globally for external control
    sliderContainer.dataset.autoSlideEnabled = autoSlideEnabled;
    sliderContainer.toggleAutoSlide = toggleAutoSlide;
    
    // Start auto-slide
    startAutoSlide();
}

// ENHANCED FORM VALIDATION
function initFormValidation() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    
    const fields = {
        name: {
            element: form.querySelector('#name, input[name="name"], .field-name input'),
            validators: [
                { test: v => v.trim() !== '', message: 'Nome é obrigatório' },
                { test: v => v.trim().length >= 2, message: 'Nome deve ter pelo menos 2 caracteres' }
            ]
        },
        sobrenome: {
            element: form.querySelector('#sobrenome, input[name="sobrenome"], input[placeholder="Sobrenome"]'),
            validators: [
                { test: v => v.trim() !== '', message: 'Sobrenome é obrigatório' },
                { test: v => v.trim().length >= 2, message: 'Sobrenome deve ter pelo menos 2 caracteres' }
            ]
        },
        email: {
            element: form.querySelector('#email, input[name="email"], .field-email input'),
            validators: [
                { test: v => v.trim() !== '', message: 'Email é obrigatório' },
                { test: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), message: 'Por favor, insira um email válido' }
            ]
        },
        assunto: {
            element: form.querySelector('#assunto, input[name="assunto"], input[placeholder="Assunto"]'),
            validators: [
                { test: v => v.trim() !== '', message: 'Assunto é obrigatório' },
                { test: v => v.trim().length >= 2, message: 'Assunto deve ter pelo menos 2 caracteres' }
            ]
        },
        message: {
            element: form.querySelector('#message, textarea[name="message"], .field-message textarea'),
            validators: [
                { test: v => v.trim() !== '', message: 'Mensagem é obrigatória' },
                { test: v => v.trim().length >= 10, message: 'Mensagem deve ter pelo menos 10 caracteres' }
            ]
        }
    };
    
    // Create error message elements
    Object.keys(fields).forEach(fieldName => {
        const field = fields[fieldName];
        if (field.element) {
            const errorEl = document.createElement('span');
            errorEl.className = 'field-error';
            errorEl.setAttribute('aria-live', 'polite');
            field.element.parentNode.appendChild(errorEl);
            field.errorElement = errorEl;
        }
    });
    
    function showError(fieldName, message) {
        const field = fields[fieldName];
        if (!field) return;
        
        field.element.classList.add('error');
        field.element.setAttribute('aria-invalid', 'true');
        field.errorElement.textContent = message;
        field.errorElement.style.display = 'block';
    }
    
    function clearError(fieldName) {
        const field = fields[fieldName];
        if (!field) return;
        
        field.element.classList.remove('error');
        field.element.setAttribute('aria-invalid', 'false');
        field.errorElement.textContent = '';
        field.errorElement.style.display = 'none';
    }
    
    function validateField(fieldName) {
        const field = fields[fieldName];
        if (!field || !field.element) return true;
        
        const value = field.element.value || '';
        clearError(fieldName);
        
        for (const validator of field.validators) {
            if (!validator.test(value)) {
                showError(fieldName, validator.message);
                return false;
            }
        }
        
        return true;
    }
    
    function validateAllFields() {
        let isValid = true;
        
        Object.keys(fields).forEach(fieldName => {
            if (!validateField(fieldName)) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    // Real-time validation on blur
    Object.keys(fields).forEach(fieldName => {
        const field = fields[fieldName];
        if (field && field.element) {
            field.element.addEventListener('blur', () => {
                validateField(fieldName);
            });
            
            // Clear error on input
            field.element.addEventListener('input', () => {
                if (field.element.classList.contains('error')) {
                    validateField(fieldName);
                }
            });
        }
    });
    
    // Form submission validation
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (!validateAllFields()) {
            // Focus first invalid field
            const firstInvalid = form.querySelector('.error');
            if (firstInvalid) {
                firstInvalid.focus();
            }
            return;
        }
        
        // Get form data
        const formData = new FormData(form);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Simulate form submission (replace with actual form submission logic)
        console.log('Form submitted:', formObject);
        
        // Show success message
        const successMessage = document.querySelector('.success-message');
        if (successMessage) {
            successMessage.style.display = 'block';
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        }
        
        // Reset form
        form.reset();
        
        // Clear all errors
        Object.keys(fields).forEach(fieldName => {
            clearError(fieldName);
        });
    });
}