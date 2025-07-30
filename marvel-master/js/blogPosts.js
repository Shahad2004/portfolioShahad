// Blog Posts Data
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with WordPress Development",
        excerpt: "Learn the fundamentals of WordPress development and how to create custom themes and plugins. This guide covers everything from basic setup to advanced customization techniques.",
        date: "December 15, 2024",
        category: "Web Development",
        image: "images/project/project-image04.png",
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "Database Design Best Practices",
        excerpt: "Explore the essential principles of relational database design. From normalization to indexing, discover how to create efficient and scalable database structures.",
        date: "December 10, 2024",
        category: "Database",
        image: "images/project/project-image01.png",
        readTime: "8 min read"
    },
    {
        id: 3,
        title: "Java Data Structures Implementation",
        excerpt: "A deep dive into implementing common data structures in Java. Learn about arrays, linked lists, stacks, queues, and trees with practical examples.",
        date: "December 5, 2024",
        category: "Programming",
        image: "images/project/project-image02.png",
        readTime: "10 min read"
    },
    {
        id: 4,
        title: "Power BI for Data Visualization",
        excerpt: "Master the art of data visualization with Power BI. Create compelling dashboards and reports that transform raw data into actionable insights.",
        date: "November 30, 2024",
        category: "Data Analysis",
        image: "images/project/project-image05.png",
        readTime: "6 min read"
    },
    {
        id: 5,
        title: "React Framework Fundamentals",
        excerpt: "Understanding React components, state management, and hooks. Build modern, responsive web applications with this powerful JavaScript library.",
        date: "November 25, 2024",
        category: "Web Development",
        image: "images/project/project-image03.png",
        readTime: "7 min read"
    },
    {
        id: 6,
        title: "SEO Optimization Techniques",
        excerpt: "Learn proven SEO strategies to improve your website's search engine rankings. From keyword research to technical optimization, boost your online visibility.",
        date: "November 20, 2024",
        category: "Digital Marketing",
        image: "images/project/project-image01.png",
        readTime: "4 min read"
    }
];

// Function to display blog posts
function displayBlogPosts() {
    const blogContainer = document.getElementById('blog-posts');
    
    if (!blogContainer) return;
    
    // Display first 3 posts
    const postsToShow = blogPosts.slice(0, 3);
    
    postsToShow.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'col-lg-4 col-md-6 col-12 mb-4';
        postElement.setAttribute('data-aos', 'fade-up');
        
        postElement.innerHTML = `
            <div class="blog-card">
                <div class="blog-image">
                    <img src="${post.image}" class="img-fluid" alt="${post.title}">
                    <div class="blog-overlay">
                        <span class="blog-category">${post.category}</span>
                    </div>
                </div>
                <div class="blog-content">
                    <div class="blog-meta">
                        <span class="blog-date">${post.date}</span>
                        <span class="blog-read-time">${post.readTime}</span>
                    </div>
                    <h4 class="blog-title">${post.title}</h4>
                    <p class="blog-excerpt">${post.excerpt}</p>
                    <a href="#" class="blog-link">Read More <i class="uil uil-arrow-right"></i></a>
                </div>
            </div>
        `;
        
        blogContainer.appendChild(postElement);
    });
}

// Load blog posts when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    displayBlogPosts();
}); 