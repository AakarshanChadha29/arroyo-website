/**
 * Central content for Arroyo Technologies — edit here for handover.
 * Do not publish numeric performance, warranty, or certification claims
 * until approved and backed by client documentation.
 */

export type Product = {
  slug: string;
  name: string;
  short: string;
  description: string;
  audience: string[];
  features: string[];
  benefits: string[];
  howItWorks: string[];
  faqs: { q: string; a: string }[];
  image: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
};

/**
 * Hero image: defaults to a real file in the repo so the site ships visible.
 * Replace `imageSrc` with `/hero/hero-pool-luxury.jpg` after you add that file under public/hero/.
 */
export const heroMedia = {
  imageSrc: '/images/ionedge-framed.jpg',
  videoSrc: '/hero/hero-loop.mp4',
  imageAlt: 'IonEdge portable water system—premium water treatment product'
};

export const company = {
  name: 'Arroyo Technologies Pvt. Ltd.',
  shortName: 'Arroyo Technologies',
  tagline: 'Water treatment for pools, properties, and life on the move',
  domain: 'arroyo-technologies.com',
  email: 'info@arroyo-technologies.com',
  phones: ['+91 94172 37607', '+91 95010 92575', '+91 99103 96209'],
  heroEyebrow: 'Water technology',
  heroTitle: 'Calm, clear water—engineered for real buildings and real operators',
  heroText:
    'Pool ionization, portable purification, and whole-property systems designed with hospitality, schools, societies, and premium homes in mind. Less chemical drama, more predictable water your guests and residents actually notice.',
  primaryCta: 'Speak with us',
  secondaryCta: 'Explore systems'
};

/** High-level capabilities — no unverified performance numbers. */
export const capabilityHighlights = [
  { label: 'Approach', value: 'Ionization + filtration' },
  { label: 'Reach', value: 'Commercial to residential' },
  { label: 'Specs & compliance', value: 'Shared on request' },
  { label: 'Delivery', value: 'Consultation-led' }
];

export const productSection = {
  eyebrow: 'Product lines',
  title: 'Three systems, one standard of care',
  intro:
    'Pool circulation, portable demand, and property-wide point-of-entry—each line is commissioned for how your team actually runs the water.'
};

export const contactPage = {
  title: 'Consultation & quotes',
  intro:
    'Send application, location, rough scale, and timing. Technical questions go to engineering; commercial questions to the right desk—typically within one business day for domestic inquiries.'
};

export const challengesEyebrow = 'On the ground';

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/technology', label: 'Technology' },
  { href: '/products', label: 'Products' },
  { href: '/applications', label: 'Applications' },
  { href: '/about', label: 'About' },
  { href: '/compliance', label: 'Documentation' },
  { href: '/contact', label: 'Contact' }
];

export const seo = {
  defaultTitle: 'Arroyo Technologies | Pool ionization & water treatment systems',
  defaultDescription:
    'Premium water treatment: pool ionization, IonEdge portable purification, and villa-scale systems for hospitality, institutions, and discerning homes.',
  technology: {
    title: 'Technology',
    description:
      'How Arroyo combines controlled ion release with filtration for pools, portable use, and building-wide water treatment.'
  },
  productsIndex: {
    title: 'Products',
    description:
      'Three product lines: swimming pool ionization, IonEdge portable devices, and whole-home or villa mineral water systems.'
  },
  applications: {
    title: 'Applications',
    description:
      'Where Arroyo systems are deployed: hospitality, education, housing societies, villas, boutique hotels, and channel partners.'
  },
  about: {
    title: 'About',
    description:
      'Arroyo Technologies designs and supplies advanced water-treatment systems for pools, portable use, and property-scale installations.'
  },
  compliance: {
    title: 'Documentation',
    description:
      'How we handle technical documentation, certifications, and regulatory language on the public site.'
  },
  contact: {
    title: 'Contact',
    description:
      'Request a consultation, technical review, or quote for pool ionization, IonEdge, or whole-property systems.'
  }
};

export const valueProposition = {
  eyebrow: 'Why Arroyo',
  title: 'Built for people who run the water every day',
  body:
    'Chlorine-heavy programs still dominate—but they cost time, create odor and wear, and show up in guest feedback. We combine controlled ionization with staged filtration so teams can run chemistry with a lighter touch, while keeping claims on the website conservative and putting hard numbers where they belong: in your approved proposals.'
};

