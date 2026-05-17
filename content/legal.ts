/**
 * Legal Center and policy page content for Arroyo Technologies.
 */

export const legalContact = {
  company: 'Arroyo Technologies',
  addressLines: [
    'SCO 1037, 2nd Floor, Near Arista Hotel,',
    'New Sunny Enclave, Sector 125, Kharar,',
    'Punjab 140301, India'
  ],
  phone: '+91 887 886 1111',
  email: 'info@arroyo-technologies.com',
  website: 'https://www.arroyo-technologies.com'
} as const;

export const legalCenterMeta = {
  lastUpdated: 'May 7, 2026',
  title: 'Legal Center',
  intro:
    'At Arroyo Technologies, we aim to provide reliable, transparent, and professionally managed water treatment solutions. This Legal Center explains the key policies that apply to our website, products, services, installations, warranties, refunds, data handling, and customer communication.',
  seo: {
    title: 'Legal Center',
    description:
      'Policies for privacy, terms, cookies, refunds, warranty, delivery, and product disclaimers from Arroyo Technologies.'
  }
};

export type PolicySection = {
  title: string;
  paragraphs?: string[];
  listItems?: string[];
};

export type PolicyDocument = {
  slug: string;
  href: string;
  title: string;
  cardDescription: string;
  effectiveDate: string;
  intro: string;
  sections: PolicySection[];
  seo: {
    title: string;
    description: string;
  };
};

