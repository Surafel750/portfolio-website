import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="text-center py-6 text-sm text-gray-500">
        <p>Built with ❤️ by Surafel — © {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