export const challenges = [
  {
    title: 'Operational load',
    text: 'Shocks, algaecides, and manual dosing eat hours and budget—and they scale up fast on busy pools.'
  },
  {
    title: 'Experience',
    text: 'Harsh water shows up as smell, irritation, and haze—exactly what hotels and clubs want to avoid.'
  },
  {
    title: 'Infrastructure',
    text: 'Aggressive chemistry quietly taxes liners, metals, and heat transfer equipment season after season.'
  },
  {
    title: 'Consistency',
    text: 'You need the same outcome after shift change, across properties, and when source water drifts.'
  }
];

export const technologyTeaser = {
  eyebrow: 'Technology',
  title: 'Controlled ions. Staged filtration. Clear handover.',
  body:
    'Pool and building systems use microprocessor-guided copper, silver, and zinc release together with sediment, carbon, and fine filtration where the design calls for it. IonEdge brings the same discipline to compact, battery-powered use.',
  ctaHref: '/technology',
  ctaLabel: 'See how it works'
};

export const applicationsTeaser = {
  eyebrow: 'Applications',
  title: 'From resort decks to villa service entries',
  body:
    'We size against bather load, hydraulics, source water, and how your team maintains the plant—whether the job is a high-turn pool, a society main, or a whole-property skid.',
  ctaHref: '/applications',
  ctaLabel: 'View applications'
};

export const trustSection = {
  eyebrow: 'Trust',
  title: 'Straightforward about what lives on the public site',
  body:
    'Product-specific technical data, test summaries, and compliance packs are shared after we understand your project—not buried in marketing superlatives. Anything with legal or regulatory weight stays in documentation you control.',
  bullets: [
    'Certification, patent, ISO, NSF, BIS, and medical language appears here only when your team has approved exact wording and references.',
    'Warranty, savings percentages, and payback belong in signed proposals—not in generic web copy.',
    'Use the Documentation page as a checklist before anything new goes live.'
  ],
  ctaHref: '/compliance',
  ctaLabel: 'Documentation'
};

export const homeFaqs = [
  {
    q: 'Which line suits a hotel or resort pool?',
    a: 'The swimming pool ionization system is built for commercial and high-use residential pools. Send volume, turnover, and how you treat water today—we’ll recommend configuration and monitoring steps from there.'
  },
  {
    q: 'When does IonEdge make sense?',
    a: 'Whenever you need quality water without a fixed install: travel, rentals, students, or backup. It’s a compact multi-stage unit with ionization—not a stand-in for regulated municipal supply where that applies.'
  },
  {
    q: 'What’s the best next step?',
    a: 'Use the contact form with site type, rough scale, and timing. We’ll reply with clear next steps, any documentation we need from you, and introductions to installers when it helps.'
  }
];

export const productSuggestedQuestions = [
  'Which system is best for a hotel pool?',
  'What is IonEdge used for?',
  'Which system is suitable for villas?',
  'Can Arroyo systems reduce chlorine dependency?'
];

export const technologyPage = {
  title: 'Technology',
  intro:
    'We treat water as infrastructure: know what you add, match filtration to what’s in the stream, and design for the people who check chemistry every week.',
  pillars: [
    {
      title: 'Controlled ion release',
      text:
        'Copper, silver, and zinc ions support disinfection and algae control, which often lets you ease back on oxidizer demand. Electronics govern release; commissioning locks in the right targets for your loop.'
    },
    {
      title: 'Filtration in series',
      text:
        'Sediment, carbon, and fine filtration appear wherever the product architecture needs them—pool circulation, portable cartridges, or a villa point-of-entry train.'
    },
    {
      title: 'Sizing and commissioning',
      text:
        'Flow, bathers, source water, and local rules change the answer. We work from your data—not from a one-size chart on a landing page.'
    }
  ],
  processTitle: 'How projects typically run',
  processSteps: [
    'Discovery: application, volumes, current treatment, constraints.',
    'Proposal: recommended line, monitoring plan, documentation list.',
    'Commissioning: install support as agreed; operator handover checklists.'
  ]
};

