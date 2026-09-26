import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Abbas Hussain | Full-Stack Developer',
    short_name: 'Abbas Hussain',
    description:
      'Full-Stack Developer from Pakistan building AI-powered products and secure Web3 tools.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050505',
    theme_color: '#050505',
    icons: [
      {
        src: '/Abbasdev.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