export const policyDocuments: PolicyDocument[] = [
  {
    slug: 'privacy-policy',
    href: '/privacy-policy',
    title: 'Privacy Policy',
    cardDescription: 'How we collect, use, and protect personal information shared through our channels.',
    effectiveDate: 'May 7, 2026',
    intro:
      'Arroyo Technologies respects your privacy and is committed to protecting the personal information you share with us through our website, enquiry forms, advertisements, WhatsApp communication, phone calls, emails, and other digital channels.',
    sections: [
      {
        title: 'Information We Collect',
        paragraphs: [
          'We may collect information such as your name, phone number, email address, location, project requirements, enquiry details, communication records, and any other information voluntarily submitted through our contact forms, advertisements, calls, emails, or messaging platforms.'
        ]
      },
      {
        title: 'How We Use Your Information',
        paragraphs: [
          'Your information may be used to respond to enquiries, prepare quotations, provide service support, schedule installations, offer technical assistance, send follow-up communication, improve our services, optimize advertising campaigns, perform analytics, and manage customer relationships.'
        ]
      },
      {
        title: 'Advertising, Cookies, and Tracking',
        paragraphs: [
          'Our website may use cookies, Google Analytics, Meta Pixel, remarketing tools, lead tracking systems, and similar technologies to improve website functionality, understand visitor behavior, measure advertising performance, and provide relevant communication.'
        ]
      },
      {
        title: 'Sharing of Information',
        paragraphs: [
          'We may share limited information with trusted service providers such as payment gateways, advertising platforms, CRM systems, analytics providers, installation partners, and technical support teams strictly for business, operational, or service-related purposes.'
        ]
      },
      {
        title: 'Data Security',
        paragraphs: [
          'We apply reasonable administrative and technical safeguards to protect customer information against unauthorized access, misuse, loss, disclosure, or alteration.'
        ]
      },
      {
        title: 'Customer Rights',
        paragraphs: [
          'Customers may request access, correction, update, or deletion of their personal information by contacting Arroyo Technologies through official communication channels.'
        ]
      },
      {
        title: 'Contact',
        paragraphs: ['For privacy-related questions, contact us at info@arroyo-technologies.com.']
      }
    ],
    seo: {
      title: 'Privacy Policy',
      description:
        'How Arroyo Technologies collects, uses, and protects personal information shared through our website and communication channels.'
    }
  },
  {
    slug: 'terms-and-conditions',
    href: '/terms-and-conditions',
    title: 'Terms & Conditions',
    cardDescription: 'Terms governing use of our website, products, services, and customer engagements.',
    effectiveDate: 'May 7, 2026',
    intro:
      'By accessing the Arroyo Technologies website, submitting an enquiry, purchasing a product, or using our services, you agree to these Terms & Conditions.',
    sections: [
      {
        title: 'Products and Services',
        paragraphs: [
          'Arroyo Technologies provides pool ionization, water treatment solutions, installation services, technical recommendations, and related support services. All products and services are subject to availability, technical feasibility, site conditions, and operational suitability.'
        ]
      },
      {
        title: 'Quotations and Pricing',
        paragraphs: [
          'Prices shared through quotations, proposals, advertisements, or communication channels may vary depending on project scope, customization, logistics, installation requirements, taxes, and site-specific conditions.'
        ]
      },
      {
        title: 'Customer Responsibilities',
        paragraphs: [
          'Customers are responsible for providing accurate information, ensuring site readiness, maintaining proper electrical and plumbing conditions, following operational instructions, and allowing safe access for delivery or installation teams.'
        ]
      },
      {
        title: 'Intellectual Property',
        paragraphs: [
          'All website content, images, designs, graphics, documents, branding, product descriptions, and materials are the property of Arroyo Technologies unless stated otherwise. They may not be copied, modified, distributed, or used without prior written permission.'
        ]
      },
      {
        title: 'Limitation of Liability',
        paragraphs: [
          'Arroyo Technologies shall not be liable for indirect damages, operational losses, third-party service failures, external maintenance issues, unauthorized modifications, improper usage, or damages caused by conditions beyond our control.'
        ]
      },
      {
        title: 'Updates and Modifications',
        paragraphs: [
          'Arroyo Technologies reserves the right to update website content, product information, pricing, services, and policies at any time without prior notice.'
        ]
      },
      {
        title: 'Contact',
        paragraphs: ['For questions regarding these Terms & Conditions, contact info@arroyo-technologies.com.']
      }
    ],
    seo: {
      title: 'Terms & Conditions',
      description:
        'Terms and conditions for using the Arroyo Technologies website, products, and services.'
    }
  },
  {
    slug: 'cookie-policy',
    href: '/cookie-policy',
    title: 'Cookie Policy',
    cardDescription: 'How cookies and tracking technologies are used on our website.',
    effectiveDate: 'May 7, 2026',
    intro:
      'Arroyo Technologies uses cookies and similar technologies to improve website performance, enhance user experience, support advertising activity, and understand how visitors interact with our website.',
    sections: [
      {
        title: 'Use of Cookies',
        paragraphs: [
          'Cookies may be used to remember user preferences, improve website functionality, measure traffic, analyze visitor behavior, and support marketing or remarketing campaigns.'
        ]
      },
      {
        title: 'Analytics and Tracking',
        paragraphs: [
          'We may use tools such as Google Analytics, Meta Pixel, advertising pixels, remarketing technologies, and campaign tracking tools to understand website performance and improve communication with potential customers.'
        ]
      },
      {
        title: 'Advertising Optimization',
        paragraphs: [
          'Tracking technologies may help us measure campaign performance, optimize lead generation, analyze audiences, and show relevant advertisements across digital platforms.'
        ]
      },
      {
        title: 'Managing Cookies',
        paragraphs: [
          'Users can disable or manage cookies through their browser settings. However, some website features may not function properly if cookies are disabled.'
        ]
      },
      {
        title: 'Consent',
        paragraphs: [
          'By continuing to use our website, you consent to the use of cookies and similar technologies in accordance with this Cookie Policy.'
        ]
      },
      {
        title: 'Contact',
        paragraphs: ['For cookie-related questions, contact info@arroyo-technologies.com.']
      }
    ],
    seo: {
      title: 'Cookie Policy',
      description:
        'How Arroyo Technologies uses cookies, analytics, and advertising tracking on this website.'
    }
  },
  {
    slug: 'refund-and-cancellation-policy',
    href: '/refund-and-cancellation-policy',
    title: 'Refund & Cancellation Policy',
    cardDescription: 'How refund and cancellation requests are reviewed and processed.',
    effectiveDate: 'May 7, 2026',
    intro:
      'Refund and cancellation requests are reviewed based on the product type, project stage, customization level, dispatch status, installation progress, and operational expenses already incurred.',
    sections: [
      {
        title: 'General Policy',
        paragraphs: [
          'Each refund or cancellation request is evaluated individually. Approval depends on the condition of the product, project status, payment terms, and whether procurement, customization, dispatch, or installation work has already started.'
        ]
      },
      {
        title: 'Customized Orders',
        paragraphs: [
          'Customized systems, commercial solutions, made-to-order products, and project-specific components may not be eligible for cancellation or refund once production, procurement, or configuration has started.'
        ]
      },
      {
        title: 'Cancellation Requests',
        paragraphs: [
          'Cancellation requests must be submitted through official communication channels before dispatch, installation scheduling, or procurement confirmation.'
        ]
      },
      {
        title: 'Refund Processing',
        paragraphs: [
          'Approved refunds are generally processed within 7 to 14 business days, depending on the payment method, bank timelines, and internal review.'
        ]
      },
      {
        title: 'Applicable Deductions',
        paragraphs: [
          'Operational costs, logistics charges, inspection costs, payment processing fees, customization expenses, and administrative charges may be deducted where applicable.'
        ]
      },
      {
        title: 'Non-Refundable Cases',
        paragraphs: [
          'Products damaged due to customer negligence, improper site conditions, unauthorized handling, misuse, third-party interference, or failure to follow operational instructions may not qualify for refund.'
        ]
      },
      {
        title: 'Contact',
        paragraphs: ['For refund or cancellation requests, contact info@arroyo-technologies.com.']
      }
    ],
    seo: {
      title: 'Refund & Cancellation Policy',
      description:
        'Refund and cancellation terms for Arroyo Technologies products and services.'
    }
  },
  {
    slug: 'warranty-and-replacement-policy',
    href: '/warranty-and-replacement-policy',
    title: 'Warranty & Replacement Policy',
    cardDescription: 'Limited warranty coverage, exclusions, and replacement support process.',
    effectiveDate: 'May 7, 2026',
    intro:
      'Arroyo Technologies provides limited warranty coverage for eligible products against manufacturing defects and internal component failures under normal operating conditions.',
    sections: [
      {
        title: 'Warranty Coverage',
        paragraphs: [
          'Warranty may cover repair, replacement of defective parts, technical inspection, and operational support where applicable.'
        ]
      },
      {
        title: 'Warranty Duration',
        paragraphs: [
          'Warranty duration may vary depending on product category, residential or commercial usage, service agreement terms, and purchase documentation provided at the time of sale.'
        ]
      },
      {
        title: 'Covered Under Warranty',
        paragraphs: [
          'Eligible warranty claims may include verified manufacturing defects, internal component failures, and technical issues occurring under normal operating conditions.'
        ]
      },
      {
        title: 'Exclusions',
        paragraphs: [
          'Warranty does not cover damage caused by electrical fluctuations, improper maintenance, physical damage, unauthorized modifications, misuse, environmental factors, poor water conditions, third-party handling, negligence, or failure to follow operating instructions.'
        ]
      },
      {
        title: 'Replacement Conditions',
        paragraphs: [
          'Replacement requests are subject to technical verification and approval by Arroyo Technologies. Only verified defective products or components may qualify for replacement.'
        ]
      },
      {
        title: 'Support Process',
        paragraphs: [
          'Customers must provide proof of purchase, issue details, product images or videos, and any supporting information requested by the technical team.'
        ]
      },
      {
        title: 'Operational Conditions',
        paragraphs: [
          'Product performance depends on water quality, pool condition, usage patterns, operating environment, and maintenance standards.'
        ]
      },
      {
        title: 'Contact',
        paragraphs: ['For warranty support, contact info@arroyo-technologies.com.']
      }
    ],
    seo: {
      title: 'Warranty & Replacement Policy',
      description:
        'Warranty coverage, exclusions, and replacement support for Arroyo Technologies products.'
    }
  },
  {
    slug: 'delivery-and-installation-policy',
    href: '/delivery-and-installation-policy',
    title: 'Delivery & Installation Policy',
    cardDescription: 'Delivery coverage, timelines, site readiness, and installation scope.',
    effectiveDate: 'May 7, 2026',
    intro:
      'Arroyo Technologies provides delivery and installation services across selected locations, subject to operational feasibility, product availability, logistics, and site conditions.',
    sections: [
      {
        title: 'Delivery Coverage',
        paragraphs: [
          'Delivery services are available in selected regions and may depend on product type, project size, serviceability, and logistics availability.'
        ]
      },
      {
        title: 'Estimated Timelines',
        paragraphs: [
          'Standard delivery timelines may range from 3 to 7 business days. Commercial projects, customized systems, and large-scale installations may require additional time.'
        ]
      },
      {
        title: 'Installation Scheduling',
        paragraphs: [
          'Installation is scheduled after payment confirmation, product readiness, technical review, and site verification where applicable.'
        ]
      },
      {
        title: 'Site Readiness',
        paragraphs: [
          'Customers must ensure safe working conditions, electrical supply, plumbing access, operational readiness, and required permissions before installation.'
        ]
      },
      {
        title: 'Inspection at Delivery',
        paragraphs: [
          'Customers are advised to inspect products at the time of delivery and immediately report any visible damage, missing parts, or packaging concerns.'
        ]
      },
      {
        title: 'Installation Scope',
        paragraphs: [
          'Standard installation includes basic setup, core functionality testing, and operational demonstration unless otherwise agreed in writing.'
        ]
      },
      {
        title: 'Delay Conditions',
        paragraphs: [
          'Arroyo Technologies shall not be responsible for delays caused by weather, transport disruption, supplier delays, customer-side readiness issues, force majeure, or external operational limitations.'
        ]
      },
      {
        title: 'Contact',
        paragraphs: ['For delivery or installation support, contact info@arroyo-technologies.com.']
      }
    ],
    seo: {
      title: 'Delivery & Installation Policy',
      description:
        'Delivery coverage, installation scheduling, and site readiness requirements for Arroyo Technologies.'
    }
  },
  {
    slug: 'product-disclaimer',
    href: '/product-disclaimer',
    title: 'Product Disclaimer',
    cardDescription: 'Important limitations on product performance and customer responsibilities.',
    effectiveDate: 'May 7, 2026',
    intro:
      'Arroyo Technologies provides pool ionization and water treatment solutions designed to support improved water management and reduced chemical dependency.',
    sections: [
      {
        title: 'General Disclaimer',
        paragraphs: [
          'Our products and solutions are intended to assist with water treatment and pool maintenance. They do not eliminate the customer’s responsibility to maintain proper water hygiene, balance, and operating conditions.'
        ]
      },
      {
        title: 'Performance Variations',
        paragraphs: [
          'Actual results may vary depending on pool size, water quality, usage patterns, environmental conditions, maintenance quality, installation conditions, and operational practices.'
        ]
      },
      {
        title: 'No Guaranteed Results',
        paragraphs: [
          'Performance estimates, savings calculations, reduced chemical usage claims, operational benefits, and website or advertisement statements are indicative in nature and should not be treated as guaranteed outcomes.'
        ]
      },
      {
        title: 'Maintenance Responsibility',
        paragraphs: [
          'Customers remain responsible for regular pool maintenance, hygiene management, water testing, cleaning, and compliance with applicable safety or health standards.'
        ]
      },
      {
        title: 'Technical Evaluation',
        paragraphs: [
          'Recommendations are based on available project information and may require further technical inspection, site evaluation, or installation-stage assessment.'
        ]
      },
      {
        title: 'Contact',
        paragraphs: ['For product-related questions, contact info@arroyo-technologies.com.']
      }
    ],
    seo: {
      title: 'Product Disclaimer',
      description:
        'Product performance disclaimers and customer responsibilities for Arroyo Technologies water treatment solutions.'
    }
  }
];

export const footerLegalLinks = [
  { href: '/legal', label: 'Legal Center' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-and-conditions', label: 'Terms & Conditions' },
  { href: '/cookie-policy', label: 'Cookie Policy' },
  { href: '/refund-and-cancellation-policy', label: 'Refund & Cancellation' },
  { href: '/warranty-and-replacement-policy', label: 'Warranty & Replacement' },
  { href: '/delivery-and-installation-policy', label: 'Delivery & Installation' },
  { href: '/product-disclaimer', label: 'Product Disclaimer' }
] as const;

export function getPolicyByHref(href: string): PolicyDocument | undefined {
  return policyDocuments.find((policy) => policy.href === href);
}
