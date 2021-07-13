import React from 'react';
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height='100vh'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      projectID='508d4077-bbfe-4d3a-841a-52b776c4854b'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;