export const applicationsPage = {
  title: 'Applications',
  intro:
    'The three lines cover the patterns we see most often. SKUs and bills of material are confirmed once we’ve talked through your site.',
  segments: [
    {
      title: 'Hospitality & wellness',
      text: 'Hotels, resorts, spas, and clubs running high-turnover pools.',
      bullets: ['Guest-facing water quality', 'Operations teams under time pressure', 'Ionization system line']
    },
    {
      title: 'Education & communities',
      text: 'Schools, colleges, and housing societies with shared aquatic facilities.',
      bullets: ['Predictable maintenance windows', 'Shared liability for water safety', 'Ionization system line']
    },
    {
      title: 'Premium residential',
      text: 'Villas and luxury homes—pool water and/or whole-property taps.',
      bullets: ['Pool ionization and/or whole-home systems', 'Architect and MEP coordination', 'Documentation for handover']
    },
    {
      title: 'Portable & contingency',
      text: 'Travel, rental, student, and backup scenarios without permanent plumbing changes.',
      bullets: ['IonEdge portable line', 'Battery-operated use cases', 'Filter cartridge lifecycle planning']
    },
    {
      title: 'Channel partners',
      text: 'Distributors and integrators serving the above segments.',
      bullets: ['Training and technical collateral on request', 'Project registration where applicable']
    }
  ]
};

export const documentationGuidance = [
  'Publish certifications and standards only with current, product-matched certificates.',
  'Patent and IP references require legal-approved language.',
  'Drinking-water and medical claims require jurisdiction-specific review—avoid unless explicitly cleared.',
  'Align RO or other regulated product classes only with products that fall under those rules.'
];

export const aboutPage = {
  intro:
    'Arroyo Technologies Pvt. Ltd. designs and supplies ionization and staged-filtration systems for people who can’t afford guesswork—facility teams, owners, and distribution partners alike.',
  focusTitle: 'What we focus on',
  focus: [
    'Swimming pool ionization for demanding commercial and premium pools',
    'IonEdge portable purification for travel, rental life, and backup',
    'Whole-property point-of-entry treatment for villas and select commercial buildings'
  ],
  closing:
    'Public copy stays conservative. Performance, compliance, and warranty detail belong in proposals your team has approved—not in generic marketing paragraphs.'
};

export const homeContactTeaser = {
  eyebrow: 'Next step',
  title: 'Share a short brief',
  body:
    'Tell us the application, approximate scale, and timing. You’ll get a human reply with what we need next—documentation expectations, scheduling, and the right technical contact.',
  linkLabel: 'Go to contact'
};

