
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, GraduationCap, Briefcase, Award } from 'lucide-react';
import Button from '../components/Button';
import { Card } from '../components/Card';

const About = () => {
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
          </div>

          {/* Unified Content */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
            {/* Personal Information */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-slate-900">Personal Information</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Contact Details</h4>
                  <div className="space-y-2 text-slate-700">
                    <p><span className="font-medium">Name:</span> Dheeraj Madugula</p>
                    <p><span className="font-medium">Location:</span> Hyderabad, India</p>
                    <p><span className="font-medium">Email:</span> maduguladheeraj@gmail.com</p>
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

            {/* Education */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-slate-900">Education</h3>
              </div>
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="bg-white border-slate-200 p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900">Bachelor of Technology in Computer Science and Engineering</h4>
                      <p className="text-blue-600 font-medium">Gokaraju Rangaraju Institute of Engineering and Technology, Hyderabad</p>
                      <p className="text-slate-600">2022 - 2026</p>
                      <p className="text-slate-700 mt-2">CGPA: 9.21/10</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <h5 className="font-medium text-slate-900 mb-2">Relevant Coursework:</h5>
                    <div className="flex flex-wrap gap-2">
                      {['Data Structures', 'Algorithms', 'Database Management', 'Web Development', 'Operating Systems', 'Computer Networks'].map((course) => (
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
                      <p className="text-slate-600">2020 - 2022</p>
                      <p className="text-slate-700 mt-2">Percentage: 98.2%</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-slate-900">Work Experience</h3>
              </div>
              <div className="space-y-6">
                <Card className="bg-white border-slate-200 p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900">Frontend Web Developer</h4>
                      <p className="text-blue-600 font-medium">Clubchat</p>
                      <p className="text-slate-600">May 2025 - Present</p>
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
                      {['Figma',  'TypeScript', 'Tailwind CSS'].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            {/* Certifications */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-blue-600" />
                <h3 className="text-2xl font-bold text-slate-900">Certifications</h3>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                <Card className="bg-white border-slate-200 p-6 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">Cloud Virtual Internship</h4>
                      <p className="text-blue-600 font-medium">AWS Academy</p>
                      <p className="text-slate-600">Issued: Sept 2024</p>
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
                      <h4 className="text-lg font-semibold text-slate-900">CCNA: Introduction to Networks</h4>
                      <p className="text-blue-600 font-medium">Cisco</p>
                      <p className="text-slate-600">Issued: Oct 2023</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm">
                    Covers networking fundamentals, IP addressing, and network security.
                  </p>
                </Card>
                
                <Card className="bg-white border-slate-200 p-6 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">Data Science for Engineers</h4>
                      <p className="text-blue-600 font-medium">NPTEL</p>
                      <p className="text-slate-600">Issued: Sept 2022</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm">
                    Introduction to data science concepts, tools, and applications in engineering.
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
                      <h4 className="text-lg font-semibold text-slate-900">Python Essentials 1</h4>
                      <p className="text-blue-600 font-medium">Cisco</p>
                      <p className="text-slate-600">Issued: Mar 2025</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm">
                    Introduction to Python programming and its applications.
                  </p>
                </Card>
                
                <Card className="bg-white border-slate-200 p-6 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">Python Essentials 2</h4>
                      <p className="text-blue-600 font-medium">Cisco</p>
                      <p className="text-slate-600">Issued: Mar 2025</p>
                    </div>
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-indigo-600" />
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm">
                    Advanced Python programming concepts and best practices.
                  </p>
                </Card>

                <Card className="bg-white border-slate-200 p-6 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">Data Analytics with Python</h4>
                      <p className="text-blue-600 font-medium">NPTEL</p>
                      <p className="text-slate-600">Issued: May 2025</p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm">
                    Demonstrates proficiency in data analysis and visualization using Python.
                  </p>
                </Card>
                
                <Card className="bg-white border-slate-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">CCNA: Switching, Routing, and Wireless Essentials</h4>
                      <p className="text-blue-600 font-medium">Cisco</p>
                      <p className="text-slate-600">Issued: Apr 2025</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <p className="text-slate-700 text-sm">
                    Covers networking fundamentals, IP addressing, and network security.
                  </p>
                </Card>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
