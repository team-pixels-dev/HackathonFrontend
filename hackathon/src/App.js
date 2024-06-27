import React from 'react';
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;

