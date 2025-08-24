import React from 'react';

const WestlakeLiquorLogo = ({ className = "h-16 w-auto" }: { className?: string }) => {
  return (
    <img 
      src="/WestlakeLogoWebsite.png" 
      alt="Westlake Liquor" 
      className={`${className} object-contain`}
    />
  );
};

export default WestlakeLiquorLogo;