import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';

const App = () => {
  return (
    <ChatEngine
      height='100vh'
      userName='Admin'
      userSecret='123123'
      projectID='508d4077-bbfe-4d3a-841a-52b776c4854b'
    />
  );
}

export default App;