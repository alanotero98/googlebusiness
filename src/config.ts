export const siteConfig = {
  name: 'Alan Otero',
  role: 'Consultor de presencia digital',
  tagline: 'Digital Solutions',
  url: 'https://alanotero.com',
  title: 'Alan Otero — Presencia digital en Google para negocios',
  description:
    'Construyo y optimizo tu presencia digital para que tus clientes puedan encontrarte, conocerte y contactarte. Google Business Profile, landing pages, analítica y automatización.',
  ogImage: '/og.png',
  socials: [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/alanotero.developer/',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/alan-otero-688a59165/',
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/5491137877374',
    },
  ],
  phone: {
    label: '+54 9 11 3787-7374',
    href: 'tel:+5491137877374',
  },
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
  formEndpointKey: import.meta.env.PUBLIC_FORM_ENDPOINT_KEY ?? '',
} as const;

export const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Soluciones adicionales', href: '#soluciones' },
] as const;
