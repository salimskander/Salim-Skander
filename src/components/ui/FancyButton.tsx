'use client';

import React from 'react';
import Link from 'next/link';

interface FancyButtonProps {
  text: string;
  href: string;
  className?: string;
}

const FancyButton = ({
  text,
  href,
  className = ""
}: FancyButtonProps) => {
  return (
    <div className={`glow-button-wrapper ${className}`}>
      <Link href={href} className="block">
        <button className="glow-button">
          {text}
        </button>
      </Link>
    </div>
  );
};

export default FancyButton; 