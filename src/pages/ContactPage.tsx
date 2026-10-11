import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { ContactHeading } from '../components/contact/ContactHeading';
import { ContactForm } from '../components/contact/ContactForm';
import { AvailabilityNote } from '../components/contact/AvailabilityNote';
import { ContactEmail } from '../components/contact/ContactEmail';
import { SocialLinks } from '../components/contact/SocialLinks';
import { Footer } from '../components/Footer';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Contact | Upendra';
    return () => {
      document.title = 'Upendra | Full-Stack Developer';
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-x-clip notebook-ruled-bg select-none">
      {/* 1. Top Navbar (Revealed immediately on Contact Page) */}
      <Navbar isRevealed={true} isContactPage={true} />
      <div className="h-[51px] sm:h-[54px] md:h-[56px] w-full shrink-0" />

      {/* 2. Main Contact Section on One Single Vertical Center Axis */}
      <main className="relative flex-1 flex flex-col items-center justify-center pt-16 sm:pt-24 md:pt-32 pb-20 sm:pb-28 md:pb-36 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto w-full z-10">
        {/* "say hi" + pixel CONTACT with hand-drawn outline & 4 blue corner registration markers */}
        <ContactHeading />

        {/* The Pale Yellow Paper Contact Form Card (Two-Step, Stationary Card, Functional Validation) */}
        <div className="mt-7 sm:mt-9 md:mt-10 w-full flex justify-center">
          <ContactForm />
        </div>

        {/* Handwritten Availability Note with curved hand-drawn arrow */}
        <div className="mt-6 sm:mt-7 md:mt-8 w-full flex justify-center">
          <AvailabilityNote />
        </div>

        {/* Clickable Email */}
        <div className="mt-3.5 sm:mt-4 w-full flex justify-center">
          <ContactEmail contactEmail="upendrasinghsom1c@gmail.com" />
        </div>

        {/* Compact White Social Card (LinkedIn, GitHub, Instagram) */}
        <div className="mt-5 sm:mt-6 md:mt-7 w-full flex justify-center">
          <SocialLinks />
        </div>
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
};
