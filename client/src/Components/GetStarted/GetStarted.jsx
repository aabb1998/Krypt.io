import React from 'react';
import './GetStarted.css';
import iconProfile from '../../assets/icons-profile.png';
import iconCandles from '../../assets/icons-candles.png';
import iconAdd from '../../assets/icon-add.png';

const GetStarted = () => {
  return (
    <div className="started__section">
      <div className="started__header">
        <h1>Get started in a few minutes</h1>
        <span>
          pureCrypto.io supports a variety of the most popular digital
          currencies.
        </span>
      </div>
      <div className="started__steps">
        <div className="step">
          <img src={iconProfile} alt="" />
          <span>Create an account</span>
        </div>
        <div className="step__divider"></div>
        <div className="step">
          <img src={iconAdd} alt="" />
          <span>Add to your watchlist</span>
        </div>
        <div className="step__divider"></div>

        <div className="step">
          <img src={iconCandles} alt="" />
          <span>Track your gains</span>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
