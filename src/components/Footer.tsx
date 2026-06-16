import { Scale } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a2332] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          <Scale className="w-12 h-12 text-[#d4af37] animate-shimmer" strokeWidth={1.5} />
          <div>
            <h3 className="text-2xl font-heading tracking-wider mb-2">W.A.Y LEGAL</h3>
            <p className="text-gray-400 text-sm">Three Generations of Legal Excellence</p>
          </div>
          <div className="h-px w-64 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
          <div className="text-gray-400 text-sm">
            <p>3rd Floor, Yashwant Chambers, Kalaghoda, Fort, Mumbai - 400001</p>
            <p className="mt-2">701, Damac Business Tower, Marasi Drive, Business Bay, Dubai, UAE</p>
            <p className="mt-2">022-22644576 | +91 9833499354 | +91 9021749766</p>
          </div>
          <div className="text-gray-500 text-xs mt-8">
            <p>&copy; {new Date().getFullYear()} WAY Legal. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
