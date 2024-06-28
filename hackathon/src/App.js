import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Chatbot_main from './Dev/Chatbot/chatbot_main';


function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/chatbot" element={<Chatbot_main/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;

