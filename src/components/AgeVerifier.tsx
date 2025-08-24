import Logo from './Logo';
<div className="age-verifier-popup">
  <div className="logo-container">
    <Logo />
  </div>
  <h2>Are you 21 or older?</h2>
  <div className="button-group">
    <button onClick={handleYes}>Yes</button>
    <button onClick={handleNo}>No</button>
  </div>
</div>
