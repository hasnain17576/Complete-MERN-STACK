const About = () => {
  const education = [
    {
      level: 'Matric',
      school: 'Hassan Public High School Sandhilanawali',
      status: 'Completed'
    },
    {
      level: 'FSc Medical ',
      school: 'Punjab group of colleges ',
      status: 'Completed'
    },
    {
      level: 'BS Software Engineering (BSSE)',
      school: 'COMSATS University Islamabad',
      status: 'Currently - 3rd Semester'
    }
  ];

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'hasnainwasli17@gmail.com',
      link: 'mailto:hasnainwasli17@gmail.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Phone',
      value: '+92 312 6430166',
      link: 'tel:+923126430166'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-primary-500">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get to know more about my background, education, and passion for software development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Personal Info */}
          <div className="space-y-8">
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Personal Information
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-primary-500 mb-2">Full Name</h4>
                  <p className="text-gray-600 dark:text-gray-300">Muhammad Hasnain</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-primary-500 mb-2">Profession</h4>
                  <p className="text-gray-600 dark:text-gray-300">MERN Stack Developer</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-primary-500 mb-2">About Me</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I am a passionate MERN Stack Developer with a strong foundation in modern web technologies. 
                    Currently pursuing my Bachelor's in Software Engineering at COMSATS University, I am dedicated 
                    to creating innovative and efficient web solutions. My journey in software development is driven 
                    by curiosity and a desire to solve real-world problems through technology.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-500">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                      <a
                        href={info.link}
                        className="text-gray-900 dark:text-white hover:text-primary-500 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Education */}
          <div className="space-y-8">
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative">
                    {/* Timeline Line */}
                    {index < education.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-16 bg-primary-200 dark:bg-primary-800"></div>
                    )}
                    
                    <div className="flex items-start space-x-4">
                      {/* Timeline Dot */}
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-grow">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {edu.level}
                        </h4>
                        <p className="text-primary-500 font-medium mb-2">{edu.school}</p>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          edu.status === 'Completed' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Preview */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Key Skills
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {['React', 'Node.js', 'MongoDB', 'JavaScript', 'Express', 'Git'].map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <a
                  href="#skills"
                  className="text-primary-500 hover:text-primary-600 font-medium transition-colors duration-200"
                >
                  View All Skills →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
