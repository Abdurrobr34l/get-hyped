import React from "react";
import '../UI/button.css';

const Button = ({ href, onClick = undefined, textStyle, children, icon, iconStyle, iconImgStyle, iconAlt = "", className = "" }) => (
  <a href={href} onClick={onClick} className={`btn cursor-pointer inline-block w-fit`}>
    <div className={`btnWrapper rounded-[0.75em] ${className}`}>
      <span className="btnBg" />
      {/* Button Name */}
      <span className={`${textStyle}`}>{children}</span>

      {/* Button Icon */}
      {icon && (
        <span className={`btnIcon ${iconStyle}`}>
          {icon && (
            <img
              src={icon}
              alt={iconAlt}
              className={`btnIconImg h-[17.70px] ${iconImgStyle}`}/>
          )}
        </span>
      )}
    </div>
  </a>
);

export default Button;