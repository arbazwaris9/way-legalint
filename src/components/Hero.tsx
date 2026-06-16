import { Scale } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#1a2332] via-[#2a3f5f] to-[#1a2332] text-white py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37] rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4af37] rounded-full blur-[150px]" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <Scale className="w-20 h-20 text-[#d4af37] animate-scale-in" strokeWidth={1.5} />
          <h1 className="text-5xl md:text-7xl font-heading tracking-wider animate-fade-in-up">
            <span className="block">W.A.Y</span>
            <span className="block mt-2 text-[#d4af37]">LEGAL</span>
          </h1>
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent animate-fade-in animate-delay-300 opacity-0"></div>
          <p className="text-xl md:text-2xl font-light text-gray-300 max-w-3xl leading-relaxed animate-fade-in-up animate-delay-400 opacity-0">
            Three Generations of Legal Excellence
          </p>
          <p className="text-lg text-gray-400 max-w-2xl animate-fade-in-up animate-delay-500 opacity-0">
            Leading expertise in Criminal Litigation with 7+ years of dedicated service and exceptional results
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
    </section>
  );
}
