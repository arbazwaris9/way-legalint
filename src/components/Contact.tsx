import { useState } from 'react';
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
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Something went wrong. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
  };

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
                <MapPin className="w-6 h-6 text-[#d4af37] mt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
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
                <MapPin className="w-6 h-6 text-[#d4af37] mt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
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
                <Phone className="w-6 h-6 text-[#d4af37] mt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <div>
                  <h3 className="text-lg font-heading text-[#1a2332] mb-2">Phone Numbers</h3>
                  <p className="text-gray-600 leading-relaxed">
                    <a href="tel:02222644576" className="block hover:text-[#d4af37] transition-colors">022-22644576</a>
                    <a href="tel:+919833499354" className="block hover:text-[#d4af37] transition-colors">+91 9833499354</a>
                    <a href="tel:+919021749766" className="block hover:text-[#d4af37] transition-colors">+91 9021749766</a>
                  </p>
                </div>
              </div>
            </AnimatedBlock>

            <AnimatedBlock delay="animate-delay-300">
              <div className="flex items-start space-x-4 group">
                <Mail className="w-6 h-6 text-[#d4af37] mt-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <div>
                  <h3 className="text-lg font-heading text-[#1a2332] mb-2">Email</h3>
                  
                    href="mailto:admin@waylegalinternational.com"
                    className="text-gray-600 hover:text-[#d4af37] transition-colors"
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

              {submitted ? (
                <div className="text-center py-10">
                  <h4 className="text-xl font-heading text-[#1a2332] mb-2">Thank you!</h4>
                  <p className="text-gray-600">
                    Your enquiry has been received. Our team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-3"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don't fill this out: <input name="bot-field" />
                    </label>
                  </p>

                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    className="w-full border p-3 rounded"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full border p-3 rounded"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full border p-3 rounded"
                  />

                  <select name="matter" className="w-full border p-3 rounded">
                    <option value="">Select Matter Type</option>
                    <option>Criminal Litigation</option>
                    <option>Constitutional Law</option>
                    <option>Animal Law</option>
                    <option>Civil Dispute</option>
                    <option>Corporate Advisory</option>
                    <option>Other</option>
                  </select>

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Briefly describe your matter"
                    required
                    className="w-full border p-3 rounded"
                  />

                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-[#d4af37] text-white px-6 py-3 rounded hover:opacity-90 disabled:opacity-50"
                  >
                    {submitting ? 'Sending...' : 'Submit Inquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
