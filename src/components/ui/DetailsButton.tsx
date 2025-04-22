import Link from 'next/link';

type DetailsButtonProps = {
  href: string;
};

export default function DetailsButton({ href }: DetailsButtonProps) {
  return (
    <Link href={href} className="details-button">
      <span className="button-content">
        <span className="button-text">Détails</span>
        <svg className="arrow-icon" viewBox="0 0 24 24">
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
        </svg>
      </span>
    </Link>
  );
} 