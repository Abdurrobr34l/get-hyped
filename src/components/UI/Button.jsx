import React from "react";
import '../UI/button.css';

const Button = ({ href, children, icon, iconAlt = "", className = "" }) => {
  return (
    <a href={href} className={`btn cursor-pointer`}>
      <div className={`btnWrapper rounded-[0.75em] ${className}`}>
        <span className="btnBg" />

        <span className="btnText">{children}</span>

        <span className="btnIcon">
          {icon && (
            <img
              src={icon}
              alt={iconAlt}
              className="btnIconImg h-[17.70px]!"
            />
          )}
        </span>
      </div>
    </a>
  );
};

export default Button;