import React, { useRef } from 'react';
import lock from '../../assets/lock.png';
import { AiFillLock } from 'react-icons/ai';
import { Navbar } from '../../Components';
import './SignUp.css';
import { useAuth } from '../../Context/AuthContext';

const SignUp = () => {
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  return (
    <div className="signup">
      <div className="signup__nav">
        <Navbar />
      </div>
      <div className="signup__section">
        <div className="signup__container">
          <h4>Create Account</h4>
          <div className="signup__container-disc">
            <span>
              Always check you are on the official site
              <br />
            </span>
            <div className="signup__container-icon">
              <AiFillLock color="#3861FB" />
              <span>https://purecrypto.io</span>
            </div>
          </div>
          <div className="signup__container-input">
            <input
              type="text"
              placeholder="User name"
              required
              ref={usernameRef}
            />
            <input
              type="password"
              placeholder="Password"
              required
              ref={passwordRef}
            />
            <input
              type="password"
              placeholder="Confirm password"
              required
              ref={passwordConfirmRef}
            />
            <input type="email" placeholder="Email" required ref={emailRef} />
          </div>
          <div className="signup__container-checkSection">
            <div className="signup__container-check">
              <input type="checkbox" placeholder="hello" />
              <span>I agree to the Terms of Use</span>
            </div>
          </div>
          <div className="signup__container-signup">
            <button>Create Account</button>
            <span>
              by creating an account you agree to our <br />
              Terms of Use & Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
