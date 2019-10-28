import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ChatContainer} from './components/chat/ChatContainer'
import { Provider } from 'react-redux'
import store from './redux/store' 

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <ChatContainer/>
        <div className="context">

        </div>
        <div className="recommendation">

        </div>
      </div>
    </Provider>
    
  );
}

export default App;
