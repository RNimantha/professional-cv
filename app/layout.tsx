import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const siteUrl = 'https://nimanthabandara.dev'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  // ── Title ──────────────────────────────────────────────────────────────────
  // Exact name first so Google's title-match algo fires immediately
  title: {
    default: 'Nimantha Bandara — Lead Data Scientist & AI Engineer',
    template: '%s | Nimantha Bandara',
  },

  // ── Description ────────────────────────────────────────────────────────────
  // Name repeated naturally in first sentence — critical for snippet ranking
  description:
    'Nimantha Bandara is a Lead Data Scientist and AI Engineer based in Sri Lanka with 5+ years of experience in Machine Learning, NLP, Deep Learning, RAG pipelines, and agentic AI systems. Founder of DetaLabs AI. Currently Lead Data Scientist at Mortar AI.',

  // ── Keywords ───────────────────────────────────────────────────────────────
  keywords: [
    'Nimantha Bandara',
    'Nimantha Bandara Data Scientist',
    'Nimantha Bandara AI Engineer',
    'Nimantha Bandara Sri Lanka',
    'Nimantha Bandara DetaLabs',
    'Nimantha Bandara Mortar AI',
    'R Nimantha Bandara',
    'Lead Data Scientist Sri Lanka',
    'Data Scientist Sri Lanka',
    'AI Engineer Sri Lanka',
    'Machine Learning Engineer',
    'NLP Engineer',
    'Deep Learning Expert',
    'LangChain Developer',
    'LangGraph',
    'RAG Pipeline',
    'Agentic AI',
    'Azure Data Science',
    'Python ML Engineer',
    'TensorFlow',
    'PyTorch',
    'DetaLabs AI',
    'Mortar AI',
    'Data Science Portfolio',
    'Computer Vision',
  ],

  // ── Author / Creator ───────────────────────────────────────────────────────
  authors: [
    {
      name: 'Nimantha Bandara',
      url: siteUrl,
    },
  ],
  creator: 'Nimantha Bandara',
  publisher: 'Nimantha Bandara',

  // ── Robots ─────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  // ── Open Graph ─────────────────────────────────────────────────────────────
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: siteUrl,
    title: 'Nimantha Bandara — Lead Data Scientist & AI Engineer',
    description:
      'Nimantha Bandara is a Lead Data Scientist with 5+ years in ML, NLP, Deep Learning, and agentic AI systems. Founder of DetaLabs AI. 50% efficiency gains, 40% cost reduction, 17M+ records processed.',
    siteName: 'Nimantha Bandara',
    images: [
      {
        url: '/nimantha.jpg',
        width: 800,
        height: 800,
        alt: 'Nimantha Bandara — Lead Data Scientist & AI Engineer',
        type: 'image/jpeg',
      },
    ],
    firstName: 'Nimantha',
    lastName: 'Bandara',
  },

  // ── Twitter Card ───────────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Nimantha Bandara — Lead Data Scientist & AI Engineer',
    description:
      'Nimantha Bandara — Lead Data Scientist with 5+ years in ML, NLP, Deep Learning, and agentic AI. Founder of DetaLabs AI.',
    images: [
      {
        url: '/nimantha.jpg',
        alt: 'Nimantha Bandara — Lead Data Scientist',
      },
    ],
    creator: '@nimanthabandara',
    site: '@nimanthabandara',
  },

  // ── Icons ──────────────────────────────────────────────────────────────────
  icons: {
    icon: '/nimantha.jpg',
    shortcut: '/nimantha.jpg',
    apple: '/nimantha.jpg',
  },

  // ── Canonical ──────────────────────────────────────────────────────────────
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-US': siteUrl,
    },
  },

  // ── Misc ───────────────────────────────────────────────────────────────────
  category: 'technology',
  classification: 'Data Science, Artificial Intelligence, Machine Learning',
  referrer: 'origin-when-cross-origin',
}

