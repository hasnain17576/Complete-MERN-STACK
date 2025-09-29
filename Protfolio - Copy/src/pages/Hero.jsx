import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'MERN Stack Developer';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(fullText.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting]);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Hi, I'm{' '}
                <span className="text-primary-500">Muhammad Hasnain</span>
              </h1>
              
              <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6 h-12 flex items-center justify-center lg:justify-start">
                <span className="typing-animation">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>

              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                Passionate about creating innovative web solutions with modern technologies. 
                Currently pursuing BS Software Engineering at COMSATS University.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={scrollToContact}
                  className="btn-primary"
                >
                  Get In Touch
                </button>
                <a
                  href="#projects"
                  className="btn-secondary"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Picture */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                {/* Profile Picture Container */}
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary-500 shadow-2xl animate-fade-in">
                  <img
                    src="/assets/profile.jpg"
                    alt="Muhammad Hasnain"
                    className="w-full h-full object-cover"
                  />
                  {/* Fallback if image doesn't exist */}
                  <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-6xl font-bold" style={{ display: 'none' }}>
                    MH
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white text-2xl animate-bounce">
                  💻
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl animate-bounce" style={{ animationDelay: '1s' }}>
                  ⚡
                </div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl animate-bounce" style={{ animationDelay: '2s' }}>
                  🚀
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
