import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App