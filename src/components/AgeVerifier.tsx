import { useState, useEffect } from 'react';
import Logo from './Logo'; // use your current Logo component

export default function AgeVerifier() {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('ageVerified');
    if (verified === 'true') {
      setIsVerified(true);
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem('ageVerified', 'true');
    setIsVerified(true);
  };

  if (isVerified) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-white z-50">
      <Logo />
      <h1 className="text-2xl mt-4 mb-2">Are you 21 or older?</h1>
      <div className="space-x-4 mt-4">
        <button
          onClick={handleVerify}
          className="bg-green-600 px-6 py-2 rounded hover:bg-green-700"
        >
          Yes
        </button>
        <button
          onClick={() => window.location.href = 'https://www.responsibility.org/'}
          className="bg-red-600 px-6 py-2 rounded hover:bg-red-700"
        >
          No
        </button>
      </div>
    </div>
  );
}
