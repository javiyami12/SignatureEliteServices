
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
