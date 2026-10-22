import React, { useState } from 'react';
import { FiPhone, FiMail, FiMapPin, FiArrowUpRight, FiCheck } from 'react-icons/fi';

export default function Contact({ prefilledSubject = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: prefilledSubject || 'General Consultation',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const mapsUrl =
    'https://www.google.com/maps/search/?api=1&query=Sri%20Rama%20Acupuncture%20Clinic%20109%20Agraharam%20Chinnamanur%20625515%20Tamil%20Nadu';

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
      interest: 'General Consultation',
      message: '',
    });
    setSubmitted(false);
  };

  // WhatsApp quick assist text generator
  const whatsappUrl = `https://wa.me/919942611444?text=${encodeURIComponent(
    `Hello Sri Rama Acupuncture Clinic, my name is ${formData.name || 'a visitor'}. I am enquiring about ${formData.interest}. Message: ${formData.message}`
  )}`;

  return (
    <section
      id="contact"
      className="py-24 md:py-36 bg-ivory relative"
      aria-label="Appointment and Contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-24">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-6 h-[1.5px] bg-gold" aria-hidden="true" />
            <p className="text-xs uppercase tracking-editorial font-medium text-forest">
              APPOINTMENT & ENQUIRIES
            </p>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-forest-deep font-medium leading-[1.25]">
            Connect with the clinic to arrange your consultation.
          </h2>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Official Contact Particulars (5 columns) */}
          <div className="lg:col-span-5 space-y-8 sm:space-y-10 min-w-0 w-full">
            <div className="bg-pure-white border border-charcoal/10 p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-8">
              
              <div>
                <span className="text-[11px] uppercase tracking-editorial text-gold font-medium block mb-1">
                  Clinic Name
                </span>
                <p className="font-serif text-xl sm:text-2xl text-forest-deep font-semibold">
                  Sri Rama Acupuncture Clinic
                </p>
                <p className="text-xs uppercase tracking-eyebrow text-charcoal-muted mt-0.5">
                  Chinnamanur · Theni District
                </p>
              </div>

              {/* Telephone */}
              <div className="pt-6 border-t border-charcoal/10">
                <span className="text-[11px] uppercase tracking-editorial text-gold font-medium block mb-2">
                  Telephone (Direct Call)
                </span>
                <a
                  href="tel:9942611444"
                  className="font-serif text-xl sm:text-2xl md:text-3xl text-forest hover:text-forest-deep font-medium flex items-center gap-3 group transition-colors min-h-[44px]"
                >
                  <FiPhone className="text-gold text-lg sm:text-xl group-hover:scale-110 transition-transform flex-shrink-0" aria-hidden="true" />
                  <span>99426 11444</span>
                </a>
                <p className="text-xs text-charcoal-muted mt-1.5">
                  Click to dial directly for consultation scheduling and questions.
                </p>
              </div>

              {/* Email Address */}
              <div className="pt-6 border-t border-charcoal/10">
                <span className="text-[11px] uppercase tracking-editorial text-gold font-medium block mb-2">
                  Email Address
                </span>
                <a
                  href="mailto:renugaramdass@gmail.com"
                  className="text-sm sm:text-base md:text-lg text-forest hover:text-forest-deep font-medium flex items-center gap-2.5 break-all transition-colors min-h-[44px]"
                >
                  <FiMail className="text-gold flex-shrink-0" aria-hidden="true" />
                  <span>renugaramdass@gmail.com</span>
                </a>
              </div>

              {/* Clinic Address */}
              <div className="pt-6 border-t border-charcoal/10">
                <span className="text-[11px] uppercase tracking-editorial text-gold font-medium block mb-2">
                  Clinic Location
                </span>
                <address className="not-italic text-sm sm:text-base text-charcoal-soft font-normal leading-relaxed space-y-1">
                  <p className="font-serif text-base sm:text-lg text-forest-deep font-semibold">109, Agraharam</p>
                  <p>Sri Rama Acupuncture Clinic</p>
                  <p>Chinnamanur – 625515</p>
                  <p>Theni district, Tamil Nadu</p>
                </address>

                <div className="mt-6">
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-ivory hover:bg-forest/5 text-forest border border-forest/30 px-5 py-3 text-xs uppercase tracking-eyebrow font-medium transition-colors w-full sm:w-auto min-h-[44px]"
                  >
                    <FiMapPin className="text-gold text-sm flex-shrink-0" aria-hidden="true" />
                    <span>Get Directions on Google Maps</span>
                    <FiArrowUpRight className="text-xs text-charcoal-muted flex-shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Consultation Enquiry Form (7 columns) */}
          <div className="lg:col-span-7 min-w-0 w-full">
            <div className="bg-pure-white border border-charcoal/10 p-6 sm:p-8 md:p-12">
              
              <div className="mb-6 sm:mb-8">
                <span className="text-[11px] uppercase tracking-editorial text-gold font-medium block mb-2">
                  CONSULTATION ENQUIRY
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-forest-deep font-medium">
                  Send a Message or Request Consultation
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted mt-2 leading-relaxed">
                  Fill in your details below. For urgent scheduling, direct telephone contact at 99426 11444 is recommended.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 sm:p-8 bg-ivory border border-forest/20 text-center space-y-4">
                  <div className="w-12 h-12 bg-forest text-gold rounded-full flex items-center justify-center mx-auto text-xl">
                    <FiCheck aria-hidden="true" />
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl text-forest-deep font-medium">
                    Thank you for your enquiry
                  </h4>
                  <p className="text-sm text-charcoal-soft max-w-md mx-auto leading-relaxed">
                    Your details have been registered on this form interface. To directly reach the clinic team right now, you may call directly or forward these details via WhatsApp:
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                    <a
                      href="tel:9942611444"
                      className="inline-flex items-center justify-center gap-2 bg-forest text-ivory text-xs uppercase tracking-eyebrow font-medium px-6 py-3.5 transition-colors min-h-[44px]"
                    >
                      <FiPhone className="text-gold" aria-hidden="true" />
                      <span>Call 99426 11444</span>
                    </a>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white text-xs uppercase tracking-eyebrow font-medium px-6 py-3.5 transition-opacity hover:opacity-90 min-h-[44px]"
                    >
                      <span>Send via WhatsApp</span>
                      <FiArrowUpRight aria-hidden="true" />
                    </a>
                  </div>
                  <div className="pt-6 border-t border-charcoal/10">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="text-xs text-charcoal-muted underline hover:text-forest py-2 min-h-[40px]"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs uppercase tracking-eyebrow font-medium text-forest-deep mb-2"
                    >
                      Full Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. S. Ramanathan"
                      className={`w-full px-4 py-3.5 bg-ivory/50 border text-sm text-charcoal focus:bg-pure-white transition-colors ${
                        errors.name ? 'border-red-500' : 'border-charcoal/20 focus:border-forest'
                      }`}
                      required
                    />
                    {errors.name && (
                      <p className="text-xs text-red-600 mt-1 font-sans">{errors.name}</p>
                    )}
                  </div>

                  {/* Phone field */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs uppercase tracking-eyebrow font-medium text-forest-deep mb-2"
                    >
                      Phone Number <span className="text-gold">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9942611444"
                      className={`w-full px-4 py-3.5 bg-ivory/50 border text-sm text-charcoal focus:bg-pure-white transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-charcoal/20 focus:border-forest'
                      }`}
                      required
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600 mt-1 font-sans">{errors.phone}</p>
                    )}
                  </div>

                  {/* Service / Topic Select */}
                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-xs uppercase tracking-eyebrow font-medium text-forest-deep mb-2"
                    >
                      Area of Concern or Service Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3.5 bg-ivory/50 border border-charcoal/20 text-sm text-charcoal focus:bg-pure-white focus:border-forest transition-colors"
                    >
                      <option value="General Consultation">General Traditional Consultation</option>
                      <option value="Varicose Veins">Varicose Vein-Related Concerns</option>
                      <option value="Sciatic Nerve">Sciatic Nerve-Related Concerns</option>
                      <option value="Insomnia & Sleep">Insomnia & Sleep Concerns</option>
                      <option value="Varma Treatment">Classical Varma Treatment</option>
                      <option value="Thokkanam Bodywork">Thokkanam Traditional Bodywork</option>
                      <option value="Magnetic Therapy">Magnetic Therapy</option>
                      <option value="Wellness Products">Wellness Products & Devices Enquiry</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs uppercase tracking-eyebrow font-medium text-forest-deep mb-2"
                    >
                      Your Message or Symptoms <span className="text-gold">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your health concern, preferred consultation time, or specific product inquiry..."
                      className={`w-full px-4 py-3.5 bg-ivory/50 border text-sm text-charcoal focus:bg-pure-white transition-colors ${
                        errors.message ? 'border-red-500' : 'border-charcoal/20 focus:border-forest'
                      }`}
                      required
                    />
                    {errors.message && (
                      <p className="text-xs text-red-600 mt-1 font-sans">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-forest hover:bg-forest-deep text-ivory text-xs uppercase tracking-eyebrow font-medium px-8 py-4 transition-all duration-300 hover:shadow-md"
                    >
                      <span>Submit Consultation Request</span>
                      <FiArrowUpRight className="text-gold text-sm" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Explicit Frontend Form Disclosure */}
                  <div className="pt-4 border-t border-charcoal/10 text-[11px] text-charcoal-muted leading-relaxed">
                    <span className="font-medium text-forest">Note:</span> This is a frontend appointment enquiry form. Submitted entries are verified locally in your browser. For confirmed immediate booking or directions, please dial{' '}
                    <a href="tel:9942611444" className="text-forest underline font-medium">
                      99426 11444
                    </a>{' '}
                    or write to{' '}
                    <a href="mailto:renugaramdass@gmail.com" className="text-forest underline font-medium">
                      renugaramdass@gmail.com
                    </a>.
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
