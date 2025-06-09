import React from 'react';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Code2, Zap, Shield, Server,  Code, Database, Globe, User, Sparkles, Award, Coffee, Heart } from 'lucide-react';
import  Button  from '../components/Button';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import  {Textarea} from '../components/Textarea';
import '../index.css';



export default function Home() {
    const skills = [
    {name: 'Problem Solving', icon: Shield, description: 'Data Structures, Algorithms using Java, Python'},
    { name: 'Frontend Development', icon: Code2, description: 'HTML, CSS, React, Tailwind CSS' },
    { name: 'Backend Development', icon: Server, description: 'Node.js, Express' },
    { name: 'Database Management', icon: Database, description: 'MongoDB, SQL' },
    { name: 'Cloud & DevOps', icon: Globe, description: 'AWS' },
    { name: 'Machine Learning', icon: Zap, description: 'TensorFlow, Scikit-learn' }
  ];

  const featuredProjects = [
    {
      title: 'Dyslexia Detection and Assistance App',
      description: 'An innovative app to help detect and assist individuals with dyslexia using machine learning.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
      github: 'https://github.com/dheerajhacks',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates and team features.',
      tech: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
      github: 'https://github.com/dheerajhacks',
    },
    {
      title: 'Portfolio Website',
      description: 'This very portfolio built with React and modern web technologies.',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/dheerajhacks',
    }
  ];
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const codeLines = [
    "const developer = 'Dheeraj Madugula';",
    "const skills = ['React', 'Node.js', 'TypeScript'];",
    "const passion = 'Building amazing apps';",
  ];

  const techIcons = [
    { Icon: Code, delay: 0 },
    { Icon: Database, delay: 0.5 },
    { Icon: Globe, delay: 1 },
  ];

    return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 ">
      {/* Navigation */}
      <div>
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md ">  
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="font-bold text-xl">Dheeraj Madugula</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-600 py-2">Home</a>
              <a href="#skills" className="hover:text-blue-600 py-2">Skills</a>
              <a href="#projects" className="hover:text-blue-600 py-2">Projects</a>
              <a href="#contact" className="hover:text-blue-600 py-2">Contact</a>
              <Link 
                  to="/about" 
                  className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
                >
                  <User className="w-4 h-4" />
                  <span>About Me</span>
                  <Sparkles className="w-4 h-4 group-hover:animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </Link>
            </div>
          </div>
        </div>
      </nav>
      </div>

      {/* Floating Tech Icons */}
      {techIcons.map(({ Icon, delay }, index) => (
        <div
          key={index}
          className="absolute animate-bounce"
          style={{
            left: `${20 + index * 30}%`,
            top: `${20 + index * 15}%`,
            animationDelay: `${delay}s`,
            animationDuration: "3s",
          }}
        >
          <Icon className="w-8 h-8 text-blue-400/30" />
        </div>
      ))}

      {/* Mouse Follower */}
      <div
        className="absolute w-4 h-4 bg-blue-500/20 rounded-full pointer-events-none transition-all duration-300 ease-out z-10"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
      />

      

      {/* Hero Section */}
            <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Profile Image */}
            <div className="flex justify-center md:justify-start relative">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                  <div className="text-6xl">👨‍💻</div>
                </div>
                {/* Code icon */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                {/* Database icon */}
                <div className="absolute bottom-8 -left-8 w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center">
                  <Database className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Hi, I'm <span className="text-blue-600">Dheeraj Madugula</span>
              </h1>
              <p className="text-xl text-slate-700 mb-6">
                Problem Solver Enthusiast / Full-Stack Developer
              </p>

              {/* Code snippet
              <div className="bg-slate-900 rounded-lg p-4 mb-8 font-mono text-sm">
                <div className="text-blue-400">const <span className="text-white">developer</span> = <span className="text-green-400">'Dheeraj Madugula'</span>;</div>
                <div className="text-blue-400">const <span className="text-white">skills</span> = [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Node.js'</span>, <span className="text-green-400">'TypeScript'</span>];</div>
                <div className="text-blue-400">const <span className="text-white">passion</span> = <span className="text-green-400">'building amazing apps'</span>;</div>
              </div> */}

              <div className="space-x-4 mb-8">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link to="/projects">View My Work</Link>
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  <a href="#contact">Get In Touch</a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/dheerajhacks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center hover:bg-slate-300 transition-colors"
                >
                  <Github className="w-5 h-5 text-slate-700" />
                </a>

                <a 
                  href="https://www.linkedin.com/in/dheeraj-madugula/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center hover:bg-slate-300 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-slate-700" />
                </a>

                <a 
                  href="mailto:maduguladheeraj@gmail.com"
                  className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center hover:bg-slate-300 transition-colors"
                >
                  <Mail className="w-5 h-5 text-slate-700" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 text-lg">Technologies and tools I work with to build amazing products</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name} 
                className="bg-white  border-slate-200  hover:border-blue-300  hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 group"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <skill.icon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{skill.name}</h3>
                  <p className="text-slate-600 text-sm">{skill.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 text-lg">Here are some of my recent projects that showcase my skills and experience.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.title} 
                className="bg-white border-slate-200 hover:border-blue-300 hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 group"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700  rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white w-full"
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
          <div className="text-center">
            <Link to="/projects">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transform hover:scale-105 transition-all duration-200">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-slate-600 text-lg">Let's work together to bring your ideas to life!</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center hover:text-blue-600 transition-colors">
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <span className="text-slate-700">dheerajmadugula6@gmail.com</span>  
                </div>
                <div className="flex items-center hover:text-blue-600 transition-colors">
                  <Linkedin className="w-6 h-6 text-blue-600 mr-4" />
                  <span className="text-slate-700">linkedin.com/in/dheeraj-madugula</span>
                </div>
                <div className="flex items-center hover:text-blue-600 transition-colors">
                  <Github className="w-6 h-6 text-blue-600 mr-4" />
                  <span className="text-slate-700">github.com/dheerajhacks</span>
                </div>
              </div>
            </div>
            <form className="space-y-6 animate-fade-in">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <Input 
                  id="name" 
                  placeholder="Your Name" 
                  className="bg-white border-slate-300 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@example.com" 
                  className="bg-white border-slate-300 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message..." 
                  rows={5}
                  className="bg-white border-slate-300 text-slate-900 placeholder-slate-500 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transform hover:scale-105 transition-all duration-200">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200  bg-white/80 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-slate-600">
            <p>&copy; 2024 Dheeraj Madugula. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}