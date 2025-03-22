import React from 'react';
import '../styles/LoopingLogos.css';

// emaple here: https://www.smashingmagazine.com/2024/04/infinite-scrolling-logos-html-css/
interface Logo {
  src: string;
  alt: string;
  className: string;
  width?: number;
  height?: number;
}

const LoopingLogos = () => {
  const logos: Logo[] = [
    {
      src: 'https://cdn.prod.website-files.com/649008cce797bf09c949230d/64cb590127a43be284ef6f96_copenhagen%20logo.webp',
      alt: 'Copenhagen logo',
      className: 'cc-copenhagen',
      width: 100,
      height: 100

    },
    {
      src: 'https://cdn.prod.website-files.com/649008cce797bf09c949230d/66f413f585fa03020c1c8e79_NN-Logo-Wide_1.webp',
      alt: 'NN Logo',
      className: 'cc-luxplan',
      width: 300,
      height: 100
    },
    {
      src: 'https://cdn.prod.website-files.com/649008cce797bf09c949230d/66f413f553f7893d87a4f072_HGA-logo-gray.webp',
      alt: 'HGA Logo',
      className: 'cc-co',
      width: 300,
      height: 100
    },
    {
      src: 'https://cdn.prod.website-files.com/649008cce797bf09c949230d/66f413f5a96d0c8fa1c16d68_Franklin-Associates-Logo-2021-horizontal.webp',
      alt: 'Franklin Associates Logo',
      className: 'cc-franklinas'
    },
    {
      src: 'https://cdn.prod.website-files.com/649008cce797bf09c949230d/66f40bc95481865ed4820a46_Beyer-Blinder-Belle-Logo.webp',
      alt: 'Beyer Blinder Belle Logo',
      className: 'cc-bbb'
    },
    {
      src: 'https://cdn.prod.website-files.com/649008cce797bf09c949230d/66f413f5d146c3b0b9be51d0_Ramboll_Logo.svg.webp',
      alt: 'Ramboll Logo',
      className: ''
    },
    {
      src: 'https://cdn.prod.website-files.com/649008cce797bf09c949230d/66f413f653f7893d87a4f0a8_StockholmsStad_logotypeStandardA5_300ppi_svart.webp',
      alt: 'Stockholm Stad Logo',
      className: 'cc-tallinn'
    },
    {
      src: 'https://cdn.prod.website-files.com/649008cce797bf09c949230d/66f413f6e51b7dd0aa073f1c_Vierbicher_Logo.webp',
      alt: 'Vierbicher Logo',
      className: 'cc-franklinas'
    },
    {
      src: 'https://cdn.prod.website-files.com/649008cce797bf09c949230d/66f413f553f7893d87a4f075_Logo_Mintier-Harnish.webp',
      alt: 'Mintier Harnish Logo',
      className: 'cc-franklinas'
    },
    {
      src: 'https://cdn.prod.website-files.com/649008cce797bf09c949230d/66f413f6774fe61629f9c45f_Sweco_Logo_fuer_Web_schwarz_transparent_567x165px-_1_.webp',
      alt: 'Sweco Logo',
      className: ''
    }
  ];

  return (
    <div>
      <h3>The SimSchool Global Community</h3>
      <div className="marquee marquee--6">
        {logos.map((logo, index) => (
          <img key={index} className="marquee__item" src={logo.src} width={logo.width || "100"} height={logo.height || "100"} alt={logo.alt} />
        ))}
      </div>
      <div className="logo-link-wrapper">
        <a 
          href="https://youtu.be/-1gOe8gPNdE?feature=shared" 
          target="_blank" 
          rel="noopener noreferrer"
          className="logo-link"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default LoopingLogos;
