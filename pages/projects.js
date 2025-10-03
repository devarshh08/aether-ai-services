import Navbar from '../components/Navbar'  
  
export default function Projects() {  
  const projects = [  
    { name: 'AI Influencer', url: 'https://www.instagram.com/sweetvanillasyd/' },  
    { name: 'AI Data Scraping', url: 'http://screddit.streamlit.app/' },  
    { name: 'Mental Health Chatbot', url: 'https://mental-wellness-buddy.streamlit.app/' },  
    { name: 'AI Script and Blog Writer', url: '#' }  
  ]  
  return <div>  
    <Navbar />  
    <main className="pt-24 px-4">  
      <div className="container mx-auto py-12">  
        <h1 className="text-5xl font-bold text-center mb-12">Our Projects</h1>  
        <div className="grid md:grid-cols-2 gap-8">  
          {projects.map(p => <div key={p.name} className="card"><h3 className="text-2xl font-bold mb-4">{p.name}</h3><a href={p.url} target="_blank" className="btn-primary inline-block">View Project</a></div>)}  
        </div>  
      </div>  
    </main>  
  </div>  
}  