// ── Structured Data (JSON-LD) ─────────────────────────────────────────────────
// Multiple schemas give Google a richer entity graph for "Nimantha Bandara"

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteUrl}/#person`,
  name: 'Nimantha Bandara',
  givenName: 'Nimantha',
  familyName: 'Bandara',
  jobTitle: 'Lead Data Scientist & AI Engineer',
  description:
    'Nimantha Bandara is a Lead Data Scientist and AI Engineer with 5+ years of experience in Machine Learning, NLP, Deep Learning, RAG pipelines, and agentic AI systems. He is the Founder and CEO of DetaLabs AI and currently serves as Lead Data Scientist at Mortar AI.',
  url: siteUrl,
  image: {
    '@type': 'ImageObject',
    url: `${siteUrl}/nimantha.jpg`,
    width: 800,
    height: 800,
    caption: 'Nimantha Bandara — Lead Data Scientist & AI Engineer',
  },
  email: 'nimantabandara@gmail.com',
  telephone: '+94716113385',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Borelasgamuwa',
    addressRegion: 'Western Province',
    addressCountry: 'LK',
    addressCountryName: 'Sri Lanka',
  },
  nationality: {
    '@type': 'Country',
    name: 'Sri Lanka',
  },
  sameAs: [
    'https://www.linkedin.com/in/nimantha-bandara-986192132',
    'https://github.com/RNimantha',
    siteUrl,
  ],
  knowsAbout: [
    'Machine Learning',
    'Data Science',
    'Artificial Intelligence',
    'Natural Language Processing',
    'Deep Learning',
    'Computer Vision',
    'Agentic AI Systems',
    'LangChain',
    'LangGraph',
    'Retrieval-Augmented Generation',
    'Python',
    'Azure Cloud',
    'TensorFlow',
    'PyTorch',
    'Databricks',
    'Apache Kafka',
    'ETL Engineering',
    'Data Pipelines',
    'Business Intelligence',
    'PySpark',
    'FastAPI',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Master of Science in Data Science and Artificial Intelligence',
      credentialCategory: 'degree',
      recognizedBy: {
        '@type': 'CollegeOrUniversity',
        name: 'University of Sri Jayewardenepura',
        '@id': 'https://www.sjp.ac.lk/',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Machine Learning for Professionals (Certificate)',
      credentialCategory: 'certificate',
      recognizedBy: {
        '@type': 'CollegeOrUniversity',
        name: 'University of Jayewardenepura & Erasmus DS and AI Consortium',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'BSc (Hons.) Applied Statistics',
      credentialCategory: 'degree',
      recognizedBy: {
        '@type': 'CollegeOrUniversity',
        name: 'University of Colombo',
        url: 'https://www.cmb.ac.lk/',
      },
    },
  ],
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'University of Colombo',
      url: 'https://www.cmb.ac.lk/',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'University of Sri Jayewardenepura',
    },
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Mortar AI PVT LTD',
    '@id': 'https://www.mortarai.com',
  },
  founder: {
    '@type': 'Organization',
    name: 'DetaLabs AI (Pvt) Ltd',
    url: 'https://www.detalabsai.com',
    '@id': 'https://www.detalabsai.com',
    description:
      'DetaLabs AI is an AI company founded by Nimantha Bandara, specialising in intelligent AI agents, computer vision, and machine learning solutions.',
    founder: {
      '@type': 'Person',
      name: 'Nimantha Bandara',
    },
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  url: siteUrl,
  name: 'Nimantha Bandara',
  description:
    'Official portfolio website of Nimantha Bandara — Lead Data Scientist & AI Engineer.',
  author: {
    '@type': 'Person',
    name: 'Nimantha Bandara',
    '@id': `${siteUrl}/#person`,
  },
  inLanguage: 'en-US',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${siteUrl}/#webpage`,
  url: siteUrl,
  name: 'Nimantha Bandara — Lead Data Scientist & AI Engineer',
  description:
    'Portfolio and professional profile of Nimantha Bandara, Lead Data Scientist and Founder of DetaLabs AI.',
  isPartOf: { '@id': `${siteUrl}/#website` },
  about: { '@id': `${siteUrl}/#person` },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Nimantha Bandara',
        item: siteUrl,
      },
    ],
  },
  inLanguage: 'en-US',
  datePublished: '2025-01-01',
  dateModified: new Date().toISOString().split('T')[0],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        <link rel="dns-prefetch" href="https://github.com" />

        {/* Person JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {/* WebSite JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* WebPage / ProfilePage JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
