export type Locale = 'es' | 'en'

interface ProblemItem {
  title: string
  desc: string
}

export interface TranslationStrings {
  nav: {
    inicio: string
    plataforma: string
    tecnologia: string
    contacto: string
    acceder: string
  }
  hero: {
    badge: string
    headline1: string
    headline2: string
    headline3: string
    sub: string
    cta: string
  }
  problem: {
    title1: string
    title2: string
    intro: string
    items: ProblemItem[]
    cardDebit: string
  }
  platform: {
    sectionLabel: string
    mainTitle1: string
    mainTitle2: string
    s1: {
      title: string
      text: string
      link: string
      inputs: string[]
      output: string
      outputSub: string
    }
    s2: {
      title: string
      text: string
      link: string
      nodes: {
        operaciones: string
        cadena: string
        finanzas: string
        terceros: string
        actividad: string
      }
    }
    s3: {
      title: string
      text: string
      link: string
      status: string
    }
  }
  contact: {
    sectionLabel: string
    title1: string
    title2: string
    text: string
    cta: string
    emailLabel: string
  }
  footer: {
    description: string
    platformTitle: string
    platformLinks: string[]
    companyTitle: string
    companyLinks: string[]
    legalTitle: string
    legalLinks: string[]
    copy: string
  }
  contactPage: {
    title: string
    basicInfo: string
    firstName: string
    lastName: string
    role: string
    company: string
    website: string
    companyType: string
    country: string
    email: string
    helpTitle: string
    message: string
    messagePlaceholder: string
    submit: string
    sending: string
    success: string
    error: string
    required: string
    companyTypes: string[]
  }
}

