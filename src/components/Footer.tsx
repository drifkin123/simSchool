import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  const links = [
    { text: 'About simSchool', href: '/about' },
    { text: 'Support', href: '/support' },
    { text: 'Training Calendar', href: '/training' },
    { text: 'System Requirements', href: '/requirements' },
    { text: 'Licensing Terms', href: '/licensing' },
    { text: 'Accessibility', href: '/accessibility' },
    { text: 'Security and Privacy', href: '/security' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.links}>
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={styles.link}
              >
                {link.text}
              </a>
            ))}
          </div>
          <div className={styles.copyright}>
            © 2025 simEd LLC
          </div>
          <div className={styles.contactInfo}>
            For more information, contact us at{' '}
            <a href="mailto:support@simschool.org" className={styles.link}>
              support@simschool.org
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 