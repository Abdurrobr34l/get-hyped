import React from 'react';
import '../UI/button.css';

const NavLink = ({ href, children }) => {
  return (
    <a href={href} className="navLinkRoot">
      <span className="navLinkBg">
        <span
          style={{ "--index": 0 }}
          className="navLinkLayer navLinkLayer--orange"
        />
        <span
          style={{ "--index": 1 }}
          className="navLinkLayer navLinkLayer--black"
        />
      </span>

      <span data-text={children} className="navLinkTextWrap">
        <span className="navLinkText">{children}</span>
      </span>
    </a>
  );
};

export default NavLink;