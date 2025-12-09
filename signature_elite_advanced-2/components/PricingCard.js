
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
