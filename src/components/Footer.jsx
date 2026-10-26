import React, { useState } from 'react';
import { FiPhone, FiMail, FiMapPin, FiArrowUp, FiArrowUpRight, FiCheck } from 'react-icons/fi';
import sraLogo from '../assets/sra-logo.jpg';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ prefilledSubject = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: prefilledSubject || 'General Traditional Consultation',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const [prevPrefilledSubject, setPrevPrefilledSubject] = useState(prefilledSubject);
  if (prefilledSubject !== prevPrefilledSubject) {
    setPrevPrefilledSubject(prefilledSubject);
    if (prefilledSubject) {
      setFormData((prev) => ({
        ...prev,
        interest: prefilledSubject,
      }));
    }
  }

  const mapsUrl = 'https://share.google/MF64RNzh7p8CPa7Xv';

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Healer Profile', href: '#doctor' },
    { label: 'Treatments & Products', href: '#treatments' },
    { label: 'About the Clinic', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Location & Map', href: '#location' },
    { label: 'Gallery', href: '#gallery' },
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your phone number.';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (!formData.message.trim()) errs.message = 'Please provide a brief message.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      interest: 'General Traditional Consultation',
      message: '',
    });
    setSubmitted(false);
  };

  const whatsappUrl = `https://wa.me/919942611444?text=${encodeURIComponent(
    `Hello Sri Rama Acupuncture Clinic, my name is ${formData.name || 'a visitor'}. I am enquiring about ${formData.interest}. Message: ${formData.message}`
  )}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="bg-forest-deep text-ivory/85 pt-20 pb-28 lg:pb-14 border-t border-gold/40 scroll-mt-20 md:scroll-mt-24"
      aria-label="Clinic Contact and Footer Information"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Contact Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2.5 mb-3.5">
            <span className="w-6 h-[1.5px] bg-gold" aria-hidden="true" />
            <p className="text-[11px] sm:text-xs uppercase tracking-editorial font-medium text-gold-light">
              APPOINTMENTS & VISITING
            </p>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl text-ivory font-medium leading-[1.2]">
            Connect with Sri Rama Acupuncture Clinic.
          </h2>
        </div>

        {/* Two-Column Contact & Consultation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pb-16 border-b border-ivory/15">
          
          {/* Left Column: Direct Particulars (5 columns) */}
          <div className="lg:col-span-5 space-y-7 min-w-0">
            
            {/* Brand Header */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/60 flex-shrink-0 bg-ivory">
                <img
                  src={sraLogo}
                  alt="Sri Rama Acupuncture Clinic Emblem"
                  className="w-full h-full object-cover"
                  width="48"
                  height="48"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg sm:text-xl text-ivory font-semibold tracking-tight">
                  Sri Rama Acupuncture Clinic
                </h3>
                <p className="text-[10px] uppercase tracking-wider text-sage font-medium">
                  Chinnamanur · Theni District
                </p>
              </div>
            </div>

            {/* Direct Telephone */}
            <div className="pt-5 border-t border-ivory/15">
              <span className="text-[10px] uppercase tracking-editorial text-gold font-medium block mb-1">
                Direct Telephone
              </span>
              <a
                href="tel:9942611444"
                className="font-serif text-2xl text-ivory hover:text-gold transition-colors inline-flex items-center gap-2.5 py-1 min-h-[44px]"
              >
                <FiPhone className="text-gold text-lg flex-shrink-0" aria-hidden="true" />
                <span>99426 11444</span>
              </a>
              <p className="text-xs text-ivory/65 mt-0.5">
                Click to call directly for consultation times and general inquiries.
              </p>
            </div>

            {/* Email Address */}
            <div className="pt-5 border-t border-ivory/15">
              <span className="text-[10px] uppercase tracking-editorial text-gold font-medium block mb-1">
                Email Address
              </span>
              <a
                href="mailto:renugaramdass@gmail.com"
                className="text-sm sm:text-base text-ivory hover:text-gold transition-colors break-all inline-flex items-center gap-2 py-1 min-h-[44px]"
              >
                <FiMail className="text-gold flex-shrink-0" aria-hidden="true" />
                <span>renugaramdass@gmail.com</span>
              </a>
            </div>

            {/* Clinic Address & Map Link */}
            <div className="pt-5 border-t border-ivory/15">
              <span className="text-[10px] uppercase tracking-editorial text-gold font-medium block mb-1">
                Clinic Location
              </span>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-ivory/80 leading-relaxed font-sans mb-4">
                <FiMapPin className="text-gold mt-1 flex-shrink-0" aria-hidden="true" />
                <address className="not-italic">
                  43A, Agraharam Rd, Sri Rama Acupuncture Clinic<br />
                  Chinnamanur – 625515<br />
                  Theni district, Tamil Nadu
                </address>
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-forest-light hover:bg-forest text-ivory text-xs uppercase tracking-eyebrow font-medium px-4 py-2.5 border border-gold/40 transition-colors min-h-[44px]"
              >
                <FiMapPin className="text-gold text-xs" aria-hidden="true" />
                <span>Get Directions on Google Maps</span>
                <FiArrowUpRight className="text-xs text-gold" aria-hidden="true" />
              </a>
            </div>

          </div>

          {/* Right Column: Compact Consultation Form (7 columns) */}
          <div className="lg:col-span-7 bg-forest-deep/60 border border-ivory/20 p-6 sm:p-8 backdrop-blur-sm min-w-0">
            <h3 className="font-serif text-lg sm:text-xl text-ivory font-medium mb-1.5">
              Request a Consultation
            </h3>
            <p className="text-xs text-ivory/70 mb-6">
              Leave your details below. For immediate assistance, direct calling at 99426 11444 is recommended.
            </p>

            {submitted ? (
              <div className="p-6 bg-forest-light/60 border border-gold/40 text-center space-y-3">
                <div className="w-10 h-10 bg-gold text-forest-deep rounded-full flex items-center justify-center mx-auto text-lg">
                  <FiCheck aria-hidden="true" />
                </div>
                <h4 className="font-serif text-lg text-ivory font-medium">
                  Enquiry Registered
                </h4>
                <p className="text-xs text-ivory/80 max-w-sm mx-auto leading-relaxed">
                  Thank you. To speak directly with the clinic right now, dial directly or send your message via WhatsApp:
                </p>
                <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href="tel:9942611444"
                    className="inline-flex items-center justify-center gap-2 bg-gold text-forest-deep text-xs uppercase tracking-eyebrow font-semibold px-5 py-3 transition-colors min-h-[44px]"
                  >
                    <FiPhone aria-hidden="true" />
                    <span>Call 99426 11444</span>
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white text-xs uppercase tracking-eyebrow font-medium px-5 py-3 transition-opacity hover:opacity-90 min-h-[44px]"
                  >
                    <span>Send via WhatsApp</span>
                    <FiArrowUpRight aria-hidden="true" />
                  </a>
                </div>
                <div className="pt-3 border-t border-ivory/15">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="text-xs text-ivory/70 underline hover:text-gold py-1 min-h-[36px]"
                  >
                    Submit another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contactName"
                      className="block text-[11px] uppercase tracking-eyebrow text-gold-light mb-1"
                    >
                      Your Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. S. Ramanathan"
                      className="w-full px-3.5 py-2.5 bg-ivory/10 border border-ivory/25 text-sm text-ivory placeholder-ivory/40 focus:border-gold focus:outline-none"
                      required
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-300 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contactPhone"
                      className="block text-[11px] uppercase tracking-eyebrow text-gold-light mb-1"
                    >
                      Phone Number <span className="text-gold">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contactPhone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9942611444"
                      className="w-full px-3.5 py-2.5 bg-ivory/10 border border-ivory/25 text-sm text-ivory placeholder-ivory/40 focus:border-gold focus:outline-none"
                      required
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-300 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contactInterest"
                    className="block text-[11px] uppercase tracking-eyebrow text-gold-light mb-1"
                  >
                    Therapy / Concern Area
                  </label>
                  <select
                    id="contactInterest"
                    name="interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-forest-deep border border-ivory/25 text-sm text-ivory focus:border-gold focus:outline-none"
                  >
                    <option value="General Traditional Consultation">General Consultation</option>
                    <option value="Varicose Veins">Varicose Vein Concerns</option>
                    <option value="Sciatic Nerve">Sciatic Nerve Concerns</option>
                    <option value="Insomnia & Sleep">Insomnia & Sleep Concerns</option>
                    <option value="Varma Treatment">Classical Varma Treatment</option>
                    <option value="Thokkanam Bodywork">Thokkanam Bodywork</option>
                    <option value="Magnetic Therapy">Magnetic Therapy</option>
                    <option value="Wellness Products">Wellness Products Inquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contactMessage"
                    className="block text-[11px] uppercase tracking-eyebrow text-gold-light mb-1"
                  >
                    Brief Message <span className="text-gold">*</span>
                  </label>
                  <textarea
                    id="contactMessage"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your symptoms or preferred consultation time..."
                    className="w-full px-3.5 py-2.5 bg-ivory/10 border border-ivory/25 text-sm text-ivory placeholder-ivory/40 focus:border-gold focus:outline-none"
                    required
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-300 mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-forest-deep text-xs uppercase tracking-eyebrow font-semibold px-6 py-3.5 transition-colors min-h-[44px]"
                >
                  <span>Submit Consultation Request</span>
                  <FiArrowUpRight aria-hidden="true" />
                </button>
              </form>
            )}

          </div>

        </div>

        {/* Essential Navigation Links matching exact requested structure */}
        <div className="py-8 border-b border-ivory/10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs uppercase tracking-editorial text-gold font-medium">
              Navigation
            </span>
            <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ivory/75">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-gold transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/50">
          <p className="text-center sm:text-left">
            © {CURRENT_YEAR} Sri Rama Acupuncture Clinic. All rights reserved. 43A, Agraharam Rd, Chinnamanur – 625515.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-ivory/40">Established 5 Feb 2012</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-ivory/70 hover:text-gold transition-colors p-2 min-h-[44px]"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <FiArrowUp className="text-xs" aria-hidden="true" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
