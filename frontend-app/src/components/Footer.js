import React from 'react';
import { footerContent } from '../data/content';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <h3 className="footer-about-title">{footerContent.about.title}</h3>
          <p className="footer-about-description">{footerContent.about.description}</p>
        </div>
        {footerContent.sections.map((section) => (
          <div key={section.id} className="footer-links">
            <h4 className="footer-links-title">{section.title}</h4>
            <ul className="footer-links-list">
              {section.links.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>{footerContent.copyright}</p>
      </div>
    </footer>
  );
}

