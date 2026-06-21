const projects = [
  {
    title: 'Node REST API',
    desc: 'A production-ready REST API with JWT authentication, CRUD operations, and MongoDB.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/Surafel750/node-rest-api',
    demo: '#',
  },
  {
    title: 'Python Automation',
    desc: 'A collection of Python scripts for automating everyday tasks — file management, web scraping, data processing.',
    tech: ['Python', 'BeautifulSoup', 'Pandas'],
    github: 'https://github.com/Surafel750/python-projects',
    demo: '#',
  },
  {
    title: 'Portfolio Website',
    desc: 'This very website — responsive, dark-themed portfolio built with React and Tailwind CSS.',
    tech: ['React', 'Tailwind', 'Vite'],
    github: 'https://github.com/Surafel750/portfolio-website',
    demo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
      <div className="w-16 h-1 bg-[#58a6ff] mb-10 rounded"/>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(({ title, desc, tech, github, demo }) => (
          <div key={title}
               className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 flex flex-col justify-between hover:border-[#58a6ff]/50 transition-all hover:-translate-y-1">
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {tech.map(t => (
                  <span key={t} className="px-2 py-0.5 bg-[#58a6ff]/10 text-[#58a6ff] rounded text-xs">{t}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 text-sm">
              <a href={github} className="text-gray-400 hover:text-white transition-colors">GitHub →</a>
              <a href={demo} className="text-gray-400 hover:text-[#58a6ff] transition-colors">Live Demo →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
