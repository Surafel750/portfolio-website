export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
      <div className="w-16 h-1 bg-[#58a6ff] mb-8 rounded mx-auto"/>
      <p className="text-gray-400 mb-10 leading-relaxed">
        I'm currently open to internship opportunities and collaborations.
        Whether you have a project idea, a question, or just want to connect — my inbox is always open!
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <a href="mailto:YOUR_EMAIL@gmail.com"
           className="px-8 py-3 bg-[#58a6ff] text-black font-semibold rounded-lg hover:bg-[#79bcff] transition-colors">
          Say Hello 👋
        </a>
        <a href="https://linkedin.com/in/YOUR_LINKEDIN"
           className="px-8 py-3 border border-[#30363d] text-gray-300 rounded-lg hover:border-[#58a6ff] transition-colors">
          LinkedIn
        </a>
      </div>
    </section>
  )
}
