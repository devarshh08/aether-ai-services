import Navbar from '../components/Navbar'  
  
export default function Contact() {  
  return <div>  
    <Navbar />  
    <main className="pt-24 px-4">  
      <div className="container mx-auto py-12 max-w-2xl">  
        <h1 className="text-5xl font-bold text-center mb-8">Get in Touch</h1>  
        <div className="card text-center">  
          <h2 className="text-2xl mb-6">Contact Us</h2>  
          <p className="mb-4">Email: contactus.aether.ai@gmail.com</p>  
          <a href="https://forms.gle/LSmjWZSjJDKduL9W9" target="_blank" className="btn-primary inline-block">Fill Contact Form</a>  
        </div>  
      </div>  
    </main>  
  </div>  
}  
