import os, zipfile, textwrap, json

root="/mnt/data/signature_elite_advanced"
os.makedirs(root, exist_ok=True)

def write(path, content):
    full=os.path.join(root,path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full,"w") as f: f.write(textwrap.dedent(content))

# Create public folder for assets
os.makedirs(os.path.join(root,"public"), exist_ok=True)

# placeholder logo
with open(os.path.join(root,"public/logo_white.png"),"wb") as f:
    f.write(b"")

# Basic config files
write("package.json", json.dumps({
  "name":"signature-elite-advanced",
  "version":"1.0.0",
  "private":True,
  "scripts":{"dev":"next dev","build":"next build","start":"next start"},
  "dependencies":{
      "next":"14.0.0",
      "react":"18.2.0",
      "react-dom":"18.2.0",
      "framer-motion":"10.16.4"
  },
  "devDependencies":{
      "tailwindcss":"3.3.2",
      "postcss":"8.4.26",
      "autoprefixer":"10.4.14"
  }
}, indent=2))

write("tailwind.config.js", """
module.exports = {
  content:["./pages/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],
  theme:{
    extend:{
      colors:{primary:"#ffffff"}
    }
  },
  plugins:[],
}
""")

write("postcss.config.js", """
module.exports={plugins:{tailwindcss:{},autoprefixer:{}}}
""")

write("styles/globals.css", """
@tailwind base;
@tailwind components;
@tailwind utilities;
body { @apply bg-neutral-900 text-neutral-100 font-sans; }
""")

# Components
write("components/NavBar.js", """
export default function NavBar(){
  return (
    <nav className="w-full bg-neutral-950/80 backdrop-blur sticky top-0 z-50 px-10 py-5 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img src="/logo_white.png" className="w-12"/>
        <span className="font-bold text-xl tracking-wide">Signature Elite</span>
      </div>
      <div className="flex gap-8 text-neutral-300 text-lg flex-wrap">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/pricing">Pricing</a>
        <a href="/testimonials">Testimonials</a>
        <a href="/faq">FAQ</a>
        <a href="/demo" className="text-primary font-bold">Book Demo</a>
      </div>
    </nav>
  );
}
""")

write("components/Footer.js", """
export default function Footer(){
  return (
    <footer className="text-center py-10 text-neutral-500 mt-20">
      © 2025 Signature Elite Services LLC • All Rights Reserved
    </footer>
  )
}
""")

write("components/TestimonialCard.js", """
export default function TestimonialCard({name, text, stars}){
  return (
    <div className="bg-neutral-800 p-6 rounded-xl shadow-lg w-full max-w-md mx-auto">
      <div className="text-yellow-400 text-2xl mb-2">{"★".repeat(stars)}{"☆".repeat(5-stars)}</div>
      <p className="text-neutral-300 italic mb-4">"{text}"</p>
      <h3 className="text-lg font-bold text-neutral-100">- {name}</h3>
    </div>
  );
}
""")

write("components/PricingCard.js", """
export default function PricingCard({title, price, features, popular}){
  return (
    <div className={"p-6 rounded-xl shadow-lg bg-neutral-800 border " + (popular ? "border-yellow-500" : "border-neutral-700")}>
      {popular && <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm mb-3 inline-block">Most Popular</div>}
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-primary text-3xl font-extrabold mb-4">{price}</p>
      <ul className="text-neutral-300 space-y-2 mb-6">
        {features.map((f,i)=> <li key={i}>• {f}</li>)}
      </ul>
      <a href="/demo" className="block text-center bg-primary text-black font-bold py-2 rounded-lg">Get Started</a>
    </div>
  );
}
""")

write("pages/_app.js", """
import '@/styles/globals.css'
export default function App({Component,pageProps}){return <Component {...pageProps} />}
""")

write("pages/index.js", """
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import TestimonialCard from '@/components/TestimonialCard'
import { motion } from 'framer-motion'
import Head from 'next/head'

export default function Home(){
  return (
    <div>
      <Head><title>Signature Elite Services LLC</title></Head>
      <NavBar/>

      <header className="text-center py-40 bg-gradient-to-br from-neutral-800 to-neutral-700">
        <motion.h1 
          initial={{opacity:0, y:-20}} 
          animate={{opacity:1, y:0}} 
          className="text-6xl font-extrabold"
        >
          Premium Live Receptionist Services
        </motion.h1>
        <p className="mt-4 text-xl text-neutral-300">Serving your clients with excellence—24/7</p>
      </header>

      <section className="max-w-6xl mx-auto p-10">
        <h2 className="text-4xl font-bold mb-10 text-center">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <TestimonialCard name="Sarah L." text="Absolutely flawless service!" stars={5}/>
          <TestimonialCard name="Michael P." text="Professional, reliable, friendly receptionists." stars={4}/>
          <TestimonialCard name="Jessica T." text="Our customers love the service!" stars={5}/>
        </div>
      </section>

      <Footer/>
    </div>
  )
}
""")

# Minimal placeholder pages
for page in ["services","pricing","testimonials","faq","demo"]:
    write(f"pages/{page}.js", f"""
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function {page.title()}() {{
  return (
    <div>
      <NavBar/>
      <div className='p-20 text-center text-3xl'>This page is under full advanced construction.</div>
      <Footer/>
    </div>
  )
}}
""")

# Create zip
zip_path="/mnt/data/signature_elite_advanced.zip"
with zipfile.ZipFile(zip_path,"w") as z:
    for base,_,fs in os.walk(root):
        for file in fs:
            full=os.path.join(base,file)
            rel=os.path.relpath(full, root)
            z.write(full, rel)

zip_path
