
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
