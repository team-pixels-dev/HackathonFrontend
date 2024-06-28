import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Onboard from './Dev/Employment/Pages/onboard';
import EmployInfo from './Dev/Employment/Pages/employInfo';
import EmployDetail from './Dev/Employment/Pages/employDetail';
import WriteDocument from './Dev/Employment/Pages/writeDocument';
import 'bootstrap/dist/css/bootstrap.min.css';
import MakeChat from './Dev/Employment/Pages/makeChat';
function App() {
  return (
    <React.Fragment>
      <Routes>
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

