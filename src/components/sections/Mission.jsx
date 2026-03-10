import React, { useState, useEffect, useRef } from 'react';

const Mission = () => {
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

  const missions = [
    {
      number: '01',
      title: 'Innovation First',
      desc: 'Pushing boundaries with cutting-edge technologies, exploring new paradigms in web development and cloud computing.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      title: 'Full-Stack Mastery',
      desc: 'Mastering modern frameworks like React, Next.js, and full-stack development with hands-on project experience.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '03',
      title: 'Hackathons & Events',
      desc: 'Regular hackathons, coding competitions, and tech talks to sharpen skills and foster team collaboration.',
      color: 'from-orange-500 to-red-500'
    },
    {
      number: '04',
      title: 'Modern Tech Stack',
      desc: 'React, Azure Cloud, AI/ML, Docker — working with the same tools used by top tech companies worldwide.',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const techStack = [
    '⚛️React', '🟢Node.js', '☁️Azure', '🐍Python', '🐳Docker',
    '🔷TypeScript', '▲Next.js', '🍃MongoDB', '🧠TensorFlow', '🎨Tailwind CSS',
    '🔀Git', '🔥Firebase', '◆GraphQL', '💻VS Code', '🎯Figma', '🚀Express'
  ];

  return (
    <section id="mission" ref={sectionRef} className="py-28 bg-white dark:bg-gray-900 relative overflow-hidden">
      
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Building the Future,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Together
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            The MS Developer Network empowers students to become industry-ready developers through real-world projects, 
            peer learning, and cutting-edge technology exploration.
          </p>
        </div>

        {/* Mission cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
          {missions.map((mission, index) => (
            <div
              key={index}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${mission.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              <span className="text-5xl font-bold text-gray-200 dark:text-gray-700 mb-4 block">{mission.number}</span>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                {mission.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {mission.desc}
              </p>
              
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${mission.color} rounded-b-2xl transition-all duration-500 ${isVisible ? 'w-full' : 'w-0'}`}></div>
            </div>
          ))}
        </div>

        {/* Tech stack marquee */}
        <div className={`mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Tech We Love</h3>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...techStack, ...techStack].map((tech, index) => (
                <span
                  key={index}
                  className="inline-block mx-4 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 font-medium hover:scale-110 transition-transform duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;