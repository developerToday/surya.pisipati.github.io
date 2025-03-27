// Dynamic Content Configuration
const portfolioData = {
    about: {
        title: "About Me",
        content: "Enthusiastic full-stack developer with over 7 years of experience in JavaScript and Java..."
    },
    skills: [
        'Java/J2EE', 'Spring Boot', 'React JS', 'Redux',
        'HTML5', 'CSS3', 'JavaScript', 'Node JS',
        'NLP/JWT', 'Linux', 'Microservices', 'Oracle',
        'JBoss', 'Wildfly', 'SQL', 'PostgreSQL'
    ],
    experience: [
        {
            company: "Infosys",
            position: "Software Engineer",
            duration: "07/2021 - Present",
            location: "Dallas, USA",
            achievements: [
                "Developed full-stack projects at Verizon Communications...",
                "Improved client network alarm operations by 30%..."
            ]
        }
    ],
    projects: [
        {
            title: "K-2 Nutrition Application",
            description: "Migrated legacy system to ReactJS...",
            technologies: ["React", "Spring Boot", "AWS"]
        }
    ]
};

// DOM Elements
const sectionsContainer = document.getElementById('sections-container');
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Dynamic Content Generation
function createSection(sectionId, content) {
    const section = document.createElement('section');
    section.id = sectionId;
    section.className = 'section';
    
    // Add section content based on type
    switch(sectionId) {
        case 'skills':
            section.innerHTML = `
                <h2>Technical Skills</h2>
                <div class="skills-grid">
                    ${content.map(skill => `<div class="skill-card">${skill}</div>`).join('')}
                </div>
            `;
            break;
        case 'experience':
            section.innerHTML = `
                <h2>Professional Experience</h2>
                <div class="timeline">
                    ${content.map(exp => `
                        <div class="timeline-item">
                            <h3>${exp.position} @ ${exp.company}</h3>
                            <p class="duration">${exp.duration}</p>
                            <ul>
                                ${exp.achievements.map(ach => `<li>${ach}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
            `;
            break;
        // Add other sections similarly
    }
    
    sectionsContainer.appendChild(section);
}

// Initialize Content
document.addEventListener('DOMContentLoaded', () => {
    createSection('skills', portfolioData.skills);
    createSection('experience', portfolioData.experience);
    // Add other sections
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});