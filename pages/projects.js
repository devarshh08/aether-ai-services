import Navbar from '../components/Navbar'

export default function Projects() {
  const projects = [
    {
      name:'AI Influencer',
      url:'https://www.instagram.com/sweetvanillasyd/',
      metric1:'70%',
      label1:'increase in engagement',
      metric2:'45%',
      label2:'boost in followers'
    },
    {
      name:'AI Data Scraping',
      url:'http://screddit.streamlit.app/',
      metric1:'60%',
      label1:'faster data collection',
      metric2:'85%',
      label2:'accuracy improvement'
    },
    {
      name:'Mental Health Chatbot',
      url:'https://mental-wellness-buddy.streamlit.app/',
      metric1:'90%',
      label1:'user satisfaction',
      metric2:'50%',
      label2:'response time reduction'
    },
    {
      name:'AI Script and Blog Writer',
      url:'#',
      metric1:'3x',
      label1:'content output',
      metric2:'40%',
      label2:'cost savings'
    }
  ]
  
  return (
    <div>
      <Navbar />
      <main className="pt-32 px-4">
        <div className="container mx-auto py-12 max-w-6xl">
          <div className="text-center mb-16">
            <div className="section-badge">SUCCESS STORIES</div>
            <h1 className="section-title">Trusted Projects</h1>
            <p className="text-gray-400">Real results from our AI automation solutions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map(p => (
              <div key={p.name} className="card">
                <h3 className="text-2xl font-bold mb-4">{p.name}</h3>
                <div className="flex gap-8 mb-6">
                  <div>
                    <div className="text-3xl font-bold text-gradient">{p.metric1}</div>
                    <div className="text-gray-400 text-sm">{p.label1}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gradient">{p.metric2}</div>
                    <div className="text-gray-400 text-sm">{p.label2}</div>
                  </div>
                </div>
                <a href={p.url} target="_blank" className="btn-primary">View Project</a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}  
