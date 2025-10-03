import Navbar from '../components/Navbar'  
  
export default function Home() {  
  return <div>  
    <Navbar />  
    <main className="pt-24 px-4">  
      <div className="container mx-auto text-center py-20">  
        <h1 className="text-6xl font-bold mb-6">Welcome to Aether AI</h1>  
        <p className="text-xl mb-8">Transform Your Business with AI Solutions</p>  
        <div className="flex gap-4 justify-center">  
          <a href="/services" className="btn-primary">Our Services</a>  
          <a href="/contact" className="btn-primary">Get Started</a>  
        </div>  
      </div>  
    </main>  
  </div>  
}  
