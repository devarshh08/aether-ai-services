import Link from 'next/link'  
  
export default function Navbar() {  
  const links = [{ href: '/', label: 'Home' }, { href: '/services', label: 'Services' }, { href: '/projects', label: 'Projects' }, { href: '/contact', label: 'Contact' }]  
  return (  
    <nav className="glass fixed w-full top-0 z-50 p-4">  
      <div className="container mx-auto flex justify-between items-center">  
        <Link href="/" className="text-2xl font-bold">Aether AI</Link>  
        <div className="flex gap-6">  
          {links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}  
        </div>  
      </div>  
    </nav>  
  )  
} 
