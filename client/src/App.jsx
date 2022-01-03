import { useState } from 'react';
import './App.css';
import {
  Navbar,
  Footer,
  GetStarted,
  LiveMarket,
  MailingList,
  Preview,
} from './Components/index';

function App() {
  return (
    <div className="app__container">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="preview">
        <Preview />
        <GetStarted />
        <LiveMarket />
        <MailingList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