export const translations: Record<Locale, TranslationStrings> = {
  es: {
    nav: {
      inicio: 'Inicio',
      plataforma: 'Plataforma',
      tecnologia: 'Tecnología',
      contacto: 'Contacto',
      acceder: 'Contactanos',
    },
    hero: {
      badge: 'Climate Intelligence Platform',
      headline1: 'Inteligencia',
      headline2: 'Climática.',
      headline3: 'Decisiones Reales.',
      sub: 'Transformamos datos de actividad real en información climática clara, confiable y utilizable para tomar mejores decisiones.',
      cta: 'VER TECNOLOGÍA',
    },
    problem: {
      title1: 'El desafío de medir',
      title2: 'impacto climático.',
      intro: 'Medir el impacto climático sigue siendo un problema complejo para las organizaciones.',
      items: [
        { title: 'Datos dispersos', desc: 'Los datos suelen estar dispersos, incompletos o desconectados del negocio.' },
        { title: 'Múltiples fuentes', desc: 'El impacto climático no proviene de una sola fuente, sino de múltiples actividades y decisiones.' },
        { title: 'Información fragmentada', desc: 'La información suele estar fragmentada entre distintos sistemas y áreas.' },
        { title: 'De la medición a la acción', desc: 'Medir no siempre significa poder analizar, comparar o actuar.' },
        { title: 'Exigencias cambiantes', desc: 'Las exigencias externas y los objetivos internos evolucionan más rápido que las capacidades actuales.' },
      ],
      cardDebit: 'Debit',
    },
    platform: {
      sectionLabel: 'Tecnología',
      mainTitle1: 'Inteligencia climática',
      mainTitle2: 'estructurada y accionable.',
      s1: {
        title: 'Datos convertidos en inteligencia',
        text: 'RASTROCERO es una plataforma que convierte distintos tipos de datos organizacionales en información climática estructurada, trazable y reutilizable.',
        link: 'Conocer más',
        inputs: ['Energía', 'Flota', 'Compras'],
        output: 'Datos climáticos estructurados',
        outputSub: 'trazables · auditables · reutilizables',
      },
      s2: {
        title: 'Diseñada para la complejidad',
        text: 'La plataforma está diseñada para adaptarse a realidades complejas: desde operaciones internas, procesos productivos y cadenas de suministro, hasta decisiones económicas, relaciones con terceros y flujos de actividad.',
        link: 'Hablar con el equipo',
        nodes: {
          operaciones: 'Operaciones',
          cadena: 'Cadena de suministro',
          finanzas: 'Finanzas',
          terceros: 'Terceros',
          actividad: 'Actividad',
        },
      },
      s3: {
        title: 'Visión integral, acción concreta',
        text: 'En lugar de abordar el impacto climático de forma parcial, RASTROCERO permite construir una visión integral, conectando lo que ocurre dentro de la organización con lo que ocurre a su alrededor, y traduciendo esa complejidad en información accionable.',
        link: 'Solicitar una demo',
        status: 'Visión integral activa',
      },
    },
    contact: {
      sectionLabel: 'Contacto',
      title1: 'Hablemos sobre',
      title2: 'tu impacto climático.',
      text: 'Estamos listos para acompañarte. Contanos sobre tu organización y exploremos juntos cómo podemos ayudarte.',
      cta: 'Contactanos',
      emailLabel: 'O escribinos directamente a',
    },
    footer: {
      description: 'Inteligencia climática estructurada y accionable para organizaciones que buscan medir, entender y gestionar su impacto.',
      platformTitle: 'Plataforma',
      platformLinks: ['Tecnología', 'Integraciones', 'Métricas', 'Documentación'],
      companyTitle: 'Empresa',
      companyLinks: ['Sobre nosotros', 'Blog', 'Contacto', 'Carreras'],
      legalTitle: 'Legal',
      legalLinks: ['Privacidad', 'Términos', 'Cookies'],
      copy: '© 2026 RASTROCERO. Todos los derechos reservados.',
    },
    contactPage: {
      title: 'Empecemos a trabajar juntos',
      basicInfo: 'Información básica',
      firstName: 'Nombre',
      lastName: 'Apellido',
      role: 'Cargo',
      company: 'Empresa',
      website: 'Sitio web de la empresa',
      companyType: 'Tipo de empresa',
      country: 'País / Región',
      email: 'Correo electrónico corporativo',
      helpTitle: '¿Cómo podemos ayudarte?',
      message: 'Mensaje adicional',
      messagePlaceholder: 'Contanos brevemente qué estás buscando, qué tipo de organización sos o qué desafío relacionado con impacto climático te gustaría explorar.',
      submit: 'Enviar mensaje',
      sending: 'Enviando...',
      success: 'Mensaje enviado correctamente. Nos pondremos en contacto pronto.',
      error: 'Hubo un error al enviar el mensaje. Intentalo de nuevo.',
      required: 'Obligatorio',
      companyTypes: ['Startup', 'PyME', 'Corporación', 'ONG', 'Gobierno', 'Otro'],
    },
  },
  en: {
    nav: {
      inicio: 'Home',
      plataforma: 'Platform',
      tecnologia: 'Technology',
      contacto: 'Contact',
      acceder: 'Contact us',
    },
    hero: {
      badge: 'Climate Intelligence Platform',
      headline1: 'Climate',
      headline2: 'Intelligence.',
      headline3: 'Real Decisions.',
      sub: 'We transform real activity data into clear, reliable and actionable climate information to make better decisions.',
      cta: 'SEE TECHNOLOGY',
    },
    problem: {
      title1: 'The challenge of measuring',
      title2: 'climate impact.',
      intro: 'Measuring climate impact remains a complex problem for organizations.',
      items: [
        { title: 'Scattered data', desc: 'Data is often scattered, incomplete or disconnected from the business.' },
        { title: 'Multiple sources', desc: 'Climate impact doesn\'t come from a single source, but from multiple activities and decisions.' },
        { title: 'Fragmented information', desc: 'Information is usually fragmented across different systems and areas.' },
        { title: 'From measurement to action', desc: 'Measuring doesn\'t always mean being able to analyze, compare or act.' },
        { title: 'Changing requirements', desc: 'External demands and internal goals evolve faster than current capabilities.' },
      ],
      cardDebit: 'Debit',
    },
    platform: {
      sectionLabel: 'The platform',
      mainTitle1: 'Climate intelligence',
      mainTitle2: 'structured and actionable.',
      s1: {
        title: 'Data turned into intelligence',
        text: 'RASTROCERO is a platform that converts different types of organizational data into structured, traceable and reusable climate information.',
        link: 'Learn more',
        inputs: ['Energy', 'Fleet', 'Procurement'],
        output: 'Structured climate data',
        outputSub: 'traceable · auditable · reusable',
      },
      s2: {
        title: 'Designed for complexity',
        text: 'The platform is designed to adapt to complex realities: from internal operations, production processes and supply chains, to economic decisions, third-party relationships and activity flows.',
        link: 'Talk to our team',
        nodes: {
          operaciones: 'Operations',
          cadena: 'Supply chain',
          finanzas: 'Finance',
          terceros: 'Third parties',
          actividad: 'Activity',
        },
      },
      s3: {
        title: 'Holistic vision, concrete action',
        text: 'Instead of addressing climate impact partially, RASTROCERO enables building a comprehensive vision, connecting what happens inside the organization with its surroundings, and translating that complexity into actionable information.',
        link: 'Request a demo',
        status: 'Holistic vision active',
      },
    },
    contact: {
      sectionLabel: 'Contact',
      title1: 'Let\'s talk about',
      title2: 'your climate impact.',
      text: 'We\'re ready to help. Tell us about your organization and let\'s explore together how we can assist you.',
      cta: 'Contact us',
      emailLabel: 'Or email us directly at',
    },
    footer: {
      description: 'Structured and actionable climate intelligence for organizations looking to measure, understand and manage their impact.',
      platformTitle: 'Platform',
      platformLinks: ['Technology', 'Integrations', 'Metrics', 'Documentation'],
      companyTitle: 'Company',
      companyLinks: ['About us', 'Blog', 'Contact', 'Careers'],
      legalTitle: 'Legal',
      legalLinks: ['Privacy', 'Terms', 'Cookies'],
      copy: '© 2026 RASTROCERO. All rights reserved.',
    },
    contactPage: {
      title: 'Let\'s start working together',
      basicInfo: 'Basic information',
      firstName: 'First name',
      lastName: 'Last name',
      role: 'Role',
      company: 'Company',
      website: 'Company website',
      companyType: 'Company type',
      country: 'Country / Region',
      email: 'Corporate email',
      helpTitle: 'How can we help you?',
      message: 'Additional message',
      messagePlaceholder: 'Briefly tell us what you\'re looking for, what type of organization you are or what climate impact challenge you\'d like to explore.',
      submit: 'Send message',
      sending: 'Sending...',
      success: 'Message sent successfully. We\'ll get back to you soon.',
      error: 'There was an error sending the message. Please try again.',
      required: 'Required',
      companyTypes: ['Startup', 'SME', 'Corporation', 'NGO', 'Government', 'Other'],
    },
  },
}
