// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', function() {
    initSidebarNavigation();
    initScrollAnimations();
    initSmoothScroll();
    checkThemePreference();
});

// Sidebar Navigation - Active state on scroll
function initSidebarNavigation() {
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    const sections = document.querySelectorAll('.section');
    
    // Update active link based on scroll position
    function updateActiveLink() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Initial call
}

// Scroll-based Animations with Intersection Observer
function initScrollAnimations() {
    // Create Intersection Observer for all animated elements
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of element is visible
    };
    
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add delay based on element index within parent
                const delay = Array.from(entry.target.parentElement.children).indexOf(entry.target) * 100;
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, delay);
                
                // Unobserve after animation to prevent re-triggering
                animateOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all experience cards
    document.querySelectorAll('.experience-card').forEach(card => {
        card.classList.add('animate-on-scroll');
        animateOnScroll.observe(card);
    });
    
    // Observe all skill tags
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.classList.add('animate-on-scroll');
        animateOnScroll.observe(tag);
    });
    
    // Observe section headers
    document.querySelectorAll('.section-header').forEach(header => {
        header.classList.add('animate-on-scroll');
        animateOnScroll.observe(header);
    });
}

// Smooth Scroll
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Check Theme Preference
function checkThemePreference() {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Listen for theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    });
}

// Console welcome message
console.log('%c👋 Welcome to My Portfolio!', 'font-size: 20px; font-weight: bold; color: #3b82f6;');
console.log('%cBuilt with ❤️ and modern web technologies', 'font-size: 14px; color: #8b5cf6;');

