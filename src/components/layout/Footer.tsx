import logoImg from '../../assets/SAR_Logo.png';
import poweredByTechephiImg from '../../assets/powered-by-techephi.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-brand-black py-12">
      {/* Logo | divider | tagline | Powered by — one row (wraps only on very narrow screens) */}
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-5 px-4 sm:gap-x-5 md:justify-between md:gap-x-8 md:px-8">
        <img
          src={logoImg}
          alt="Supreme Automotive Reconditioning"
          className="h-[8.294rem] w-auto shrink-0 opacity-90"
        />

        <span
          className="hidden h-[5.184rem] w-px shrink-0 bg-gray-600 sm:block md:h-[6.048rem]"
          aria-hidden
        />

        <p className="max-w-md min-w-[12rem] shrink text-center text-sm text-gray-400 sm:flex-1 sm:text-left md:max-w-xl">
          Professional detailing, dealership services, pressure washing, and
          wrap/decal removal across Central Florida.
        </p>

        <a
          href="https://techephi.com"
          target="_blank"
          rel="noopener noreferrer"
          className="emblem-glisten inline-block shrink-0 opacity-90 transition-opacity hover:opacity-100"
          aria-label="Powered by Tech ePhi — visit techephi.com"
        >
          <img
            src={poweredByTechephiImg}
            alt=""
            className="block h-[6.487rem] w-auto object-contain sm:h-[7.207rem]"
            draggable={false}
          />
        </a>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-gray-800 px-4 pt-8 text-center md:px-8">
        <p className="text-center text-sm text-gray-500">
          &copy; {currentYear} Supreme Automotive Reconditioning. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
