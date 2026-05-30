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
  imageSrc: '/images/projects/enhanced/estate-pool-01.jpg',
  videoSrc: '/videos/testimonials/testimonial-homeland-1.mp4',
  imageAlt: 'IonEdge portable water system—premium water treatment product'
};



export const heroSlides = [
  {
    src: '/images/projects/enhanced/residential-pool-01.jpg',
    fallback: '/images/projects/enhanced/hospitality-pool-01.jpg',
    label: 'Residential Pools'
  },
  {
    src: '/images/projects/enhanced/villa-pool-01.jpg',
    fallback: '/images/products/whole-home-villa-system-premium.png',
    label: 'Villas & Premium Residences'
  },
  {
    src: '/images/projects/enhanced/hospitality-pool-02.jpg',
    fallback: '/images/projects/enhanced/system-installation-01.jpg',
    label: 'Hospitality & Large Facilities'
  }
];

export const quickActions = {
  phoneLabel: 'Speak to an Expert',
  quoteLabel: 'Get Your Quote Today',
  whatsappLabel: 'WhatsApp',
  whatsappNumber: '+919501092575'
};

export const salesBenefits = [
  {
    title: 'Lower chlorine dependency',
    text: 'Designed to reduce heavy chlorine programs while maintaining a practical treatment routine.'
  },
  {
    title: 'Cleaner, safer-feeling water',
    text: 'Improved water experience for guests, residents, and daily operators.'
  },
  {
    title: 'Lower maintenance effort',
    text: 'Automation-led control helps teams spend less time on repeated manual correction.'
  },
  {
    title: 'Better for skin and eyes',
    text: 'A lower-chemical approach can help reduce irritation in routine use conditions.'
  },
  {
    title: 'Automated treatment process',
    text: 'Microprocessor-managed ionization supports consistency across shifts and properties.'
  },
  {
    title: 'Residential to commercial fit',
    text: 'Applicable across villas, schools, hotels, and managed community facilities.'
  }
];

export const audienceSegments = [
  {
    slug: 'schools',
    title: 'Schools & Institutions',
    text: 'Safer managed pool environments with simpler routines for operations and facility teams.',
    cta: 'Book a Project Discussion'
  },
  {
    slug: 'hotels',
    title: 'Hotels & Hospitality',
    text: 'Cleaner guest-facing water with lower day-to-day maintenance pressure for engineering teams.',
    cta: 'Book a Project Discussion'
  },
  {
    slug: 'residential',
    title: 'Residential & Villas',
    text: 'Comfortable, lower-odor family pool environments with more predictable upkeep.',
    cta: 'Book a Project Discussion'
  },
  {
    slug: 'commercial',
    title: 'Commercial & Community',
    text: 'Scalable, consistency-focused treatment support for high-use managed properties.',
    cta: 'Book a Project Discussion'
  }
];

export const proofGallery = [
  {
    src: '/images/projects/enhanced/residential-pool-01.jpg',
    alt: 'Arroyo project site showing real residential pool environment',
    caption: 'Residential villa pool'
  },
  {
    src: '/images/projects/enhanced/villa-pool-01.jpg',
    alt: 'Premium villa pool installation environment',
    caption: 'Premium estate commission'
  },
  {
    src: '/images/projects/enhanced/hospitality-pool-01.jpg',
    alt: 'Large community pool environment for water treatment deployment',
    caption: 'Hospitality pool'
  },
  {
    src: '/images/products/whole-home-villa-system-premium.png',
    alt: 'Whole-home water treatment assembly for property-scale deployment',
    caption: 'Whole-property system'
  },
  {
    src: '/images/projects/enhanced/system-installation-01.jpg',
    alt: 'Installed pool system controller and electrical integration setup',
    caption: 'Installed control system'
  }
];

