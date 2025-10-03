import Navbar from '../components/Navbar'  
  
export default function Home() {  
  const benefits = [{title:'Real-Time Intelligence',desc:'Access accurate data'},{title:'Measurable Impact',desc:'Track performance and growth'},{title:'Seamless Integration',desc:'Connect tools and workflows'}]  
  return <div><Navbar /><main className=\" pt-32 "px-4\><div className=\container" mx-auto text-center "max-w-5xl\><div className=\section-badge\>AI AUTOMATION PARTNER</div><h1 className=\hero-title\>Automate Smarter. Grow Faster. With AI.</h1><p className=\text-xl" mb-12 "text-gray-400\>AI Automation for Modern Businesses</p><div className=\flex" gap-4 "justify-center\><a href=\/contact\ className=\btn-primary\>Book A Call</a><a href=\/services\ className=\btn-secondary\>View Services</a></div></div><div className=\container" mx-auto py-24 "max-w-6xl\><div className=\text-center" "mb-16\><h2 className=\section-title\>Why Choose Us?</h2></div><div className=\grid" md:grid-cols-3 "gap-8\>{benefits.map(b=><div key={b.title} className=\card" "text-center\><h3 className=\text-2xl" font-bold "mb-4\>{b.title}</h3><p className=\text-gray-400\>{b.desc}</p></div>)}</div></div></main></div>  
}  
