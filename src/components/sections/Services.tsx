import { Building2, Sparkles, Droplets, Eraser } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

const services = [
  {
    title: 'Dealership Services',
    description: 'High-volume lot washing, frontline readiness, and inventory maintenance designed for fast-paced dealerships.',
    icon: Building2,
  },
  {
    title: 'Detailing',
    description: 'Comprehensive interior and exterior detailing that restores your vehicle to a flawless, showroom condition.',
    icon: Sparkles,
  },
  {
    title: 'Pressure Washing',
    description: 'Heavy-duty cleaning for fleets, commercial vehicles, and automotive facilities to remove tough grime and grease.',
    icon: Droplets,
  },
  {
    title: 'Wrap & Decal Removal',
    description: 'Safe, professional de-identification and removal of commercial wraps, graphics, and decals without damaging paint.',
    icon: Eraser,
  },
];

export function Services() {
  return (
    <Section id="services" dark>
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center gap-2 text-brand-red font-semibold tracking-wider text-sm uppercase mb-4">
          <span className="w-8 h-px bg-brand-red"></span>
          Our Expertise
          <span className="w-8 h-px bg-brand-red"></span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Services</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          We provide a comprehensive suite of reconditioning services tailored for dealerships, businesses, and discerning vehicle owners.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col items-start text-left group">
            <div className="p-3 bg-brand-charcoal rounded-lg mb-6 group-hover:bg-brand-red/10 transition-colors">
              <service.icon className="w-8 h-8 text-brand-red" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-gray-400 leading-relaxed">
              {service.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
