import { MapPin, Phone, Mail } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function AnimatedBlock({ children, delay = '' }: { children: React.ReactNode; delay?: string }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`${isVisible ? `animate-fade-in-up ${delay} opacity-0` : 'opacity-0'}`}
    >
      {children}
    </div>
  );
}

export default function Contact() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? 'animate-fade-in-up opacity-0' : 'opacity-0'}`}
        >
          <h2 className="text-4xl md:text-5xl font-heading text-[#1a2332] tracking-wide gold-line">
            Contact Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div className="space-y-8">
            <AnimatedBlock>
              <div className="flex items-start space-x-4 group">
                <MapPin className="w-6 h-6 text-[#d4af37] mt-1" />
                <div>
                  <h3 className="text-lg font-heading text-[#1a2332] mb-2">Mumbai Head Office</h3>
                  <p className="text-gray-600 leading-relaxed">
                    3rd Floor, Yashwant Chambers<br />
                    Kalaghoda, Fort<br />
                    Mumbai - 400001<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>
            </AnimatedBlock>

            <AnimatedBlock delay="animate-delay-100">
              <div className="flex items-start space-x-4 group">
                <MapPin className="w-6 h-6 text-[#d4af37] mt-1" />
                <div>
                  <h3 className="text-lg font-heading text-[#1a2332] mb-2">Dubai Office</h3>
                  <p className="text-gray-600 leading-relaxed">
                    701, Damac Business Tower<br />
                    Marasi Drive, Business Bay<br />
                    Dubai, UAE
                  </p>
                </div>
              </div>
            </AnimatedBlock>

            <AnimatedBlock delay="animate-delay-200">
              <div className="flex items-start space-x-4 group">
                <Phone className="w-6 h-6 text-[#d4af37] mt-1" />
                <div>
                  <h3 className="text-lg font-heading text-[#1a2332] mb-2">Phone Numbers</h3>
                  <p className="text-gray-600 leading-relaxed">
                    <a href="tel:02222644576" className="block hover:text-[#d4af37]">022-22644576</a>
                    <a href="tel:+919833499354" className="block hover:text-[#d4af37]">+91 9833499354</a>
                    <a href="tel:+919021749766" className="block hover:text-[#d4af37]">+91 9021749766</a>
                  </p>
                </div>
              </div>
            </AnimatedBlock>

            <AnimatedBlock delay="animate-delay-300">
              <div className="flex items-start space-x-4 group">
                <Mail className="w-6 h-6 text-[#d4af37] mt-1" />
                <div>
                  <h3 className="text-lg font-heading text-[#1a2332] mb-2">Email</h3>
                  <a
                    href="mailto:admin@waylegalinternational.com"
                    className="text-gray-600 hover:text-[#d4af37]"
                  >
                    admin@waylegalinternational.com
                  </a>
                </div>
              </div>
            </AnimatedBlock>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg border animate-fade-in-up animate-delay-300">
              <h3 className="text-2xl font-heading text-[#1a2332] mb-6">
                Request a Consultation
              </h3>

              <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />

                <p hidden>
                  <input name="bot-field" />
                </p>

                <input name="name" placeholder="Full Name" required className="w-full border p-3 rounded mb-3" />
                <input name="email" placeholder="Email Address" required className="w-full border p-3 rounded mb-3" />
                <input name="phone" placeholder="Phone Number" className="w-full border p-3 rounded mb-3" />

                <select name="matter" className="w-full border p-3 rounded mb-3">
                  <option value="">Select Matter Type</option>
                  <option>Criminal Litigation</option>
                  <option>Constitutional Law</option>
                  <option>Animal Law</option>
                  <option>Civil Dispute</option>
                  <option>Corporate Advisory</option>
                  <option>Other</option>
                </select>

                <textarea name="message" rows={5} className="w-full border p-3 rounded mb-3" />

                <button type="submit" className="bg-[#d4af37] text-white px-6 py-3 rounded">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
