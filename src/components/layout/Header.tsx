import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BUSINESS } from '../../business';
import { cn } from '../ui/Button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Service Area', href: '#service-area' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-brand-black/90 backdrop-blur-md border-gray-800 py-2.5 shadow-md'
          : 'bg-transparent border-transparent py-4'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8 flex items-center justify-between gap-3">
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="touch-manipulation min-w-0 shrink text-left"
        >
          <span className="block text-[0.7rem] font-bold uppercase leading-tight tracking-wide text-white sm:text-xs md:text-base md:tracking-tight">
            <span className="text-white">Supreme </span>
            <span className="text-brand-red">Automotive Reconditioning</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="touch-manipulation whitespace-nowrap text-sm font-medium text-gray-300 transition-colors hover:text-brand-red active:text-white"
            >
              {link.name}
            </a>
          ))}
          <a
            href={BUSINESS.phoneTel}
            className="touch-manipulation shrink-0 rounded-md bg-brand-red px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-red-700 active:bg-red-800"
          >
            {BUSINESS.phoneDisplay}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="touch-manipulation min-h-11 min-w-11 shrink-0 p-2 text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-black border-b border-gray-800 shadow-xl">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="touch-manipulation text-base font-medium text-gray-300 transition-colors hover:text-brand-red active:text-white"
              >
                {link.name}
              </a>
            ))}
            <a
              href={BUSINESS.phoneTel}
              className="mt-2 touch-manipulation rounded-md bg-brand-red px-5 py-3 text-center text-base font-bold text-white transition-colors hover:bg-red-700 active:bg-red-800"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
