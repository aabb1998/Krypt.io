import React from 'react';
import { Navbar } from '../../Components';
import './Login.css';
import lock from '../../assets/lock.png';
import { AiFillLock } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login">
      <div className="login__nav">
        <Navbar />
      </div>
      <div className="login__section">
        <div className="login__container">
          <h4>Log In</h4>
          <div className="login__container-disc">
            <span>
              Always check you are on the official site
              <br />
            </span>
            <div className="login__container-icon">
              <AiFillLock color="#3861FB" />
              <span>https://purecrypto.io</span>
            </div>
          </div>
          <div className="login__container-input">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>
          <div className="login__container-checkSection">
            <div className="login__container-check">
              <input type="checkbox" placeholder="hello" />
              <span>Remember Me</span>
            </div>
            <div className="login__container-forgot">
              <span>
                <Link to="/signup">Sign Up</Link>
              </span>
            </div>
          </div>
          <div className="login__container-login">
            <button>Login</button>
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

export default Login;
