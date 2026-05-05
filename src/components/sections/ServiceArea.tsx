import { MapPin, CheckCircle2 } from 'lucide-react';
import { Section } from '../ui/Section';

const areas = [
  'Orlando',
  'Tampa',
  'Deland',
  'Kissimmee',
  'Clermont',
  'Minneola',
  'Mount Dora',
  'Sanford',
  'Daytona Beach',
];

function AreaBadge({ area }: { area: string }) {
  return (
    <div className="flex shrink-0 items-center gap-2 rounded-full border border-gray-700 bg-brand-black px-4 py-2 text-sm font-medium text-gray-200">
      <MapPin className="h-4 w-4 shrink-0 text-brand-red" aria-hidden />
      {area}
    </div>
  );
}

function SurroundingBadge() {
  return (
    <div className="flex shrink-0 items-center gap-2 rounded-full border border-brand-red/30 bg-brand-red/10 px-4 py-2 text-sm font-medium text-brand-red">
      <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden />
      And Surrounding Areas
    </div>
  );
}

function MarqueeSegments() {
  const segment = (
    <>
      {areas.map((area) => (
        <AreaBadge key={area} area={area} />
      ))}
      <SurroundingBadge />
    </>
  );

  return (
    <>
      <div className="flex shrink-0 items-center gap-3">{segment}</div>
      <div className="marquee-half marquee-half--duplicate flex shrink-0 items-center gap-3">
        {areas.map((area) => (
          <AreaBadge key={`d-${area}`} area={area} />
        ))}
        <SurroundingBadge />
      </div>
    </>
  );
}

export function ServiceArea() {
  const listLabel = `${areas.join(', ')}, and surrounding areas`;

  return (
    <Section id="service-area" className="relative border-y border-gray-800">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <div className="mb-4 inline-flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-red">
            <span className="h-px w-8 bg-brand-red" />
            Coverage
          </div>
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Serving Central Florida & Beyond
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-gray-300 lg:mb-0">
            As a fully mobile operation, Supreme Automotive Reconditioning
            brings premium care directly to your dealership, business, or home.
            We proudly service a wide radius across Central Florida.
          </p>

          {/* mobile map */}
          <div className="relative mt-10 flex h-56 min-h-[260px] items-center justify-center overflow-hidden rounded-2xl border border-gray-800 bg-brand-black p-8 lg:hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')] bg-center opacity-20 [mask-image:radial-gradient(white,transparent_80%)]" />

            <div className="relative z-10 space-y-4 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-red/20">
                <MapPin className="h-8 w-8 text-brand-red" />
              </div>
              <div className="text-xl font-bold tracking-widest text-white">
                MOBILE SERVICE
              </div>
              <div className="text-sm text-gray-400">We Come To You</div>
            </div>
          </div>
        </div>

        {/* desktop map */}
        <div className="relative hidden min-h-[300px] flex-col rounded-2xl border border-gray-800 bg-brand-black lg:flex lg:min-h-[320px]">
          <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')] bg-center opacity-20 [mask-image:radial-gradient(white,transparent_80%)]" />

          <div className="relative z-10 flex flex-1 flex-col items-center justify-center space-y-4 p-8 text-center">
            <div className="mx-auto flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-brand-red/20">
              <MapPin className="h-8 w-8 text-brand-red" />
            </div>
            <div className="text-xl font-bold tracking-widest text-white">
              MOBILE SERVICE
            </div>
            <div className="text-sm text-gray-400">We Come To You</div>
          </div>
        </div>
      </div>

      <p className="sr-only">{`Service areas covered: ${listLabel}.`}</p>

      {/* full-bleed marquee */}
      <div className="relative left-1/2 z-10 mt-12 w-[100vw] -translate-x-1/2 border-y border-gray-800/90 bg-brand-black/60 py-5 backdrop-blur-[2px]">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-brand-charcoal to-transparent sm:w-14"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-brand-charcoal to-transparent sm:w-14"
          aria-hidden
        />

        <div className="overflow-hidden" aria-hidden>
          <div className="animate-area-marquee items-center gap-3 pr-6">
            <MarqueeSegments />
          </div>
        </div>
      </div>
    </Section>
  );
}
