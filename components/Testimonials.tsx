import { useEffect, useState } from 'react';

const testimonials = [
  {
    quote: 'This society helped me land my dream job!',
    name: 'Alice',
  },
  {
    quote: 'Great community and amazing events.',
    name: 'Bob',
  },
  {
    quote: 'The mock interviews were super helpful.',
    name: 'Charlie',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[index];

  return (
    <div className="bg-white py-16" id="testimonials">
      <div className="max-w-xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <div className="relative">
          <p className="text-xl italic">"{t.quote}"</p>
          <p className="mt-4 font-semibold">- {t.name}</p>
        </div>
      </div>
    </div>
  );
}
