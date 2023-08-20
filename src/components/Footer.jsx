import React from 'react';
import { SiReact, SiBulma } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className={`footer`}>
      <div className={`content has-text-centered`}>
        <p className={`is-size-5`}>
          <span className={'icon-text'}>
            <span>
              <strong>Built with</strong>
            </span>
            <span className={'icon'}>
              <SiReact style={{ color: '#61dafb' }} />
            </span>

            <span>
              <strong>+</strong>
            </span>
            <span className={'icon'}>
              <SiBulma style={{ color: '#00d1b2' }} />
            </span>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
