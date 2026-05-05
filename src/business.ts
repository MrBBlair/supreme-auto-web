/** Contact info — use phoneTel hrefs everywhere so mobiles open the dialer reliably. */

export const BUSINESS = {
  name: 'Supreme Automotive Reconditioning',
  owner: 'Kevin Blair',
  /** href for dialer on iOS/Android */
  phoneTel: 'tel:+14074541010',
  /** human-readable listing */
  phoneDisplay: '407-454-1010',
  email: 'KevinBlair@supremeautomotiverecon.com',
} as const

export type QuoteFormState = {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

/** Order preserved for dropdowns — keys match form `<option value>`. */
export const SERVICE_LABELS = {
  dealership: 'Dealership Lot Washing',
  detailing: 'Full Detailing',
  pressure: 'Pressure Washing',
  wrap: 'Wrap / Decal Removal',
  other: 'Other / Multiple',
} as const

export type ServiceValue = keyof typeof SERVICE_LABELS

/** Many mobile browsers cap mailto URL length (~2k chars). */
const MAX_MAILTO_CHARS = 1800

function quoteServiceLabel(form: QuoteFormState): string {
  if (!form.service) return '(not specified)'
  return (
    SERVICE_LABELS[form.service as ServiceValue] ?? form.service
  )
}

/**
 * Builds a mailto URL that opens the device's mail app with To + subject + body prefilled.
 * The visitor taps Send in their mail app — no backend.
 */
export function buildQuoteMailtoHref(form: QuoteFormState): string {
  const svc = quoteServiceLabel(form)

  const buildLines = (messageText: string) =>
    [
      `Quote request — ${BUSINESS.name}`,
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email.trim() ? `Email: ${form.email.trim()}` : 'Email: (not provided)',
      `Service needed: ${svc}`,
      '',
      'Message:',
      messageText,
      '',
      '—',
      'Sent via supremeautomotiverecon.com quote form.',
    ].join('\n')

  let msg = form.message.trim() || '(none)'
  let body = buildLines(msg)
  while (
    encodeURIComponent(body).length > MAX_MAILTO_CHARS &&
    msg.length > 48
  ) {
    msg = `${msg.slice(0, Math.floor(msg.length * 0.75)).trimEnd()}…`
    body = buildLines(msg)
  }

  const subject = encodeURIComponent(`Quote request — ${form.name}`)
  const bodyEncoded = encodeURIComponent(body)

  return `mailto:${BUSINESS.email}?subject=${subject}&body=${bodyEncoded}`
}

const MAX_SMS_HREF_CHARS = 1600

function buildQuoteSmsBody(form: QuoteFormState): string {
  const svc = quoteServiceLabel(form)
  const parts = [
    `Quote (${BUSINESS.name})`,
    `Name: ${form.name.trim()}`,
    `Phone: ${form.phone.trim()}`,
    form.email.trim() ? `Email: ${form.email.trim()}` : '',
    `Service: ${svc}`,
    form.message.trim() ? `Notes: ${form.message.trim()}` : '',
  ].filter(Boolean)

  return parts.join('\n')
}

/** Opens Messages with Kevin's cell prefilled (`sms:+1…`). */
export function buildQuoteSmsHref(form: QuoteFormState): string {
  const number = BUSINESS.phoneTel.replace(/^tel:/i, '')
  let body = buildQuoteSmsBody(form)
  while (
    encodeURIComponent(body).length > MAX_SMS_HREF_CHARS &&
    body.length > 80
  ) {
    body = `${body.slice(0, Math.floor(body.length * 0.82)).trimEnd()}…`
  }
  const bodyEncoded = encodeURIComponent(body)
  return `sms:${number}?body=${bodyEncoded}`
}
