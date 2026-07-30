/**
 * Portfolio Console Biodata
 * Developer Easter Egg - Professional Console Message
 * © Deepak S
 */

(function() {
    'use strict';
    
    // Styles for console output
    const styles = {
        title: 'color: #3b82f6; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(59,130,246,0.3);',
        header: 'color: #60a5fa; font-size: 16px; font-weight: bold;',
        label: 'color: #fb923c; font-weight: bold;',
        value: 'color: #10b981;',
        link: 'color: #3b82f6; text-decoration: underline;',
        border: 'color: #475569;',
        emoji: 'font-size: 18px;',
        reset: 'color: inherit;'
    };

    // Console biodata content
    const biodata = {
        name: 'Deepak S',
        role: 'Aspiring Software Engineer & Full Stack Developer',
        skills: [
            'React.js',
            'JavaScript',
            'TypeScript',
            'Node.js',
            'Express.js',
            'MongoDB',
            'REST API',
            'Git & GitHub'
        ],
        projects: [
            'CodeForge AI (MERN + Gemini AI)',
            'Interview Ace AI',
            'Railway-X Smart Reservation System',
            'Enterprise Store Management System',
            'News API Application'
        ],
        github: 'Deepak-1006S',
        portfolio: 'deepak-portfolio-06.vercel.app',
        email: 'deepaksureshdeepak036@gmail.com'
    };

    // Clear console and display biodata
    console.clear();
    
    // Header
    console.log('%c\n🚀 ════════════════════════════════════════════', styles.border);
    console.log('%c      DEEPAK S PORTFOLIO', styles.title);
    console.log('%c════════════════════════════════════════════\n', styles.border);
    
    // Basic Info
    console.log('%c👨‍💻 Name:%c ' + biodata.name, styles.label, styles.value);
    console.log('%c💼 Role:%c ' + biodata.role, styles.label, styles.value);
    
    // Skills
    console.log('%c\n⚡ Skills:', styles.header);
    biodata.skills.forEach(skill => {
        console.log('%c  ▸ %c' + skill, styles.emoji, styles.value);
    });
    
    // Projects
    console.log('%c\n🚀 Featured Projects:', styles.header);
    biodata.projects.forEach(project => {
        console.log('%c  ▸ %c' + project, styles.emoji, styles.value);
    });
    
    // Contact & Links
    console.log('%c\n🔗 Connect with me:', styles.header);
    console.log('%c  GitHub:%c https://github.com/' + biodata.github, styles.label, styles.link);
    console.log('%c  Portfolio:%c https://' + biodata.portfolio, styles.label, styles.link);
    console.log('%c  Email:%c ' + biodata.email, styles.label, styles.value);
    
    // Footer
    console.log('%c\n════════════════════════════════════════════', styles.border);
    console.log('%c💡 Tip: %cType %chelp()%c in console for more info!', styles.label, styles.reset, styles.value, styles.reset);
    console.log('%c════════════════════════════════════════════\n', styles.border);

    // Helper function
    window.help = function() {
        console.log('%c\n📚 Available Commands:', styles.header);
        console.log('%c  • %chelp()%c - Show this help message', styles.emoji, styles.value, styles.reset);
        console.log('%c  • %cabout()%c - Show detailed about info', styles.emoji, styles.value, styles.reset);
        console.log('%c  • %cskills()%c - List all technical skills', styles.emoji, styles.value, styles.reset);
        console.log('%c  • %cprojects()%c - Show all projects', styles.emoji, styles.value, styles.reset);
        console.log('%c  • %ccontact()%c - Show contact information\n', styles.emoji, styles.value, styles.reset);
    };

    window.about = function() {
        console.log('%c\n👨‍💻 About Me:', styles.header);
        console.log('%cI\'m an aspiring Software Engineer specializing in Full Stack Development with the MERN stack. Passionate about building scalable web applications, REST APIs, and integrating AI technologies.', styles.value);
        console.log('%c\n🎓 Education: %cBachelor of Computer Applications', styles.label, styles.value);
        console.log('%c📍 Location: %cIndia', styles.label, styles.value);
        console.log('%c🌟 Focus: %cSoftware Engineering, MERN Stack, AI Integration\n', styles.label, styles.value);
    };

    window.skills = function() {
        console.log('%c\n⚡ Technical Skills:', styles.header);
        console.log('%c\n🔹 Programming Languages:', styles.label);
        console.log('%c  JavaScript, TypeScript, Java, Python, C++, SQL', styles.value);
        console.log('%c\n🔹 Frontend:', styles.label);
        console.log('%c  React.js, HTML5, CSS3, Tailwind CSS, Responsive Design', styles.value);
        console.log('%c\n🔹 Backend:', styles.label);
        console.log('%c  Node.js, Express.js, REST APIs, JWT Authentication', styles.value);
        console.log('%c\n🔹 Database:', styles.label);
        console.log('%c  MongoDB, SQL, Database Design, Query Optimization', styles.value);
        console.log('%c\n🔹 Tools & Others:', styles.label);
        console.log('%c  Git, GitHub, VS Code, Postman, Vercel, Chrome DevTools\n', styles.value);
    };

    window.projects = function() {
        console.log('%c\n🚀 Projects Portfolio:', styles.header);
        console.log('%c\n1. CodeForge AI', styles.label);
        console.log('%c   MERN Stack + Gemini AI integration', styles.value);
        console.log('%c\n2. Interview Ace AI', styles.label);
        console.log('%c   AI-powered interview preparation platform', styles.value);
        console.log('%c\n3. Railway-X Smart Reservation System', styles.label);
        console.log('%c   Full-stack railway booking application', styles.value);
        console.log('%c\n4. Enterprise Store Management System', styles.label);
        console.log('%c   Complete inventory and sales management', styles.value);
        console.log('%c\n5. News API Application', styles.label);
        console.log('%c   Real-time news aggregation platform\n', styles.value);
    };

    window.contact = function() {
        console.log('%c\n📬 Contact Information:', styles.header);
        console.log('%c\n  GitHub:%c https://github.com/Deepak-1006S', styles.label, styles.link);
        console.log('%c  Portfolio:%c https://deepak-portfolio-06.vercel.app', styles.label, styles.link);
        console.log('%c  Email:%c deepaksureshdeepak036@gmail.com', styles.label, styles.value);
        console.log('%c  LinkedIn:%c Connect with me!', styles.label, styles.value);
        console.log('%c\n💼 Open to opportunities in Software Engineering and Full Stack Development!\n', styles.header);
    };

    // Easter egg message
    console.log('%c🎨 Curious developer detected! Welcome to my portfolio console.', 'color: #a78bfa; font-style: italic;');
    console.log('%cFeel free to explore using the commands above. Happy coding! 🚀\n', 'color: #64748b; font-style: italic;');

})();
