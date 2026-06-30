import { useScrollAnimation } from '../hooks/useScrollAnimation';

function AnimatedSection({ children, className = '', delay = '' }: { children: React.ReactNode; className?: string; delay?: string }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? `animate-fade-in-up ${delay} opacity-0` : 'opacity-0'}`}
    >
      {children}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-[#1a2332] tracking-wide gold-line">
            Our Legacy
          </h2>
        </AnimatedSection>
        <div className="space-y-12">
          <AnimatedSection delay="animate-delay-100">
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-shadow duration-500">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 md:w-48 overflow-hidden rounded-lg">
                  <img src="/whatsapp_image_2026-01-09_at_12.49.56_(1).jpeg" alt="Justice Yusuf Usman Khan Pathan" className="w-full h-auto object-cover aspect-[3/4] hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex-1">
                  <div className="mb-6">
                    <h3 className="text-2xl font-heading text-[#1a2332]">Late Justice Yusuf Usman Khan Pathan</h3>
                    <p className="text-gray-600">Founder</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Justice Pathan served with honour as a Judge and devoted over 40+ years to the legal profession. With extensive Supreme Court experience, he acted as counsel to private institutions and central government bodies, earning widespread respect for his depth of legal knowledge and judicial wisdom.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    Remembered for delivering landmark and widely cited judgments, his commitment to justice, fairness, and ethical advocacy laid the cornerstone of the firm. His principles, integrity, and vision continue to guide the practice and philosophy of the firm to this day.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay="animate-delay-200">
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-shadow duration-500">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 md:w-48 overflow-hidden rounded-lg">
                  <img src="/whatsapp_image_2026-01-09_at_12.49.56_(2).jpeg" alt="Adv. Waris Yusuf Pathan" className="w-full h-auto object-cover aspect-[3/4] hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex-1">
                  <div className="mb-6">
                    <h3 className="text-2xl font-heading text-[#1a2332]">Adv. Waris Yusuf Pathan</h3>
                    <p className="text-gray-600 text-sm">Senior Advocate, National Spokesperson and ex-Member of the Maharashtra Legislative Assembly</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Advocate Waris Yusuf Pathan is a senior legal professional with over 30 years of Supreme Court experience and extensive practice across India's higher courts. He has served as a Member of the Maharashtra Legislative Assembly and is a recognised National Spokesperson, known for his articulate engagement on legal, constitutional, and public policy issues.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    With extensive experience in high-profile and celebrity matters, he has earned both courtroom respect and national media recognition. Continuing the legacy of public service and legal excellence, he combines seasoned advocacy with a strong commitment to representing clients with discretion, diligence, and integrity.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay="animate-delay-300">
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-xl transition-shadow duration-500">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0 md:w-48 overflow-hidden rounded-lg">
                  <img src="/whatsapp_image_2026-01-09_at_12.49.56.jpeg" alt="Adv. Arbaz Waris Pathan" className="w-full h-auto object-cover aspect-[3/4] hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex-1">
                  <div className="mb-6">
                    <h3 className="text-2xl font-heading text-[#1a2332]">Adv. Arbaz Waris Pathan</h3>
                    <p className="text-gray-600">Advocate</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Advocate Arbaz Waris Pathan is a third-generation lawyer with over 8 years of practical Supreme Court and High Court litigation experience, known for his focused approach and consistently strong outcomes in court. He represents a modern generation of advocacy while remaining deeply rooted in the firm's legacy values.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    With the expansion of the firm into Dubai, United Arab Emirates, he also leads and oversees international legal operations, providing comprehensive legal services across civil, criminal, corporate, commercial, arbitration, real estate, and cross-border matters. The Dubai branch strengthens the firm's global presence, offering clients strategic legal representation and consultancy across jurisdictions.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    In addition to his legal practice, he is actively involved in philanthropic initiatives and is a national-level animal rights activist, providing free legal assistance in matters related to animal welfare and protection laws. His work in socially significant cases has also drawn notable media attention, reflecting a balanced commitment to both professional excellence and social responsibility.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
