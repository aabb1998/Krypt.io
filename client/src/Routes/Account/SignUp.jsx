import React, { useEffect, useRef, useState } from 'react';
import lock from '../../assets/lock.png';
import { AiFillLock } from 'react-icons/ai';
import { Navbar } from '../../Components';
import './SignUp.css';
import { useUserAuth } from '../../Context/UserAuthContext';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [username, setUserName] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const { signUp, updateName, logOut } = useUserAuth();
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    if (agreeTerms && password === confirmPass && email) {
      e.preventDefault();
      setError('');
      try {
        await signUp(email, password, username);
        await updateName(username);
        await logOut();
        navigate('/login');
      } catch (error) {
        setError(error.message);
        console.log(error);
      }
    } else if (!agreeTerms) {
      setError('Please agree to terms and conditions');
    } else if (password !== confirmPass) {
      setError("Your passwords don't match.");
    } else if (!email) {
      setError('Please enter your details.');
    }
  };

  const handleRadio = () => {
    setAgreeTerms(!agreeTerms);
  };

  useEffect(() => {
    console.log(agreeTerms);
  }, [agreeTerms]);

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
          {error && <span>{error}</span>}
          <div className="signup__container-input">
            <input
              type="text"
              placeholder="User Name"
              required
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
            />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              onChange={(e) => setConfirmPass(e.target.value)}
              type="password"
              placeholder="Confirm password"
              required
            />
          </div>
          <div className="signup__container-checkSection">
            <div className="signup__container-check">
              <input
                type="checkbox"
                placeholder="hello"
                onChange={handleRadio}
              />
              <span>I agree to the Terms of Use</span>
            </div>
          </div>
          <div className="signup__container-signup" onClick={handleSubmit}>
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
