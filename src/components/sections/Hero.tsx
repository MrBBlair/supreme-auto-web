import { BUSINESS } from '../../business';
import { Button, cn } from '../ui/Button';
import logoImg from '../../assets/SAR_Logo.png';

export function Hero() {
  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative flex min-h-screen flex-col items-center justify-center bg-carbon px-4 pb-16 pt-24 md:px-8 md:pb-24 overflow-hidden"
    >
      {/* Decorative Red Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-black via-brand-red to-brand-black" />
      
      {/* subtle radial glow behind text */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,32,32,0.08)_0%,transparent_50%)] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <img
          src={logoImg}
          alt="Supreme Automotive Reconditioning Logo"
          className="mx-auto mb-6 h-auto w-[27.324rem] max-w-[calc(100%-1rem)] sm:w-[36.432rem] md:mb-10 md:w-[45.54rem] lg:w-[54.648rem] drop-shadow-2xl"
        />

        <h1 className="mb-5 text-2xl font-bold tracking-tight text-white leading-tight sm:text-3xl md:mb-6 md:text-5xl lg:text-6xl">
          <span className="block">Automotive Reconditioning</span>
          <span className="block text-brand-red whitespace-nowrap">Done Right</span>
        </h1>
        
        <p className="mx-auto mb-8 max-w-xl text-sm text-gray-300 leading-relaxed sm:text-base md:mb-10 md:max-w-2xl md:text-lg">
          Professional detailing, dealership services, pressure washing, and wrap & decal removal across Central Florida. Premium results you can trust.
        </p>
        
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <a
            href={BUSINESS.phoneTel}
            className={cn(
              'touch-manipulation inline-flex min-h-12 w-full items-center justify-center rounded-md bg-brand-red px-6 py-3 text-base font-semibold text-white shadow-lg shadow-brand-red/20 transition-colors hover:bg-red-700 active:bg-red-800 sm:w-auto sm:px-8 sm:text-lg'
            )}
          >
            Call {BUSINESS.phoneDisplay}
          </a>
          <Button 
            variant="outline" 
            size="lg" 
            type="button"
            className="touch-manipulation w-full min-h-12 py-3 text-base sm:w-auto sm:text-lg"
            onClick={scrollToContact}
          >
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
