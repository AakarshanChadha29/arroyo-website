/**
 * Curated keyword → answer map for /api/product-help.
 * Keep answers factual and conservative; never assert certifications or metrics not in approved docs.
 */

export const knowledgeBase = [
  {
    topic: 'pool ionization',
    keywords: [
      'pool',
      'chlorine',
      'ionization',
      'algae',
      'hotel',
      'society',
      'resort',
      'school',
      'which system',
      'best for'
    ],
    answer:
      'The swimming pool ionization line uses controlled copper, silver, and zinc ions to support algae and bacteria control and often allows lower oxidizer demand. It is intended for hotels, resorts, societies, schools, wellness facilities, and large residential pools. Final sizing depends on volume, hydraulics, and local requirements—request a consultation for a written proposal.'
  },
  {
    topic: 'ionedge',
    keywords: ['ionedge', 'portable', 'travel', 'battery', 'filters', 'student', 'rental', 'emergency'],
    answer:
      'IonEdge is the portable product: staged sediment, carbon, and ultra filtration plus ionization in a battery-operated unit. It suits travel, temporary housing, students, renters, and backup scenarios—not a substitute for fixed municipal treatment where regulations require it.'
  },
  {
    topic: 'whole home',
    keywords: ['villa', 'whole home', 'whole-home', 'tap', 'building', 'institution', 'boutique', 'property'],
    answer:
      'The whole-home / villa system is a point-of-entry train for consistent treated water at multiple draws—typical for villas, boutique hotels, and some institutional buildings. Flow, incoming water quality, and code drive sizing; ask for a mechanical review before assuming equivalence to RO or softening.'
  },
  {
    topic: 'cost savings',
    keywords: ['saving', 'cost', 'roi', 'payback', 'labour', 'labor', 'reduce'],
    answer:
      'Many operators target lower chemical spend and maintenance time with ionization programs, but results vary with bather load, source water, and how the system is run. We provide project-specific discussion and documentation rather than generic savings percentages on the public site.'
  },
  {
    topic: 'compliance',
    keywords: ['compliance', 'certification', 'bis', 'cpcb', 'gazette', 'nsf', 'iso', 'patent', 'warranty', 'legal'],
    answer:
      'We do not state ISO, BIS, NSF, patent, warranty, or medical outcomes here without client-approved references. Product-specific technical and compliance documentation is available on request after scoping your application. See the Documentation page for publishing rules.'
  },
  {
    topic: 'chlorine dependency',
    keywords: ['chlorine dependency', 'less chlorine', 'fewer chemicals', 'chemical'],
    answer:
      'Arroyo systems are engineered to reduce reliance on heavy chlorination when operated per program guidelines. Most sites retain a residual oxidizer at a moderated level; exact chemistry targets are set during commissioning and must respect local health rules.'
  }
];

export function answerFromKnowledge(question: string): string {
  const normalized = question.toLowerCase().trim();
  if (!normalized) {
    return 'Enter a short question, or tap a suggested prompt above.';
  }

  const scored = knowledgeBase
    .map((item) => ({
      item,
      score: item.keywords.reduce((sum, kw) => sum + (normalized.includes(kw.toLowerCase()) ? 1 : 0), 0)
    }))
    .sort((a, b) => b.score - a.score);

  if (!scored[0] || scored[0].score === 0) {
    return 'Try words like pool, hotel, chlorine, IonEdge, portable, villa, whole home, or compliance—or contact us with your site details.';
  }

  return scored[0].item.answer;
}
