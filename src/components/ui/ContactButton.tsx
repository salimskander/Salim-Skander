'use client';

import React from 'react';
import Link from 'next/link';

interface ContactButtonProps {
  text?: string;
  href: string;
  className?: string;
}

const ContactButton = ({
  text = "Me contacter",
  href,
  className = ""
}: ContactButtonProps) => {
  return (
    <Link href={href} className={className}>
      <button className="contact-button w-[12em] h-[3em] text-base bg-purple-600 text-white flex items-center justify-center border-none rounded-[30px] overflow-hidden transition-all duration-200 cursor-pointer hover:bg-purple-700 relative">
        <div className="svg-wrapper-1 absolute left-3 transition-all duration-300 ease-in-out">
          <div className="svg-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -9  32 32">
              <path fill="none" d="M0 0h24v24H0z" />
              <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
            </svg>
          </div>
        </div>
        <span className="text-center transition-all duration-300 ease-in-out">{text}</span>
      </button>
    </Link>
  );
};

export default ContactButton; 