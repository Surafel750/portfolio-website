const skills = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Vite', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'Django', 'REST APIs'] },
  { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'Firebase'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'Docker', 'VS Code', 'Linux'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-2">Tech Stack</h2>
      <div className="w-16 h-1 bg-[#58a6ff] mb-10 rounded"/>
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map(({ category, items }) => (
          <div key={category}
               className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 hover:border-[#58a6ff]/50 transition-colors">
            <h3 className="text-[#58a6ff] font-semibold mb-4 font-mono">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map(item => (
                <span key={item}
                      className="px-3 py-1 bg-[#0d1117] border border-[#30363d] rounded-full text-xs text-gray-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
