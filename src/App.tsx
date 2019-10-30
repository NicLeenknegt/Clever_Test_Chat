import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ChatContainer} from './components/chat/ChatContainer'

const App: React.FC = () => {
  return (
      <div className="container">
        <ChatContainer/>
        <div className="context">

        </div>
        <div className="recommendation">

        </div>
      </div>
    
  );
}

export default App;
