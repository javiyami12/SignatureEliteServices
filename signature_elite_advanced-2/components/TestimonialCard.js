
export default function TestimonialCard({name, text, stars}){
  return (
    <div className="bg-neutral-800 p-6 rounded-xl shadow-lg w-full max-w-md mx-auto">
      <div className="text-yellow-400 text-2xl mb-2">{"★".repeat(stars)}{"☆".repeat(5-stars)}</div>
      <p className="text-neutral-300 italic mb-4">"{text}"</p>
      <h3 className="text-lg font-bold text-neutral-100">- {name}</h3>
    </div>
  );
}