export const testimonials = [
  {
    name: 'Hospitality operations team (North India)',
    quote: 'Cleaner water presentation and lower day-to-day intervention pressure were the biggest wins for our staff.'
  },
  {
    name: 'Private residence project team',
    quote: 'The consultation was practical, and the recommendation matched our site constraints without overselling.'
  },
  {
    name: 'Institutional facility operations lead',
    quote: 'Predictable maintenance guidance and responsive follow-up made handover and routine operation easier.'
  }
];

export const anonymizedCaseSummaries = [
  {
    title: 'Residential villa pool refresh',
    summary:
      'Homeowner project focused on cleaner daily pool quality and reduced manual intervention for maintenance teams.'
  },
  {
    title: 'Hospitality operations stabilization',
    summary:
      'Guest-facing property required more consistent treatment routines and better day-to-day execution reliability.'
  },
  {
    title: 'Institutional plant upgrade support',
    summary:
      'Site team needed practical commissioning guidance and documentation-ready handover for repeatable operations.'
  }
];

export const campaignSeo = {
  schools: { title: 'Pool Water Solutions for Schools', description: 'Pool ionization and water-treatment support for schools and institutions.' },
  hotels: { title: 'Pool Water Solutions for Hotels', description: 'Water-treatment systems for hotels, resorts, and hospitality properties.' },
  residential: { title: 'Pool Water Solutions for Residences', description: 'Water-treatment systems for villas, residences, and gated communities.' },
  commercial: { title: 'Pool Water Solutions for Commercial Sites', description: 'Water-treatment systems for commercial and community pool facilities.' }
};

export const campaignContent = {
  schools: {
    headline: 'Safer Managed Water Systems for School Pools',
    subheadline:
      'Support hygiene-focused treatment routines with reduced chemical dependence and lower maintenance burden for school operations teams.',
    benefits: [
      'Reliable routine support for scheduled maintenance windows',
      'Lower manual correction burden for facility staff',
      'Practical consultation for safer student-facing pool operations'
    ],
    primaryCta: 'Book a Project Discussion',
    visual: {
      src: '/images/projects/enhanced/hospitality-pool-02.jpg',
      fallback: '/images/projects/enhanced/residential-pool-01.jpg',
      proofSrc: '/images/projects/enhanced/system-installation-01.jpg',
      proofCaption: 'School facility installations supported by clear treatment workflow and control planning.'
    },
    trustPoints: [
      'Planned around predictable school maintenance windows',
      'Built for consistency where student safety perception matters',
      'Supports facility teams with practical, repeatable routines'
    ]
  },
  hotels: {
    headline: 'Premium Pool Water Experience for Hotels & Resorts',
    subheadline:
      'Deliver cleaner guest-facing water while making daily pool maintenance easier for engineering and hospitality operations teams.',
    benefits: [
      'Cleaner guest experience with lower chemical smell',
      'Operationally easier treatment support for busy properties',
      'Premium water quality perception aligned with luxury positioning'
    ],
    primaryCta: 'Get Your Quote Today',
    visual: {
      src: '/images/projects/enhanced/hospitality-pool-01.jpg',
      fallback: '/images/projects/enhanced/villa-pool-01.jpg',
      proofSrc: '/images/projects/enhanced/hospitality-pool-02.jpg',
      proofCaption: 'Hospitality-focused pool installations built for strong guest presentation and reliable operations.'
    },
    trustPoints: [
      'Designed for high-visibility guest pool environments',
      'Supports clearer water presentation during peak occupancy',
      'Operational fit for hotel engineering and maintenance teams'
    ]
  },
  residential: {
    headline: 'Comfortable, Lower-Chemical Pool Water for Homes & Villas',
    subheadline:
      'Build a safer-feeling family water environment with reduced chemical odor and a more comfortable everyday pool experience.',
    benefits: [
      'More comfortable pool use for family and guests',
      'Reduced chemical smell in day-to-day operation',
      'Automated treatment support for predictable upkeep'
    ],
    primaryCta: 'Request Consultation',
    visual: {
      src: '/images/projects/enhanced/villa-pool-01.jpg',
      fallback: '/images/products/whole-home-villa-system-premium.png',
      proofSrc: '/images/products/whole-home-villa-system-premium.png',
      proofCaption: 'Residential and villa deployments focused on comfort, clarity, and predictable long-term upkeep.'
    },
    trustPoints: [
      'Family-comfort positioning for premium villa pools',
      'Reduced chemical odor pressure in daily use conditions',
      'Consultation-led setup matched to real residential constraints'
    ]
  },
  commercial: {
    headline: 'Scalable Water Treatment Support for Commercial Properties',
    subheadline:
      'Improve treatment consistency across managed pools with automation-led operation and lower ongoing operational hassle.',
    benefits: [
      'Scalable approach for high-use managed properties',
      'Lower operations hassle with clearer treatment routines',
      'Consistency-focused support across multi-site requirements'
    ],
    primaryCta: 'Get Your Quote Today',
    visual: {
      src: '/images/projects/enhanced/system-installation-01.jpg',
      fallback: '/images/projects/enhanced/hospitality-pool-01.jpg',
      proofSrc: '/images/projects/enhanced/hospitality-pool-02.jpg',
      proofCaption: 'Commercial pool installations designed for consistency across high-use, multi-team operations.'
    },
    trustPoints: [
      'Designed for consistency across managed high-use sites',
      'Supports lower operational friction for facility teams',
      'Structured planning for infrastructure-led reliability goals'
    ]
  }
} as const;

