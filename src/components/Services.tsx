import { Scale, FileText, Home, Users, Globe, Building, Film, Copyright, Gavel, Briefcase, Shield, Truck, BookOpen } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Scale,
    title: 'Criminal Litigation',
    description: 'Comprehensive criminal defense including Bails, Trials, and Quashing proceedings',
    featured: true
  },
  {
    icon: FileText,
    title: 'Investigation & Compliance',
    description: 'Expert guidance through investigative procedures and regulatory compliance'
  },
  {
    icon: Gavel,
    title: 'Civil Litigation',
    description: 'Full-spectrum civil litigation services with strategic representation'
  },
  {
    icon: Home,
    title: 'Property Matters',
    description: 'Complete property law solutions including disputes and transactions'
  },
  {
    icon: FileText,
    title: 'Writ Petitions & PIL',
    description: 'Constitutional remedies and public interest litigation'
  },
  {
    icon: Users,
    title: 'Family Law & Matrimonial',
    description: 'Sensitive handling of family disputes and matrimonial matters'
  },
  {
    icon: Globe,
    title: 'International Litigation',
    description: 'Cross-border legal disputes and international representation',
    highlighted: true
  },
  {
    icon: Building,
    title: 'Tribunal Matters',
    description: 'Central and State Tribunal representation across all forums'
  },
  {
    icon: Home,
    title: 'Real Estate',
    description: 'Comprehensive real estate law services and advisory'
  },
  {
    icon: Film,
    title: 'Media & Entertainment',
    description: 'Legal services for media, entertainment, and creative industries'
  },
  {
    icon: Copyright,
    title: 'IP Rights',
    description: 'Copyright, Trademark registration and protection services'
  },
  {
    icon: Scale,
    title: 'Dispute Resolution',
    description: 'Alternative dispute resolution including mediation and arbitration'
  },
  {
    icon: Briefcase,
    title: 'International Arbitration',
    description: 'Expert international arbitration and cross-border dispute resolution',
    highlighted: true
  },
  {
    icon: Globe,
    title: 'Immigration',
    description: 'Immigration law and visa matters with international expertise',
    highlighted: true
  },
  {
    icon: Home,
    title: 'International Property',
    description: 'International property transactions and cross-border real estate matters',
    highlighted: true
  },
  {
    icon: Shield,
    title: 'Animal Welfare',
    description: 'Legal advocacy for animal protection and welfare rights',
    highlighted: true
  },
  {
    icon: BookOpen,
    title: 'NGO & Nonprofit',
    description: 'Comprehensive legal services for non-governmental and nonprofit organizations',
    highlighted: true
  },
  {
    icon: Truck,
    title: 'Transportation & Logistics Law',
    description: 'Legal services covering transportation, shipping, and logistics matters',
    highlighted: true
  },
  {
    icon: Briefcase,
    title: 'Bankruptcy & Insolvency',
    description: 'Comprehensive bankruptcy and insolvency proceedings representation',
    highlighted: true
  },
  {
    icon: Shield,
    title: 'Human Rights',
    description: 'Dedicated advocacy for human rights protection and constitutional safeguards',
    highlighted: true
  }
];

function AnimatedCard({ children, index }: { children: React.ReactNode; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  const delays = ['animate-delay-100', 'animate-delay-200', 'animate-delay-300', 'animate-delay-400', 'animate-delay-500', 'animate-delay-600'];
  const delay = delays[index % delays.length];
  return (
    <div
      ref={ref}
      className={`${isVisible ? `animate-fade-in-up ${delay} opacity-0` : 'opacity-0'}`}
    >
      {children}
    </div>
  );
}

export default function Services() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? 'animate-fade-in-up opacity-0' : 'opacity-0'}`}
        >
          <h2 className="text-4xl md:text-5xl font-heading text-[#1a2332] mb-6 tracking-wide gold-line">
            Practice Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Providing comprehensive legal services across India with expertise spanning multiple domains
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHighlighted = service.highlighted || service.featured;
            return (
              <AnimatedCard key={index} index={index}>
                <div
                  className={`bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 border-t-4 hover:-translate-y-1 ${
                    isHighlighted ? 'border-[#d4af37] ring-1 ring-[#d4af37]/20' : 'border-[#1a2332]'
                  }`}
                >
                  <Icon className={`w-12 h-12 mb-4 transition-transform duration-300 group-hover:scale-110 ${isHighlighted ? 'text-[#d4af37]' : 'text-[#1a2332]'}`} strokeWidth={1.5} />
                  <h3 className="text-xl font-heading text-[#1a2332] mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
