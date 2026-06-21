export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
      <p className="text-[#58a6ff] font-mono text-sm mb-4">👋 Hello, World! I'm</p>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
        Surafel
      </h1>
      <h2 className="text-xl md:text-2xl text-gray-400 mb-8">
        Software Engineering Student &amp; Full-Stack Developer
      </h2>
      <p className="max-w-xl text-gray-400 leading-relaxed mb-10">
        I build clean, scalable web applications using{' '}
        <span className="text-[#58a6ff]">React</span>,{' '}
        <span className="text-green-400">Node.js</span>, and{' '}
        <span className="text-yellow-400">Python</span>.
        Passionate about solving real-world problems through code.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <a href="#projects"
           className="px-6 py-3 bg-[#58a6ff] text-black font-semibold rounded-lg hover:bg-[#79bcff] transition-colors">
          View Projects
        </a>
        <a href="#contact"
           className="px-6 py-3 border border-[#58a6ff] text-[#58a6ff] font-semibold rounded-lg hover:bg-[#58a6ff]/10 transition-colors">
          Contact Me
        </a>
      </div>
    </section>
  )
}
