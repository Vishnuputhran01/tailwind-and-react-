import React, { useState, useEffect, useRef } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      icon: '☁️',
      title: 'CloudSync Dashboard',
      desc: 'Real-time cloud resource monitoring dashboard with interactive charts, alerts, and multi-tenant support.',
      tags: ['React', 'Azure', 'D3.js', 'Node.js'],
      status: 'Live',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '💻',
      title: 'CodeCollab',
      desc: 'Collaborative code editor with real-time sync, syntax highlighting, and AI-powered suggestions.',
      tags: ['React', 'WebSocket', 'Monaco Editor', 'Express'],
      status: 'Live',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🎨',
      title: 'DevPortfolio Generator',
      desc: 'Automated portfolio generator that fetches GitHub data and creates a stunning personal site.',
      tags: ['Next.js', 'GitHub API', 'Tailwind CSS', 'Vercel'],
      status: 'Live',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: '🤖',
      title: 'StudyBuddy AI',
      desc: 'AI study companion that generates flashcards, quizzes, and summaries from lecture notes.',
      tags: ['Python', 'Azure AI', 'React', 'FastAPI'],
      status: 'In Progress',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: '📱',
      title: 'EventHub',
      desc: 'Campus event management platform with RSVP tracking, QR check-ins, and analytics.',
      tags: ['React', 'Firebase', 'Node.js', 'Tailwind CSS'],
      status: 'In Progress',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: '📚',
      title: 'MicroLearn',
      desc: 'Bite-sized learning platform with interactive coding challenges and community forums.',
      tags: ['React', 'MongoDB', 'Express', 'Docker'],
      status: 'Coming Soon',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Live': return 'bg-green-500';
      case 'In Progress': return 'bg-yellow-500';
      case 'Coming Soon': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-28 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Real-world applications showcasing modern web technologies and innovative solutions.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </span>
                  <span className={`px-3 py-1 ${getStatusColor(project.status)} text-white text-xs font-semibold rounded-full`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center group">
                  Learn more 
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;