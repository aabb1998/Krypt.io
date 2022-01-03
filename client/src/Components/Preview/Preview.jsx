import React from 'react';
import './Preview.css';
import dashboard from '../../assets/dashboard.png';

const Preview = () => {
  return (
    <div className="preview__section">
      <div className="preview__header">
        <h1 className="preview__text">
          The easiest way to <br />
          <span style={{ color: '#3861FB' }}>
            track multiple cryptocurrencies.
          </span>
        </h1>
      </div>
      <div className="preview__desc">
        <p>
          pureCrypto.io allows you to monitor your balances, view the latest
          news, send ethereum and keep track of your trading portfolio.
        </p>
      </div>
      <div className="preview__button">
        <button>Start Now</button>
      </div>
      <div className="preview__img">
        <img src={dashboard} alt="" />
      </div>
    </div>
  );
};

export default Preview;
