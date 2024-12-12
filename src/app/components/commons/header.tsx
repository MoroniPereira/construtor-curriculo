import { SquareMousePointer } from 'lucide-react';

export function Header() {
  return (
    <header 
      className="bg-white/80 backdrop-blur-md top-0 z-40 border-b border-gray-100 
      w-full px-4 py-2 flex items-center justify-between sm:px-8 sm:py-4"
    >
      <div className="flex items-center gap-3">
        <p className="bg-blue-600 rounded-md px-2 py-2">
          <SquareMousePointer size={20} className="text-white"/>
        </p>
        <span className="text-xl font-medium text-blue-600 font-bold">Construtor de currículos</span>
      </div>
    </header>
  );
}
