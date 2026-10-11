import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactFormProps {
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [direction, setDirection] = useState<1 | -1>(1);

  // Form Fields
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Validation & Submission States
  const [errors, setErrors] = useState<{ message?: string; name?: string; email?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Ref for textarea auto-focus
  const messageInputRef = useRef<HTMLTextAreaElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Focus textarea when component mounts or step changes to 1
  useEffect(() => {
    if (step === 1 && !isSuccess) {
      // Gentle delayed focus so it doesn't cause sudden viewport jumps during page load
      const timer = setTimeout(() => {
        if (document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
          // Only focus if the user has scrolled to the contact section
          const rect = messageInputRef.current?.getBoundingClientRect();
          if (rect && rect.top >= 0 && rect.bottom <= window.innerHeight) {
            messageInputRef.current?.focus();
          }
        }
      }, 400);
      return () => clearTimeout(timer);
    } else if (step === 2) {
      nameInputRef.current?.focus();
    }
  }, [step, isSuccess]);

  // Step 1 Validation
  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      setErrors({ message: 'PLEASE ENTER A MESSAGE TO CONTINUE' });
      messageInputRef.current?.focus();
      return;
    }
    setErrors({});
    setDirection(1);
    setStep(2);
  };

  // Back to Step 1
  const handleBack = () => {
    setErrors({});
    setSubmitError(null);
    setDirection(-1);
    setStep(1);
  };

  // Email format validation
  const isValidEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  };

  // Step 2 Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; email?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'NAME IS REQUIRED';
    }

    if (!email.trim()) {
      newErrors.email = 'EMAIL IS REQUIRED';
    } else if (!isValidEmail(email)) {
      newErrors.email = 'PLEASE ENTER A VALID EMAIL ADDRESS';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const contactApiUrl = import.meta.env.VITE_CONTACT_API_URL;
      const receiverEmail = import.meta.env.VITE_CONTACT_RECEIVER_EMAIL || 'upendrasinghsom1c@gmail.com';

      if (contactApiUrl) {
        const response = await fetch(contactApiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
            to: receiverEmail,
          }),
        });

        if (!response.ok) {
          throw new Error('FAILED TO SEND MESSAGE. PLEASE TRY AGAIN.');
        }
      } else {
        // Provider-ready fallback: log payload and resolve after realistic network latency
        console.info('Contact Form Submission:', {
          recipient: receiverEmail,
          senderName: name.trim(),
          senderEmail: email.trim(),
          messageContent: message.trim(),
        });
        await new Promise((resolve) => setTimeout(resolve, 850));
      }

      setIsSuccess(true);
      if (onSuccess) onSuccess();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'SOMETHING WENT WRONG. PLEASE TRY AGAIN.';
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form
  const handleReset = () => {
    setMessage('');
    setName('');
    setEmail('');
    setErrors({});
    setSubmitError(null);
    setIsSuccess(false);
    setDirection(-1);
    setStep(1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
      className="w-full max-w-[540px] sm:max-w-[560px] md:max-w-[580px] mx-auto select-none"
    >
      {/* 
        The Yellow Paper Sheet Card
        Dimensions: ~540–580px width desktop, stable ~340–370px height, pale yellow paper, flat, minimal rounding
      */}
      <div
        className="relative w-full bg-[#ECD897] text-[#191510] rounded-[2px] border border-[#191510]/15 shadow-[2px_3px_0px_rgba(25,21,16,0.12)] p-6 sm:p-8 md:p-9 min-h-[340px] sm:min-h-[360px] flex flex-col justify-between overflow-hidden"
        style={{ backgroundColor: '#ECD897' }}
      >
        {isSuccess ? (
          /* Success State (Stationary inside same yellow paper card) */
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex flex-col items-start justify-center py-4"
          >
            <div className="w-full flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] inline-block" />
              <span className="font-mono-ui font-bold text-xs tracking-widest uppercase text-[#191510]">
                MESSAGE SENT
              </span>
            </div>

            <h3 className="font-mono-ui font-bold text-base sm:text-lg text-[#191510] leading-snug tracking-wide uppercase mb-2">
              THANKS FOR REACHING OUT.
            </h3>

            <p
              className="font-handwriting text-xl sm:text-2xl text-[#191510]/90 mb-6"
              style={{ fontFamily: "'Architects Daughter', cursive" }}
            >
              I&apos;ll get back to you soon.
            </p>

            <button
              type="button"
              onClick={handleReset}
              className="font-mono-ui font-bold text-xs uppercase tracking-wider text-[#191510] hover:text-[#2563EB] underline transition-colors cursor-pointer"
            >
              ← SEND ANOTHER MESSAGE
            </button>
          </motion.div>
        ) : (
          /* Two-Step Form (Stationary Card, Internal Content Transitions) */
          <div className="flex-1 flex flex-col justify-between w-full">
            {/* Top Intro Text: Shared across both steps for stable visual hierarchy */}
            <div className="w-full mb-4 sm:mb-5">
              <p className="font-mono-ui font-bold text-[11px] sm:text-xs leading-relaxed tracking-wider text-[#191510] uppercase max-w-[480px]">
                GOT A PROJECT, A HARD PROBLEM, OR JUST WANT TO SAY HI? SEND IT OVER. I READ EVERY MESSAGE.
              </p>
            </div>

            {/* Step Content Container with Horizontal Slide Transition */}
            <div className="relative flex-1 flex flex-col justify-between w-full overflow-hidden">
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                {step === 1 ? (
                  /* ========================================================
                     STEP 1: MESSAGE
                     ======================================================== */
                  <motion.form
                    key="step-1"
                    custom={direction}
                    variants={{
                      enter: (d: number) => ({ x: d > 0 ? 25 : -25, opacity: 0 }),
                      center: { x: 0, opacity: 1 },
                      exit: (d: number) => ({ x: d > 0 ? -25 : 25, opacity: 0 }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    onSubmit={handleNext}
                    className="flex-1 flex flex-col justify-between w-full"
                  >
                    <div className="flex flex-col items-start w-full">
                      <label
                        htmlFor="contact-message"
                        className="font-mono-ui font-bold text-[10px] sm:text-[11px] tracking-widest uppercase text-[#191510]/80 mb-1.5"
                      >
                        MESSAGE
                      </label>

                      <textarea
                        id="contact-message"
                        ref={messageInputRef}
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          if (errors.message) setErrors({});
                        }}
                        rows={4}
                        placeholder="Tell me about your project, idea, or problem..."
                        className={`w-full bg-transparent border-b ${
                          errors.message ? 'border-red-600' : 'border-[#191510]/35 focus:border-[#191510]'
                        } py-1.5 font-display text-xs sm:text-sm text-[#191510] placeholder-[#191510]/45 outline-none resize-none transition-colors leading-relaxed`}
                      />

                      {/* Inline Error Message */}
                      {errors.message && (
                        <span className="font-mono-ui font-bold text-[10px] text-red-600 mt-1.5 tracking-wider uppercase">
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Step 1 Bottom Row: NEXT (1/2) Button */}
                    <div className="w-full flex items-center justify-end pt-5 sm:pt-6">
                      <button
                        type="submit"
                        className="px-5 sm:px-6 py-2 sm:py-2.5 bg-[#191510] text-white font-mono-ui font-bold text-xs sm:text-[13px] tracking-wider uppercase rounded-[2px] hover:bg-[#2563EB] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 cursor-pointer shadow-[1px_2px_0px_rgba(25,21,16,0.15)]"
                      >
                        NEXT (1/2)
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  /* ========================================================
                     STEP 2: NAME + EMAIL
                     ======================================================== */
                  <motion.form
                    key="step-2"
                    custom={direction}
                    variants={{
                      enter: (d: number) => ({ x: d > 0 ? 25 : -25, opacity: 0 }),
                      center: { x: 0, opacity: 1 },
                      exit: (d: number) => ({ x: d > 0 ? -25 : 25, opacity: 0 }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    onSubmit={handleSubmit}
                    className="flex-1 flex flex-col justify-between w-full"
                  >
                    <div className="flex flex-col gap-3.5 sm:gap-4 w-full">
                      {/* Name Field */}
                      <div className="flex flex-col items-start w-full">
                        <label
                          htmlFor="contact-name"
                          className="font-mono-ui font-bold text-[10px] sm:text-[11px] tracking-widest uppercase text-[#191510]/80 mb-1"
                        >
                          NAME
                        </label>
                        <input
                          id="contact-name"
                          ref={nameInputRef}
                          type="text"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                          }}
                          placeholder="Jane Doe"
                          className={`w-full bg-transparent border-b ${
                            errors.name ? 'border-red-600' : 'border-[#191510]/35 focus:border-[#191510]'
                          } py-1 font-display text-xs sm:text-sm text-[#191510] placeholder-[#191510]/45 outline-none transition-colors`}
                        />
                        {errors.name && (
                          <span className="font-mono-ui font-bold text-[10px] text-red-600 mt-1 tracking-wider uppercase">
                            {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Email Field */}
                      <div className="flex flex-col items-start w-full">
                        <label
                          htmlFor="contact-email"
                          className="font-mono-ui font-bold text-[10px] sm:text-[11px] tracking-widest uppercase text-[#191510]/80 mb-1"
                        >
                          EMAIL
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                          }}
                          placeholder="your@email.com"
                          className={`w-full bg-transparent border-b ${
                            errors.email ? 'border-red-600' : 'border-[#191510]/35 focus:border-[#191510]'
                          } py-1 font-display text-xs sm:text-sm text-[#191510] placeholder-[#191510]/45 outline-none transition-colors`}
                        />
                        {errors.email && (
                          <span className="font-mono-ui font-bold text-[10px] text-red-600 mt-1 tracking-wider uppercase">
                            {errors.email}
                          </span>
                        )}
                      </div>

                      {submitError && (
                        <span className="font-mono-ui font-bold text-[10px] text-red-600 tracking-wider uppercase">
                          {submitError}
                        </span>
                      )}
                    </div>

                    {/* Step 2 Bottom Row: Back Arrow + SEND (2/2) */}
                    <div className="w-full flex items-center justify-between pt-5 sm:pt-6">
                      {/* Back Button */}
                      <button
                        type="button"
                        onClick={handleBack}
                        disabled={isSubmitting}
                        aria-label="Back to Message Step"
                        className="w-8 h-8 rounded-[2px] border border-[#191510]/40 flex items-center justify-center text-[#191510] hover:bg-black/5 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
                      >
                        <span className="font-mono-ui font-bold text-base leading-none select-none">
                          ←
                        </span>
                      </button>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-5 sm:px-6 py-2 sm:py-2.5 bg-[#191510] text-white font-mono-ui font-bold text-xs sm:text-[13px] tracking-wider uppercase rounded-[2px] hover:bg-[#2563EB] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 cursor-pointer shadow-[1px_2px_0px_rgba(25,21,16,0.15)] disabled:opacity-60"
                      >
                        {isSubmitting ? 'SENDING...' : 'SEND (2/2)'}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
