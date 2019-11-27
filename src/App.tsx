import React from 'react';
import './App.css';
import ChatContainer from './components/chat/ChatContainer'
import { TabContainer } from './components/tab_container/TabContainer';
import  ContextModel  from './components/context/Context';
import NLP from './components/nlp/NLP'
import RecommendationGrid from './components/recommendation/RecommendationGrid';

const App: React.FC = () => {
  return (
    <div className="container">
      <ChatContainer />
      <div className="context">
        <TabContainer hash={{"Context":<ContextModel/>,"NLP":<NLP/>}} />
      </div>
      <div className="recommendation">
        <RecommendationGrid/>
      </div>
      
    </div>

  );
}

export default App;
