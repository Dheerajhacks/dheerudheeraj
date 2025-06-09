
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, GraduationCap, Briefcase, Award } from 'lucide-react';
import Button from '../components/Button';
import { Card } from '../components/Card';

const About = () => {
  const [activeSection, setActiveSection] = useState('info');

  const sections = [
    { id: 'info', label: 'My Info', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'certifications', label: 'Certifications', icon: Award }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'info':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">About Me</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-3">Personal Information</h4>
                <div className="space-y-2 text-slate-700">
                  <p><span className="font-medium">Name:</span> Dheeraj Madugula</p>
                  <p><span className="font-medium">Location:</span> Hyderabad, India</p>
                  <p><span className="font-medium">Email:</span> dheeraj.madugula@email.com</p>
                  <p><span className="font-medium">Phone:</span> +91 12345 67890</p>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 mb-3">Quick Facts</h4>
                <div className="space-y-2 text-slate-700">
                  <p><span className="font-medium">Experience:</span> 3+ Years</p>
                  <p><span className="font-medium">Specialization:</span> Full-Stack Development</p>
                  <p><span className="font-medium">Languages:</span> English, Telugu, Hindi</p>
                  <p><span className="font-medium">Availability:</span> Open to opportunities</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Professional Summary</h4>
              <p className="text-slate-700 leading-relaxed">
                I'm a passionate full-stack developer with over 3 years of experience creating innovative web applications. 
                My journey began with a Computer Science degree, and I've been constantly learning and evolving with the latest technologies.
                I specialize in React, Node.js, and modern web technologies. I love turning complex problems into simple, 
                beautiful, and intuitive solutions.
              </p>
            </div>
          </div>
        );
      
      case 'education':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Education</h3>
            <div className="space-y-6">
              <Card className="bg-white border-slate-200 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900">Bachelor of Technology in Computer Science</h4>
                    <p className="text-blue-600 font-medium">JNTU Hyderabad</p>
                    <p className="text-slate-600">2018 - 2022</p>
                    <p className="text-slate-700 mt-2">CGPA: 8.5/10</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <h5 className="font-medium text-slate-900 mb-2">Relevant Coursework:</h5>
                  <div className="flex flex-wrap gap-2">
                    {['Data Structures', 'Algorithms', 'Database Management', 'Web Development', 'Software Engineering', 'Computer Networks'].map((course) => (
                      <span key={course} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
              
              <Card className="bg-white border-slate-200 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900">Intermediate (12th Grade)</h4>
                    <p className="text-blue-600 font-medium">Sri Chaitanya Junior College</p>
                    <p className="text-slate-600">2016 - 2018</p>
                    <p className="text-slate-700 mt-2">Percentage: 92%</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        );
      
      case 'experience':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Work Experience</h3>
            <div className="space-y-6">
              <Card className="bg-white border-slate-200 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900">Senior Full-Stack Developer</h4>
                    <p className="text-blue-600 font-medium">Tech Solutions Inc.</p>
                    <p className="text-slate-600">Jan 2023 - Present</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <ul className="list-disc list-inside space-y-2 text-slate-700">
                    <li>Led development of 5+ web applications using React and Node.js</li>
                    <li>Improved application performance by 40% through optimization techniques</li>
                    <li>Mentored junior developers and conducted code reviews</li>
                    <li>Collaborated with cross-functional teams to deliver projects on time</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
              
              <Card className="bg-white border-slate-200 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900">Full-Stack Developer</h4>
                    <p className="text-blue-600 font-medium">Digital Innovations Ltd.</p>
                    <p className="text-slate-600">Jun 2022 - Dec 2022</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <ul className="list-disc list-inside space-y-2 text-slate-700">
                    <li>Developed responsive web applications using React and Express.js</li>
                    <li>Integrated third-party APIs and payment gateways</li>
                    <li>Implemented automated testing and CI/CD pipelines</li>
                    <li>Worked closely with UI/UX designers to implement pixel-perfect designs</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['React', 'Express.js', 'PostgreSQL', 'Docker', 'Jest'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
              
              <Card className="bg-white border-slate-200 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900">Frontend Developer Intern</h4>
                    <p className="text-blue-600 font-medium">StartUp Solutions</p>
                    <p className="text-slate-600">Jan 2022 - May 2022</p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
                <div className="mt-4">
                  <ul className="list-disc list-inside space-y-2 text-slate-700">
                    <li>Built responsive user interfaces using React and CSS frameworks</li>
                    <li>Collaborated with backend team to integrate REST APIs</li>
                    <li>Participated in agile development processes and daily standups</li>
                    <li>Contributed to code documentation and best practices</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['React', 'JavaScript', 'CSS3', 'Bootstrap', 'Git'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        );
      
      case 'certifications':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Certifications</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
              <Card className="bg-white border-slate-200 p-6 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">AWS Certified Developer</h4>
                    <p className="text-blue-600 font-medium">Amazon Web Services</p>
                    <p className="text-slate-600">Issued: March 2023</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <p className="text-slate-700 text-sm">
                  Demonstrates proficiency in developing and maintaining applications on AWS platform.
                </p>
              </Card>
              
              <Card className="bg-white border-slate-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">React Developer Certification</h4>
                    <p className="text-blue-600 font-medium">Meta (Facebook)</p>
                    <p className="text-slate-600">Issued: January 2023</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <p className="text-slate-700 text-sm">
                  Advanced React concepts including hooks, context, and performance optimization.
                </p>
              </Card>
              
              <Card className="bg-white border-slate-200 p-6 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">Node.js Application Development</h4>
                    <p className="text-blue-600 font-medium">IBM</p>
                    <p className="text-slate-600">Issued: November 2022</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <p className="text-slate-700 text-sm">
                  Server-side development with Node.js, Express.js, and database integration.
                </p>
              </Card>
              
              <Card className="bg-white border-slate-200 p-6 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">MongoDB Developer Certification</h4>
                    <p className="text-blue-600 font-medium">MongoDB University</p>
                    <p className="text-slate-600">Issued: September 2022</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <p className="text-slate-700 text-sm">
                  Database design, querying, and optimization with MongoDB.
                </p>
              </Card>
              
              <Card className="bg-white border-slate-200 p-6 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">Docker & Kubernetes</h4>
                    <p className="text-blue-600 font-medium">Linux Foundation</p>
                    <p className="text-slate-600">Issued: August 2022</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <p className="text-slate-700 text-sm">
                  Container orchestration and deployment with Docker and Kubernetes.
                </p>
              </Card>
              
              <Card className="bg-white border-slate-200 p-6 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">JavaScript Advanced Concepts</h4>
                    <p className="text-blue-600 font-medium">FreeCodeCamp</p>
                    <p className="text-slate-600">Issued: July 2022</p>
                  </div>
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-indigo-600" />
                  </div>
                </div>
                <p className="text-slate-700 text-sm">
                  Advanced JavaScript patterns, closures, and asynchronous programming.
                </p>
              </Card>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-900">Dheeraj Madugula</div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-slate-600 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/about" className="text-blue-600 font-medium">About</Link>
              <Link to="/projects" className="text-slate-600 hover:text-blue-600 transition-colors">Projects</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">About Me</h1>
            <p className="text-lg text-slate-600">Get to know more about my background, experience, and qualifications.</p>
          </div>

          {/* Section Navigation */}
          <div className="flex flex-wrap gap-4 mb-8">
            {sections.map((section) => (
              <Button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                variant={activeSection === section.id ? "default" : "outline"}
                className={`${
                  activeSection === section.id 
                    ? "bg-blue-600 text-white" 
                    : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                }`}
              >
                <section.icon className="w-4 h-4 mr-2" />
                {section.label}
              </Button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};


export default About;