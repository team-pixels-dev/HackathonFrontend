import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Chatbot_main from './Dev/Chatbot/chatbot_main';


import Onboard from './Dev/Employment/Pages/Onboard';
import EmployInfo from './Dev/Employment/Pages/employInfo';
import EmployDetail from './Dev/Employment/Pages/employDetail';
import WriteDocument from './Dev/Employment/Pages/writeDocument';
import 'bootstrap/dist/css/bootstrap.min.css';
import MakeChat from './Dev/Employment/Pages/makeChat';
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/chatbot" element={<Chatbot_main/>} />
        <Route path="/" element={<Onboard />} />
        <Route path="/EmployInfo" element={<EmployInfo />} />
        <Route path="/detail/:index" element={<EmployDetail />} />
        <Route path="/WriteDocument" element={<WriteDocument />} />
        <Route path="/MakeChat" element={<MakeChat />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;

