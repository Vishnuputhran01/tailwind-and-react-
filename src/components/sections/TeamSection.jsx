import React, { useState, useEffect, useRef } from 'react';

const TeamSection = () => {
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

  const team = [
    {
      name: 'Arjun Mehta',
      role: 'Team Lead',
      skills: ['React', 'Node.js', 'Azure'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Priya Sharma',
      role: 'Frontend Developer',
      skills: ['React', 'Tailwind CSS', 'Figma'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Rahul Verma',
      role: 'Backend Developer',
      skills: ['Node.js', 'Express', 'MongoDB'],
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'Sneha Patel',
      role: 'AI/ML Engineer',
      skills: ['Python', 'TensorFlow', 'Azure AI'],
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Karan Singh',
      role: 'DevOps Engineer',
      skills: ['Docker', 'Azure DevOps', 'CI/CD'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'Ananya Gupta',
      role: 'UI/UX Designer',
      skills: ['Figma', 'Adobe XD', 'CSS'],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="team" ref={sectionRef} className="py-28 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      
      <div className="container mx-auto px-6">
        
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">People</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Talented developers, designers, and engineers driving innovation forward.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className={`group relative bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="p-8 text-center">
                <div className={`w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-r ${member.color} p-1 transform group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                    <span className="text-3xl">👤</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">{member.name}</h3>
                <p className={`text-transparent bg-clip-text bg-gradient-to-r ${member.color} font-medium mb-4`}>{member.role}</p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <button className="mt-6 px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-600 rounded-lg transition-all duration-300">
                  View profile →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;