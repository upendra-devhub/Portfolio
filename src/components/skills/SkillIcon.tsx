import React from 'react';

interface SkillIconProps {
  name: string;
  className?: string;
}

export const SkillIcon: React.FC<SkillIconProps> = ({ name, className = 'w-4 h-4' }) => {
  switch (name) {
    case 'nodejs':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
          <path d="M12 12l9-5" />
          <path d="M12 12v10" />
          <path d="M12 12L3 7" />
        </svg>
      );
    case 'express':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <text x="3" y="17" fontSize="13" fontWeight="900" fontFamily="sans-serif">ex</text>
        </svg>
      );
    case 'mongodb':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2c-1.5 4-4.5 7-4.5 11a4.5 4.5 0 0 0 9 0c0-4-3-7-4.5-11z" />
          <line x1="12" y1="2" x2="12" y2="22" strokeWidth="1.5" />
        </svg>
      );
    case 'javascript':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="6" y="17" fontSize="12" fontWeight="900" fontFamily="monospace">JS</text>
        </svg>
      );
    case 'react':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(150 12 12)" />
        </svg>
      );
    case 'html':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case 'css':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4l2 16 6 2 6-2 2-16H4z" />
          <path d="M8 8h8" />
          <path d="M8 12h7" />
          <path d="M9 16l3 1 3-1" />
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2c-3.5 0-4 1.5-4 3v2h8V6c0-1.5-.5-4-4-4z" />
          <path d="M12 22c3.5 0 4-1.5 4-3v-2H8v1c0 1.5.5 4 4 4z" />
          <circle cx="9.5" cy="5" r="1" fill="currentColor" />
          <circle cx="14.5" cy="19" r="1" fill="currentColor" />
        </svg>
      );
    case 'nextjs':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M9 7v10l7.5-10H18v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 'sql':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
          <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
        </svg>
      );
    case 'mongoose':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="8" cy="8" r="4" />
          <circle cx="16" cy="16" r="4" />
          <line x1="11" y1="11" x2="13" y2="13" />
        </svg>
      );
    case 'docker':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 14h16c.5 0 1-.5 1-1a4 4 0 0 0-4-4h-1" />
          <rect x="5" y="10" width="3" height="3" />
          <rect x="9" y="10" width="3" height="3" />
          <rect x="13" y="10" width="3" height="3" />
          <rect x="9" y="6" width="3" height="3" />
          <path d="M2 14c1 4 4 6 10 6 7 0 10-3 10-6" />
        </svg>
      );
    case 'aws':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M4 13a6 6 0 0 1 11-3 5 5 0 0 1 5 5" />
          <path d="M6 18c4 2 8 2 12 0" />
          <polyline points="16 17 18 18 16 19" />
        </svg>
      );
    case 'typescript':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <rect x="2" y="2" width="20" height="20" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="6" y="17" fontSize="12" fontWeight="900" fontFamily="monospace">TS</text>
        </svg>
      );
    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 1-.8 2-.9 3-.3.6.4 1 1 1.5 1.7 1 1.1 2 2.5 4.5 2.5 2.4 0 3.9-1.2 4.5-3.6-1 .8-2 .9-3 .3-.6-.4-1-1-1.5-1.7-1-1.1-2-2.5-4.5-2.5zm-6 6c-2.4 0-3.9 1.2-4.5 3.6 1-.8 2-.9 3-.3.6.4 1 1 1.5 1.7 1 1.1 2 2.5 4.5 2.5 2.4 0 3.9-1.2 4.5-3.6-1 .8-2 .9-3 .3-.6-.4-1-1-1.5-1.7-1-1.1-2-2.5-4.5-2.5z" />
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="9" r="3" />
          <line x1="6" y1="9" x2="6" y2="15" />
          <path d="M18 12a9 9 0 0 1-9 6" />
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );
    case 'java':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="2" x2="6" y2="5" />
          <line x1="10" y1="2" x2="10" y2="5" />
          <line x1="14" y1="2" x2="14" y2="5" />
        </svg>
      );
    case 'electron':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(45 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-45 12 12)" />
        </svg>
      );
    case 'cloudinary':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      );
    case 'framermotion':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M4 2h16v8h-8zM4 10h8v7H4zM12 17h8l-8 7z" />
        </svg>
      );
    case 'recharts':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );
    default:
      return null;
  }
};
