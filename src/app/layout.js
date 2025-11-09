import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Sourav Mishra | Portfolio',
  description: 'Full Stack developer crafting responsive UIs and interactive web apps. Explore my projects, skills, and experience.',
  keywords: ['Sourav Mishra', 'Frontend Developer', 'React Developer', 'Web Portfolio', 'JavaScript Projects', 'TailwindCSS', 'Next.js Developer'],
  authors: [{ name: 'Sourav Mishra', url: 'https://sourav-portfolio-psi.vercel.app' }],
  creator: 'Sourav Mishra',
  openGraph: {
    title: 'Sourav Mishra | Portfolio',
    description: 'A showcase of my web development projects and skills.',
    url: 'https://sourav-portfolio-psi.vercel.app/',
    siteName: 'Sourav Portfolio',
    images: [
      {
        url: '/sm_logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Sourav Mishra Portfolio Preview',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
