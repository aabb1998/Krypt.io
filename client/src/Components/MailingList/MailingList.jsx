import React from 'react';
import './MailingList.css';
import mailImg from '../../assets/mailinglist.png';

const MailingList = () => {
  return (
    <div className="mailing__section">
      <div className="mailing__container">
        <div className="mailing__section-left">
          <div className="mailing__section-text">
            <h4>
              Be the first to know about{' '}
              <span style={{ color: '#3861FB' }}>crypto news every day</span>
            </h4>
            <span className="mailing__section-info">
              Get crypto analysis, news and updates right to your inbox. Sign Up
              here so you don't miss a single newsletter.
            </span>
          </div>
          <div className="mailing__section-email">
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </div>
        </div>
        {/* <div className="mailing__section-right">
          <img src={mailImg} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default MailingList;
