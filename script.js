// Mobile Menu Toggle
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Content Loading (Example for Skills)
const skills = [
    'Java/J2EE', 'Spring Boot', 'React JS', 'Redux',
    'HTML5', 'CSS3', 'JavaScript', 'Node JS',
    'NLP/JWT', 'Linux', 'Microservices', 'Oracle',
    'JBoss', 'Wildfly', 'SQL', 'PostgreSQL',
    'MySQL', 'Jenkins', 'CI/CD', 'AWS services'
];

const skillsSection = document.createElement('section');
skillsSection.id = 'skills';
skillsSection.className = 'section';
skillsSection.innerHTML = `
    <h2>Technical Skills</h2>
    <div class="skills-container"></div>
`;

document.querySelector('main').appendChild(skillsSection);

skills.forEach(skill => {
    const skillElement = document.createElement('div');
    skillElement.className = 'skill-item';
    skillElement.textContent = skill;
    document.querySelector('.skills-container').appendChild(skillElement);
});