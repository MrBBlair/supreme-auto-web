import { useState } from 'react';
import { Phone, Mail, User } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import {
  BUSINESS,
  SERVICE_LABELS,
  buildQuoteMailtoHref,
  buildQuoteSmsHref,
  type ServiceValue,
} from '../../business';

const EMAIL_SIMPLE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldClass =
  'w-full rounded-lg border border-gray-700 bg-brand-black px-4 py-[0.6875rem] text-base md:py-3 md:text-sm text-white transition-colors [-webkit-text-size-adjust:100%] focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [successVia, setSuccessVia] = useState<'sms' | 'email' | null>(
    null
  );

  const validateQuoteForm = (): boolean => {
    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.service.trim()
    ) {
      setStatus('error');
      setSuccessVia(null);
      return false;
    }

    if (
      formData.email.trim() &&
      !EMAIL_SIMPLE.test(formData.email.trim())
    ) {
      setStatus('error');
      setSuccessVia(null);
      return false;
    }

    return true;
  };

  const openQuote = (via: 'sms' | 'email') => {
    if (!validateQuoteForm()) return;

    const href =
      via === 'sms'
        ? buildQuoteSmsHref(formData)
        : buildQuoteMailtoHref(formData);

    window.location.href = href;
    setStatus('success');
    setSuccessVia(via);

    window.setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
      });
      setStatus('idle');
      setSuccessVia(null);
    }, 6500);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === 'error') setStatus('idle');
  };

  const buttonRowClass =
    'touch-manipulation h-auto min-h-12 flex-1 py-4 text-[1.0625rem] md:text-base';

  return (
    <Section id="contact" dark>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-8 xl:gap-12">
        <div className="space-y-8 lg:col-span-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand-red">
              <span className="h-px w-8 bg-brand-red" />
              Get In Touch
            </div>
            <h2 className="mb-6 text-[clamp(1.75rem,4.5vw,2.25rem)] font-bold text-white md:text-4xl">
              Ready to Upgrade Your Fleet?
            </h2>
            <p className="mb-8 max-w-xl text-[1.0625rem] leading-relaxed text-gray-400 md:text-lg">
              Contact us today to request a quote, schedule a service, or
              discuss how we can partner with your dealership.
            </p>
          </div>

          <div className="space-y-3">
            <a
              href={BUSINESS.phoneTel}
              className="group flex touch-manipulation min-h-[3.25rem] items-center gap-4 rounded-lg px-3 py-2 -mx-3 active:bg-white/5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-charcoal transition-colors group-hover:bg-brand-red group-active:bg-brand-red">
                <Phone className="h-5 w-5 text-brand-red transition-colors group-hover:text-white" />
              </div>
              <div className="min-w-0 text-left">
                <div className="mb-1 text-xs text-gray-500">Call us</div>
                <div className="text-xl font-bold text-white underline-offset-4 group-hover:text-brand-red">
                  {BUSINESS.phoneDisplay}
                </div>
              </div>
            </a>

            <a
              href={`mailto:${BUSINESS.email}`}
              className="group flex touch-manipulation min-h-[3.25rem] items-center gap-4 rounded-lg px-3 py-2 -mx-3 active:bg-white/5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-charcoal transition-colors group-hover:bg-brand-red group-active:bg-brand-red">
                <Mail className="h-5 w-5 text-brand-red transition-colors group-hover:text-white" />
              </div>
              <div className="min-w-0 text-left">
                <div className="mb-1 text-xs text-gray-500">Email</div>
                <div className="break-all font-bold leading-snug text-white underline-offset-2 group-hover:text-brand-red">
                  {BUSINESS.email}
                </div>
              </div>
            </a>

            <div className="flex min-h-[3.25rem] items-center gap-4 px-3 py-2 -mx-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-charcoal">
                <User className="h-5 w-5 text-brand-red" />
              </div>
              <div className="text-left">
                <div className="mb-1 text-xs text-gray-500">
                  Owner &amp; Operator
                </div>
                <div className="font-bold text-white">{BUSINESS.owner}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-brand-charcoal p-5 shadow-xl sm:p-8 lg:col-span-3">
          <h3 className="mb-6 text-xl font-bold text-white sm:text-2xl">
            Request a Quote
          </h3>

          <form
            onSubmit={e => e.preventDefault()}
            className="space-y-4"
            aria-describedby="quote-form-description"
          >
            <span id="quote-form-description" className="sr-only">
              Sends the quote details using your texting app ({BUSINESS.phoneDisplay}) or
              your mail app ({BUSINESS.email}); nothing is stored on this site.
            </span>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-300"
                >
                  Full name<span className="text-brand-red"> *</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  enterKeyHint="next"
                  value={formData.name}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="Jane Smith"
                  aria-required="true"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-300"
                >
                  Phone<span className="text-brand-red"> *</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                  enterKeyHint="next"
                  inputMode="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="(407) 555-0123"
                  aria-required="true"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  enterKeyHint="next"
                  inputMode="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="you@business.com"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="service"
                  className="text-sm font-medium text-gray-300"
                >
                  Service needed<span className="text-brand-red"> *</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={fieldClass}
                  aria-required="true"
                >
                  <option value="" disabled>
                    Select a service…
                  </option>
                  {(
                    Object.entries(SERVICE_LABELS) as [
                      ServiceValue,
                      string,
                    ][]
                  ).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                enterKeyHint="done"
                className={`${fieldClass} resize-y min-h-[7.5rem]`}
                placeholder="Tell us about your vehicle(s) or dealership needs…"
              />
            </div>

            {status === 'error' && (
              <div
                role="alert"
                className="rounded-lg border border-brand-red/40 bg-brand-red/10 p-3 text-sm font-medium text-brand-red"
              >
                Please complete name, phone, and service type. Use a simple
                email like name@business.com when you fill in email—or leave it
                blank.
              </div>
            )}

            {status === 'success' && successVia && (
              <div
                role="status"
                className="rounded-lg border border-emerald-500/40 bg-emerald-950/40 p-3 text-sm font-medium text-emerald-200"
              >
                {successVia === 'sms' ? (
                  <>
                    Continue in{' '}
                    <span className="text-white font-semibold">
                      Messages
                    </span>{' '}
                    and tap send text to{' '}
                    <span className="text-white">{BUSINESS.phoneDisplay}</span>.
                    Nothing is stored on this site.
                  </>
                ) : (
                  <>
                    Continue in your{' '}
                    <span className="text-white font-semibold">
                      Mail
                    </span>{' '}
                    app—send when ready to{' '}
                    <span className="break-all">{BUSINESS.email}</span>.
                    Nothing is stored on this site.
                  </>
                )}
              </div>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-nowrap">
              <Button
                type="button"
                variant="outline"
                size="lg"
                className={buttonRowClass}
                onClick={() => openQuote('sms')}
              >
                Send by Text
              </Button>
              <Button
                type="button"
                size="lg"
                className={buttonRowClass}
                onClick={() => openQuote('email')}
              >
                Send by Email
              </Button>
            </div>

            <p className="text-center text-[0.8125rem] leading-relaxed text-gray-500">
              Direct line:{' '}
              <a
                href={BUSINESS.phoneTel}
                className="touch-manipulation text-brand-red underline-offset-4 hover:underline active:text-white"
              >
                {BUSINESS.phoneDisplay}
              </a>{' '}
              · Email:{' '}
              <a
                href={`mailto:${BUSINESS.email}`}
                className="touch-manipulation break-all text-brand-red underline-offset-4 hover:underline active:text-white"
              >
                {BUSINESS.email}
              </a>
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
}
