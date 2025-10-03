import Navbar from '../components/Navbar'

export default function Contact() {
  return (
    <div>
      <Navbar />
      <main className="pt-32 px-4">
        <div className="container mx-auto py-12 max-w-4xl">
          <div className="text-center mb-12">
            <div className="section-badge">CONTACT US</div>
            <h1 className="hero-title">Ready to Automate Smarter?</h1>
            <p className="text-xl text-gray-400 mb-8">Let's Build Together. Schedule a Call and Begin Automating</p>
          </div>
          <div className="glass p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-400 mb-6 text-lg"><strong>Email:</strong> contactus.aether.ai@gmail.com</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://forms.gle/LSmjWZSjJDKduL9W9" target="_blank" className="btn-primary">Book A Free Call</a>
              <a href="/services" className="btn-secondary">View Our Services</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}  
