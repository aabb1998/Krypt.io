import React from 'react';
import './PasswordReset.css';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useUserAuth } from '../../Context/UserAuthContext';

const PasswordReset = ({ handleClose, show, children, handleOpen }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  const [resetEmail, setResetEmail] = useState('');
  const { user, updateName, updateUserEmail, resetPass } = useUserAuth();
  const [error, setError] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (resetEmail) {
        resetPass(resetEmail);
      } else {
        setError('Please enter your email address.');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal__header">
          <h4>Forgot Password?</h4>
          <button type="button" onClick={handleClose}>
            <AiOutlineClose />
          </button>
        </div>
        <span>
          Enter your email below, you will receive an email with instructons on
          how to reset your password in a few minutes. You can also set a new
          password if you've never set one before.
        </span>
        <div className="email__input">
          <h5>Email Address</h5>
          <input
            onChange={(e) => setResetEmail(e.target.value)}
            type="email"
            required
            placeholder="Email"
          />

          <button onClick={handleReset}>Send Instructions</button>
        </div>
        <div className="pass__error-section">
          {error && <span className="pass__error">Invalid Email</span>}
          {!error && (
            <span className="pass__valid">Please check your email.</span>
          )}
        </div>
      </section>
    </div>
  );
};

export default PasswordReset;
