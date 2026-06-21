export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
      <div className="w-16 h-1 bg-[#58a6ff] mb-10 rounded"/>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gray-400 leading-relaxed mb-4">
            I'm a Software Engineering student based in{' '}
            <span className="text-white">Addis Ababa, Ethiopia 🇪🇹</span>.
            I love building full-stack web applications that solve real problems.
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            Currently focused on mastering React, Node.js, and system design principles.
            I enjoy writing clean, maintainable code and learning new technologies.
          </p>
          <p className="text-gray-400 leading-relaxed">
            When I'm not coding, I'm on LeetCode sharpening my problem-solving skills
            or contributing to open-source projects.
          </p>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 font-mono text-sm">
          <p className="text-gray-500 mb-2">// about.json</p>
          <p><span className="text-blue-400">name</span>: <span className="text-green-400">"Surafel"</span></p>
          <p><span className="text-blue-400">role</span>: <span className="text-green-400">"SE Student"</span></p>
          <p><span className="text-blue-400">location</span>: <span className="text-green-400">"Addis Ababa"</span></p>
          <p><span className="text-blue-400">available</span>: <span className="text-yellow-400">true</span></p>
        </div>
      </div>
    </section>
  )
}
