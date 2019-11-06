import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChatContainer } from './components/chat/ChatContainer'
import { TabContainer } from './components/tab_container/TabContainer';
import  Context  from './components/context/Context';
import NLP from './components/nlp/NLP'

const App: React.FC = () => {
  return (
    <div className="container">
      <ChatContainer />
      <div className="context">
        <TabContainer hash={{"Context":<Context/>,"NLP":<NLP/>}} />
      </div>
      <div className="recommendation">

      </div>
    </div>

  );
}

export default App;
