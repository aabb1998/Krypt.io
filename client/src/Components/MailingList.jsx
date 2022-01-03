import React from 'react';

const MailingList = () => {
  return (
    <div className="mailing__section">
      <div className="mailing__section-left">
        <div className="mailing__section-text">
          <h4>
            Be the first to know about{' '}
            <span style={{ color: '#3861FB' }}>crypto news every day</span>
          </h4>
          <span>
            Get crypto analysis, news and updates right to your inbox. Sign Up
            here so you don't miss a single newsletter.
          </span>
        </div>
        <div className="mailing__section-email">
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default MailingList;
