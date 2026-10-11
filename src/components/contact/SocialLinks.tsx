import React from 'react';
import { motion } from 'framer-motion';

export interface SocialLinkItem {
  name: string;
  href: string;
}

export const defaultSocialLinks: SocialLinkItem[] = [
  {
    name: 'LINKEDIN',
    href: 'https://www.linkedin.com/in/upendrasom1c/',
  },
  {
    name: 'GITHUB',
    href: 'https://github.com/upendra-devhub',
  },
  {
    name: 'INSTAGRAM',
    href: 'https://www.instagram.com/anshusom1c/',
  },
];

// Clean vector icons for the 3 platforms
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-currentColor shrink-0" fill="currentColor">
    <rect x="2" y="2" width="20" height="20" rx="3.5" fill="#191510" />
    <circle cx="7" cy="7.2" r="1.3" fill="white" />
    <rect x="5.7" y="9.8" width="2.6" height="7.7" rx="0.5" fill="white" />
    <path
      d="M11 9.8 h2.5 v1.2 c0.6-0.9 1.6-1.4 2.8-1.4 2 0 3.2 1.3 3.2 3.6 v4.3 h-2.6 v-3.8 c0-1.1-0.5-1.8-1.5-1.8 -0.9 0-1.7 0.7-1.7 1.8 v3.8 h-2.7 z"
      fill="white"
    />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#191510] shrink-0" fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-4 h-4 stroke-[#191510] fill-none shrink-0"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="#191510" />
  </svg>
);

const iconMap: Record<string, React.ReactNode> = {
  LINKEDIN: <LinkedInIcon />,
  GITHUB: <GitHubIcon />,
  INSTAGRAM: <InstagramIcon />,
};

interface SocialLinksProps {
  links?: SocialLinkItem[];
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ links = defaultSocialLinks }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.34 }}
      className="flex items-center justify-center select-none"
    >
      {/* Compact white/off-white card holding exactly LinkedIn, GitHub, Instagram */}
      <div className="bg-white/95 border border-[#191510]/15 shadow-[1.5px_2px_0px_rgba(25,21,16,0.1)] rounded-[3px] px-3.5 sm:px-5 py-2 sm:py-2.5 flex items-center gap-3 sm:gap-5 md:gap-6">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 sm:gap-2 text-[#191510] hover:text-[#2563EB] transition-colors py-1 cursor-pointer"
          >
            <span className="opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-transform">
              {iconMap[link.name]}
            </span>
            <span className="font-mono-ui font-bold text-[11px] sm:text-xs tracking-wider uppercase">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </motion.div>
  );
};
