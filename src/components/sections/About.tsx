import { Section } from '../ui/Section';

export function About() {
  return (
    <Section id="about" containerClass="max-w-4xl text-center">
      <div className="inline-flex items-center justify-center gap-2 text-brand-red font-semibold tracking-wider text-sm uppercase mb-4">
        <span className="w-8 h-px bg-brand-red"></span>
        About Us
        <span className="w-8 h-px bg-brand-red"></span>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
        Driven by Excellence. <br className="hidden md:block" />
        Defined by Results.
      </h2>
      
      <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed">
        <p>
          Founded and operated by <strong>Kevin Blair</strong>, Supreme Automotive Reconditioning is Central Florida's premier mobile automotive care solution. We bring unmatched professionalism, reliability, and precision to every vehicle we service.
        </p>
        <p>
          Whether you're a high-volume dealership needing lot washes and frontline readiness, a local business managing a fleet, or a vehicle owner wanting that showroom shine, our commitment to clean, high-quality results remains the same. We don't just wash cars—we recondition them.
        </p>
      </div>
    </Section>
  );
}