export const products: Product[] = [
  {
    slug: 'swimming-pool-ionization-system',
    name: 'Swimming Pool Ionization System',
    short: 'Copper–silver–zinc ionization for commercial and residential pools.',
    description:
      'Wall-mount ionization with electronic control, intended for hotels, schools, societies, wellness centers, and large residential pools where reducing harsh chemical load and operational friction matters.',
    audience: [
      'Hotels and resorts',
      'Schools and universities',
      'Housing societies',
      'Wellness and athletic clubs',
      'Luxury residential pools'
    ],
    features: [
      'Copper, silver, and zinc ion delivery',
      'Microprocessor-controlled output',
      'Ionization cell sized to hydraulic and load conditions',
      'Water testing support (e.g. copper levels) as per project',
      'Low-profile wall installation'
    ],
    benefits: [
      'Supports lower reliance on high-dose chlorine programs when applied and monitored correctly',
      'More comfortable water for bathers versus aggressively chlorinated pools',
      'Reduced chemical odor in deck and indoor pool environments',
      'Less aggressive water chemistry for liners and metal components (site-dependent)'
    ],
    howItWorks: [
      'Water passes the ionization cell as part of the pool circulation loop.',
      'Ions are released at a controlled rate based on controller settings and water chemistry.',
      'Operators monitor residual levels and adjust oxidizer strategy with Arroyo guidance.',
      'Filtration and backwash routines remain part of good practice; ionization is not a bypass for basic hydraulics.'
    ],
    faqs: [
      {
        q: 'Does this eliminate chlorine?',
        a: 'Most installations still use a residual oxidizer at a lower level. The system is designed to reduce dependence on heavy chlorination, not to remove regulatory or safety obligations your jurisdiction imposes.'
      },
      {
        q: 'What do you need to quote?',
        a: 'Pool volume, approximate bather load, current chemistry method, and photos or drawings of the plant room help us propose cell sizing and controller placement.'
      },
      {
        q: 'Who installs?',
        a: 'Qualified pool mechanical contractors typically perform installation; we provide technical documentation and support per project agreement.'
      }
    ],
    image: '/images/pool-core-kit-open.jpg',
    imageAlt: 'Arroyo swimming pool ionization hardware with control unit and cell assembly',
    seoTitle: 'Swimming Pool Ionization System',
    seoDescription:
      'Controlled copper–silver–zinc pool ionization for hotels, schools, societies, and premium residential pools.'
  },
  {
    slug: 'ionedge-portable-water-cleaning-device',
    name: 'IonEdge Portable Water Cleaning Device',
    short: 'Portable multi-stage filtration with ionization for mobile use.',
    description:
      'Battery-operated purification for users who need treated water without permanent installation: travel, temporary housing, students, renters, and compact living.',
    audience: ['Travelers', 'Renters and students', 'Emergency and backup use', 'Field staff', 'Light commercial pop-ups'],
    features: [
      'Sediment, carbon, and ultra-filtration stages',
      'Integrated ionization stage per product design',
      'One-touch operation',
      'Compact chassis for bags and luggage',
      'Battery-powered operation'
    ],
    benefits: [
      'Treated water where fixed systems are impractical',
      'Less reliance on bottled water for many travel and rental contexts',
      'Straightforward operation for non-technical users',
      'Repeatable cartridge replacement cycle'
    ],
    howItWorks: [
      'Source water is drawn through staged filters to remove sediment, improve taste and odor, and reduce fine particulates.',
      'Ionization complements filtration for the product’s intended use envelope.',
      'Cartridges and battery are maintained per the product manual supplied with shipment.',
      'Not all raw water sources are suitable; suitability is confirmed during purchase consultation.'
    ],
    faqs: [
      {
        q: 'Is IonEdge a replacement for municipal water?',
        a: 'It improves many point-of-use streams but does not change regulatory classification of your supply. Use it within the operating conditions described in product documentation.'
      },
      {
        q: 'How often are filters replaced?',
        a: 'Interval depends on inlet quality and volume. We provide guidance with the unit; heavy sediment or unknown sources shorten cartridge life.'
      },
      {
        q: 'Where can I buy?',
        a: 'Contact us for channel availability, distributor territories, and MOQs for commercial buyers.'
      }
    ],
    image: '/images/ionedge.jpg',
    imageAlt: 'IonEdge portable water cleaning device with filtration and control housing',
    seoTitle: 'IonEdge Portable Water Device',
    seoDescription:
      'IonEdge: portable multi-stage water filtration with ionization for travel, rental living, and backup use.'
  },
  {
    slug: 'whole-home-villa-mineral-water-system',
    name: 'Whole-Home / Villa Mineral Water System',
    short: 'Point-of-entry treatment for consistent water across a property.',
    description:
      'Property-scale filtration and ionization at the service entrance—intended for villas, boutique hotels, and institutional buildings that want aligned water quality at multiple draw points.',
    audience: ['Villas and estates', 'Boutique hotels', 'Small institutions', 'Premium residential developers'],
    features: [
      'Point-of-entry installation',
      'Sediment, carbon, ultra filtration, and ionization per design',
      'Scalable flow configuration',
      'Coordinated with MEP drawings where required'
    ],
    benefits: [
      'Consistent treated water at kitchens, baths, and utility draws',
      'Single maintenance locus instead of under-sink proliferation',
      'Suitable positioning for premium residential and hospitality fit-outs',
      'Documentation package for facility handover (on request)'
    ],
    howItWorks: [
      'Mains or tank-fed water enters the treatment skid at the property line or mechanical room.',
      'Stages remove sediment, address taste/odor and fine particles, then condition water through ionization as designed.',
      'Treated water is distributed on the cold-water architecture defined in the project.',
      'Hot water systems may require separate review depending on metallurgy and code.'
    ],
    faqs: [
      {
        q: 'Is this a softener or RO?',
        a: 'This line is not described as reverse osmosis on this site. Capability against hardness and TDS is documented per project; do not assume equivalence to other technology families.'
      },
      {
        q: 'What drawings do you need?',
        a: 'Flow rates, peak demand, incoming water analysis, and mechanical room layout are the minimum to size equipment responsibly.'
      },
      {
        q: 'Lead time?',
        a: 'Depends on configuration and factory load. Consultation response includes indicative scheduling.'
      }
    ],
    image: '/images/pool-core-kit-top.jpg',
    imageAlt: 'Arroyo whole-home water treatment hardware top view showing manifold layout',
    seoTitle: 'Whole-Home Villa Water System',
    seoDescription:
      'Point-of-entry filtration and ionization for villas, boutique hotels, and institutional buildings.'
  }
];

export const footerTagline =
  'Pool ionization, portable purification, and property-wide water—engineered for teams who live with the chemistry every day.';
