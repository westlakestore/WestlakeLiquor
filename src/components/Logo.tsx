import React from 'react';

const WestlakeLiquorLogo = ({ className = "w-48 h-12" }: { className?: string }) => {
  return (
    <img 
      src="/WestlakeLogoWebsite.png" 
      alt="Westlake Liquor" 
      className={className}
    />
  );
};

export default WestlakeLiquorLogo;