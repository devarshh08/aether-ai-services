import Navbar from '../components/Navbar'  
  
export default function Services() {  
  const services = [  
    'AI Influencers', 'AI Ad Promos', 'AI Website Builder', 'AI Chatbot',  
    'AI Data Analysis', 'AI CRM', 'AI Content Writing', 'AI Data Scraping and Cleaning'  
  ]  
  return <div>  
    <Navbar />  
    <main className="pt-24 px-4">  
      <div className="container mx-auto py-12">  
        <h1 className="text-5xl font-bold text-center mb-12">Our Services</h1>  
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">  
          {services.map(s => <div key={s} className="card"><h3 className="text-xl font-semibold">{s}</h3></div>)}  
        </div>  
      </div>  
    </main>  
  </div>  
}  
