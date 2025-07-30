(function ($) {

  "use strict";

    // COLOR MODE with localStorage
    function initColorMode() {
        const savedMode = localStorage.getItem('colorMode');
        const modeText = $('.mode-text');
        
        if (savedMode === 'dark') {
            $('body').addClass('dark-mode');
            $('.color-mode-icon').addClass('active');
            modeText.text('Dark Mode');
        } else {
            $('body').removeClass('dark-mode');
            $('.color-mode-icon').removeClass('active');
            modeText.text('Light Mode');
        }
    }

    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active');
        $('body').toggleClass('dark-mode');
        
        const modeText = $('.mode-text');
        if ($('body').hasClass('dark-mode')) {
            localStorage.setItem('colorMode', 'dark');
            modeText.text('Dark Mode');
        } else {
            localStorage.setItem('colorMode', 'light');
            modeText.text('Light Mode');
        }
    });

    // Initialize color mode on page load
    initColorMode();

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // TESTIMONIAL CAROUSEL
    $('.testimonial-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

    // SKILLS ANIMATION
    function animateSkills() {
        $('.skill-progress').each(function() {
            const percentage = $(this).data('percentage');
            $(this).css('width', percentage + '%');
        });
    }

    // PROJECT FILTERING
    $('.filter-btn').click(function() {
        const filter = $(this).data('filter');
        
        // Update active button
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        // Filter projects
        if (filter === 'all') {
            $('.owl-carousel .item').show();
        } else {
            $('.owl-carousel .item').hide();
            $('.owl-carousel .item[data-category="' + filter + '"]').show();
        }
        
        // Refresh carousel
        $('.owl-carousel').trigger('refresh.owl.carousel');
    });

    // Initialize project carousel to show all projects by default
    $(document).ready(function() {
        // Show all projects initially
        $('.owl-carousel .item').show();
        
        // Set "All" button as active by default
        $('.filter-btn[data-filter="all"]').addClass('active');
    });

    // SCROLL REVEAL ANIMATIONS
    function initScrollReveal() {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add a small delay before triggering animation
                    setTimeout(() => {
                        entry.target.classList.add('aos-animate');
                    }, 100);
                }
            });
        }, observerOptions);

        // Observe all elements with data-aos
        document.querySelectorAll('[data-aos]').forEach(el => {
            observer.observe(el);
        });
    }

    // CONTACT FORM VALIDATION
    function initContactForm() {
        const form = document.getElementById('contactForm');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        function showError(input, message) {
            const errorElement = document.getElementById(input.id + '-error');
            errorElement.textContent = message;
            errorElement.style.display = 'block';
            input.classList.add('error');
            input.classList.remove('success');
        }

        function showSuccess(input) {
            const errorElement = document.getElementById(input.id + '-error');
            errorElement.style.display = 'none';
            input.classList.remove('error');
            input.classList.add('success');
        }

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }

        function validateField(input, validationRules) {
            const value = input.value.trim();
            
            if (validationRules.required && !value) {
                showError(input, 'This field is required');
                return false;
            }
            
            if (validationRules.email && !validateEmail(value)) {
                showError(input, 'Please enter a valid email address');
                return false;
            }
            
            if (validationRules.minLength && value.length < validationRules.minLength) {
                showError(input, `Minimum ${validationRules.minLength} characters required`);
                return false;
            }
            
            showSuccess(input);
            return true;
        }

        // Real-time validation
        nameInput.addEventListener('blur', () => {
            validateField(nameInput, { required: true, minLength: 2 });
        });

        emailInput.addEventListener('blur', () => {
            validateField(emailInput, { required: true, email: true });
        });

        messageInput.addEventListener('blur', () => {
            validateField(messageInput, { required: true, minLength: 10 });
        });

        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const isNameValid = validateField(nameInput, { required: true, minLength: 2 });
            const isEmailValid = validateField(emailInput, { required: true, email: true });
            const isMessageValid = validateField(messageInput, { required: true, minLength: 10 });
            
            if (isNameValid && isEmailValid && isMessageValid) {
                // Show success message
                alert('Thank you for your message! I will get back to you soon.');
                form.reset();
                
                // Remove success classes
                [nameInput, emailInput, messageInput].forEach(input => {
                    input.classList.remove('success');
                });
            }
        });
    }

    // Initialize everything when DOM is ready
    $(document).ready(function() {
        // Initialize contact form
        initContactForm();
        
        // Animate skills when skills section is visible
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            const skillsObserver = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateSkills();
                        skillsObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            skillsObserver.observe(skillsSection);
        }
        
        // Scroll reveal disabled to prevent content fading issues
        // All content will remain visible without animations
    });

})(jQuery);
