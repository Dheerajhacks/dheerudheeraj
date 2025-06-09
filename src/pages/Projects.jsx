import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ArrowLeft } from 'lucide-react';
import  Button  from '../components/Button';
import { Card } from '../components/Card';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A comprehensive e-commerce solution built with React and Node.js. Features include user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and admin dashboard.',
      longDescription: 'This full-stack e-commerce platform demonstrates modern web development practices with a focus on user experience and scalability. The frontend is built with React and TypeScript, featuring responsive design, state management with Redux, and optimized performance. The backend uses Node.js with Express, MongoDB for data storage, and implements RESTful APIs with proper authentication and authorization.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Express'],
      github: 'https://github.com/alexsmith/ecommerce',
      image: '/api/placeholder/600/400',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team collaboration features, project organization, and deadline tracking.',
      longDescription: 'A sophisticated task management system designed for teams and individuals. Built with React and TypeScript on the frontend, featuring real-time collaboration through Socket.io, drag-and-drop functionality, advanced filtering and sorting, and comprehensive project analytics. The backend uses Node.js with PostgreSQL and implements WebSocket connections for instant updates.',
      tech: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL', 'Node.js', 'Tailwind CSS'],
      github: 'https://github.com/alexsmith/taskmanager',
      image: '/api/placeholder/600/400',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'This very portfolio website built with modern React technologies, featuring responsive design, smooth animations, and optimized performance.',
      longDescription: 'A modern, responsive portfolio website showcasing my skills and projects. Built with React, TypeScript, and Tailwind CSS, featuring smooth animations, dark theme, gradient designs, and optimized performance. The site includes sections for about me, skills showcase with progress indicators, featured projects, and a contact form.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Router'],
      github: 'https://github.com/alexsmith/portfolio',
      image: '/api/placeholder/600/400',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts, multiple city tracking, and detailed weather analytics.',
      longDescription: 'A comprehensive weather application that provides detailed weather information, forecasts, and analytics. Features include geolocation-based weather detection, multiple city tracking, historical weather data, interactive charts and graphs, and responsive design that works seamlessly across all devices.',
      tech: ['React', 'API Integration', 'Chart.js', 'Geolocation API', 'CSS3'],
      github: 'https://github.com/alexsmith/weather-dashboard',
      image: '/api/placeholder/600/400',
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'Full-featured blogging platform with user authentication, rich text editor, commenting system, and admin panel.',
      longDescription: 'A complete blogging platform that allows users to create, edit, and manage blog posts with a rich text editor. Features include user authentication and authorization, commenting system with moderation, tag-based categorization, search functionality, and a comprehensive admin panel for content management.',
      tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'Rich Text Editor', 'Express'],
      github: 'https://github.com/alexsmith/blog-platform',
      image: '/api/placeholder/600/400',
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization, scheduling tools, and performance metrics.',
      longDescription: 'A powerful social media management tool that helps businesses and individuals track their social media performance across multiple platforms. Features include advanced analytics with interactive charts, post scheduling, engagement tracking, competitor analysis, and comprehensive reporting tools.',
      tech: ['React', 'D3.js', 'API Integration', 'Chart.js', 'Material-UI', 'Node.js'],
      github: 'https://github.com/alexsmith/social-dashboard',
      image: '/api/placeholder/600/400',
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="font-bold text-xl text-black flex items-center hover:text-blue-600 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Dheeraj Madugula
            </Link>
            <div className="text-gray-700">Projects</div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              My <span className="text-blue-600">Projects</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-slide-up">
              A collection of my work showcasing various technologies and solutions. 
              Each project represents a unique challenge and learning experience.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="bg-white border border-gray-200 shadow hover:shadow-md transition-all duration-300 group overflow-hidden hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <div className="text-4xl text-blue-500">🚀</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex justify-center">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white w-full"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 Dheeraj Madugula. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Projects;