export const company = {
  name: 'Arroyo Technologies Pvt. Ltd.',
  shortName: 'Arroyo Technologies',
  tagline: 'Water treatment for pools, properties, and life on the move',
  domain: 'arroyo-technologies.com',
  email: 'info@arroyo-technologies.com',
  phones: ['+91 95010 92575', '+91 99103 96209'],
  heroEyebrow: 'Water technology',
  heroTitle: 'Chemical-Free Water Purification for Pools, Hotels, Schools & Homes',
  heroText:
    'Reduce chlorine dependency, lower maintenance effort, and deliver cleaner, safer water with automated mineral ionization systems.',
  primaryCta: 'Get Your Quote Today',
  secondaryCta: 'Speak to an Expert'
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
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/compliance', label: 'Documentation' },
  { href: '/legal', label: 'Legal Center' },
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
  projects: {
    title: 'Projects & Installations',
    description:
      'Selected installation environments, project visuals, and downloadable testimonial support from Arroyo Technologies.'
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
  eyebrow: 'Delivery confidence',
  title: 'Clear documentation and practical project handover',
  body:
    'Technical data, implementation notes, and compliance documents are shared in a project-ready format once we align on your site conditions and operating goals.',
  bullets: [
    'Documentation packs are matched to your selected system and scope.',
    'Commercial commitments are confirmed in proposal documents with exact terms.',
    'Engineering and operations teams receive practical handover guidance.'
  ],
  ctaHref: '/compliance',
  ctaLabel: 'View documentation process'
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

export const poolProgramHighlights = [
  'Crystal-clear water presentation for guest-facing pools',
  'Reduced dependency on chlorine-heavy treatment routines',
  'Improved comfort profile for skin and eye sensitivity concerns',
  'Lower odor pressure in deck-side and indoor pool zones',
  'Simpler operating rhythm with controlled ionization support',
  'Suitable treatment planning across different pool sizes'
];

export const poolHealthBenefits = [
  'Copper helps prevent nerve damage.',
  'Copper strengthens the walls of blood vessels.',
  'Copper is essential for energy metabolism.',
  'Copper shares anti-inflammatory properties with zinc that support healing.',
  'Copper may influence taste perception.',
  'Copper helps prevent anemia, bone and skeletal defects, nervous system degeneration, hair color and structure issues, reproductive problems, and abnormal cardiovascular conditions.',
  'Copper is a component of collagen and elastin, which are essential for tendons and blood vessels.',
  'Women who are deficient in copper and iron may experience sleep disturbances.',
  'Copper is described as a potent anti-ulcer agent.',
  'Without sufficient copper, skin may become fragile, break more easily, and heal slowly.',
  'Copper deficiency can contribute to bone fracture risk.',
  'Inadequate copper levels can affect blood vessel integrity.',
  'Copper deficiency may contribute to elevated blood pressure concerns.',
  'Copper plays a role in immune system functionality.',
  'Copper is necessary for converting beta-carotene into vitamin A.',
  'A copper-deficient diet can interfere with transport of vitamin A from liver to bloodstream.',
  'Copper may have a role in cancer-prevention research contexts.',
  'Copper is identified as an antioxidant in the bloodstream.',
  'Copper, in the form of ceruloplasmin, helps prevent iron oxidation in blood.'
];

export const poolBenefitsSourceNote =
  'These 19 points are adapted from Section 1.A ("Benefits of Adding Copper to Your Lifestyle") in the client-shared Arroyo Pool Instruction Manual and are presented as informational reference points, not medical advice.';

export const poolMarketingReferenceVisuals = [
  {
    src: '/images/reference/pool-poster-main.png',
    alt: 'Pool ionization reference poster highlighting water clarity outcomes'
  },
  {
    src: '/images/reference/pool-poster-alt.png',
    alt: 'Pool program reference sheet with before and after clarity visuals'
  },
  {
    src: '/images/reference/pool-brochure-foldout.png',
    alt: 'Pool brochure foldout with treatment process and result framing'
  }
];

export const ionEdgeRefinement = {
  title: 'IonEdge Portable Water Cleaning Device',
  subtitle:
    'Portable multi-stage filtration and ionization for families, travel, rental stays, and emergency backup usage.',
  highlights: [
    'Compact, quick-setup operation with minimal handling complexity',
    'Structured filtration path for taste, odor, and clarity support',
    'Practical for apartments, temporary stays, and backup scenarios',
    'Designed for straightforward, repeatable daily use'
  ]
};

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
        'Flow, source water, usage pattern, and local rules change the answer. We work from your data—not from a one-size chart on a landing page.'
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
    'Share your application, approximate scale, and timeline. We will respond with clear next steps and the right technical contact.',
  linkLabel: 'Go to contact'
};

export const products: Product[] = [
  {
    slug: 'swimming-pool-ionization-system',
    name: 'Swimming Pool Ionization System',
    short: 'Premium ionization treatment for cleaner pool water and lower chlorine dependency.',
    description:
      'A consultation-led pool treatment system for hospitality, schools, societies, and premium residences seeking cleaner water presentation, reduced chlorine burden, and smoother daily maintenance routines.',
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
      'Improves water comfort profile for regular swimmers and guests',
      'Reduces chemical odor pressure in deck and indoor pool environments',
      'Helps simplify day-to-day maintenance planning for pool operators'
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
    image: '/images/updates/swimming-pool-ionization-system-1.png',
    imageAlt: 'Arroyo swimming pool ionization hardware with control unit and cell assembly',
    seoTitle: 'Swimming Pool Ionization System',
    seoDescription:
      'Controlled copper–silver–zinc pool ionization for hotels, schools, societies, and premium residential pools.'
  },
  {
    slug: 'ionedge-portable-water-cleaning-device',
    name: 'IonEdge Portable Water Cleaning Device',
    short: 'Portable filtration and ionization designed for dependable daily use.',
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
    image: '/images/updates/ionedge-portable-water-cleaning-device-1.png',
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
    image: '/images/products/whole-home-villa-system-premium.png',
    imageAlt: 'Arroyo whole-home villa treatment system with dual-tank assembly',
    seoTitle: 'Whole-Home Villa Water System',
    seoDescription:
      'Point-of-entry filtration and ionization for villas, boutique hotels, and institutional buildings.'
  }
];

export const footerTagline =
  'Pool ionization, portable purification, and property-wide water—engineered for teams who live with the chemistry every day.';
