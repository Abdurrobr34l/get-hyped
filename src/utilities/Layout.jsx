import React from 'react';

const Layout = ({ children, custom = "" }) => {
  return (
    <div className={`mx-auto px-[13.361px] max-w-384 border xs:px-[15.66px] md:px-[24.799px] lg:px-[21.333px] xl:px-[26.667px] 2xl:px-8 ${custom}`}>
      {children}
    </div>
  );
};

export default Layout;