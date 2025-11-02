import { useState, useEffect } from "react";
import { icon } from "../../assets/Icons";

export default function Navbar() {
  const [state, setState] = useState(false);

  // Navegación actualizada con mejores nombres
  const navigation = [
    { title: "Inicio", path: "/" },
    { title: "Galería", path: "/Gallery" },
 
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300 ${
        state ? "shadow-xl" : "shadow-sm"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo mejorado */}
          <div className="flex-shrink-0">
            <a aria-label="Return to home" href="/" className="flex items-center space-x-2 group">
             <div className="w-50 h-50">
                <img alt="Logo Pacifico37" src={icon.pacifico37} />
             </div>
            </a>
          </div>

          {/* Navegación desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item, idx) => (
                <a
                  key={idx}
                  href={item.path}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                  {item.title}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </a>
              ))}
            </div>
          </div>

         

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setState(!state)}
              className="menu-btn inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {state ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          state 
            ? "max-h-96 opacity-100" 
            : "max-h-0 opacity-0 overflow-hidden"
        }`}>
          <div className="px-2 pt-2 pb-6 space-y-1 bg-white border-t border-gray-100">
            {navigation.map((item, idx) => (
              <a
                key={idx}
                href={item.path}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 block px-4 py-3 text-base font-medium rounded-lg transition-colors"
                onClick={() => setState(false)}
              >
                {item.title}
              </a>
            ))}
        
          </div>
        </div>
      </div>
    </nav>
  );
}