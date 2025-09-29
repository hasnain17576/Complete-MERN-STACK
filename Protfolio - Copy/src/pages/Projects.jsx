import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API', 'JWT'],
      githubLink: 'https://github.com/hasnain17576',
      liveLink: '#',
      image: '/assets/project1.jpg'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Socket.io', 'MongoDB', 'Express', 'Tailwind CSS'],
      githubLink: 'https://github.com/hasnain17576',
      liveLink: '#',
      image: '/assets/project2.jpg'
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media analytics dashboard that provides insights and analytics for multiple social media platforms.',
      technologies: ['React', 'Chart.js', 'Node.js', 'MongoDB', 'REST API'],
      githubLink: 'https://github.com/hasnain17576',
      liveLink: '#',
      image: '/assets/project3.jpg'
    },
    {
      title: 'Weather Application',
      description: 'A responsive weather application that provides current weather conditions and forecasts for any location worldwide.',
      technologies: ['React', 'OpenWeather API', 'CSS3', 'JavaScript'],
      githubLink: 'https://github.com/hasnain17576',
      liveLink: '#',
      image: '/assets/project4.jpg'
    },
    {
      title: 'Blog Platform',
      description: 'A modern blog platform with rich text editor, comment system, and admin panel for content management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Quill.js'],
      githubLink: 'https://github.com/hasnain17576',
      liveLink: '#',
      image: '/assets/project5.jpg'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects, skills, and experience with modern design and animations.',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'JavaScript'],
      githubLink: 'https://github.com/hasnain17576',
      liveLink: '#',
      image: '/assets/project6.jpg'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-primary-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent projects and work. Each project represents a learning journey and a step forward in my development career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in My Work?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always excited to work on new projects and collaborate with like-minded individuals. 
              Feel free to reach out if you'd like to discuss potential opportunities or just want to chat about technology!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/hasnain17576"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View All Projects on GitHub
              </a>
              <a
                href="#contact"
                className="btn-secondary"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
