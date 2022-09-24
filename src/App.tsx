import React, { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import AppBar from './AppBar';

import WindowContainer from './components/WindowContainer';

import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Inventory from "./pages/Inventory"
import Profiles from "./pages/Profiles";
import Proxies from "./pages/Proxies";
import Cards from "./pages/Cards";
import Settings from "./pages/Settings";

function App() {
  return (
    <div>
      <AppBar/>
      <WindowContainer>
        <Routes>
          <Route path='dashboard'  element={<Dashboard/>}/>
          <Route path='reports' element={<Reports/>}/>
          <Route path='inventory' element={<Inventory/>}/>
          <Route path='profiles' element={<Profiles/>}/>
          <Route path='proxies' element={<Proxies/>}/>
          <Route path='cards' element={<Cards/>}/>
          <Route path='reports' element={<Reports/>}/>
          <Route path='settings' element={<Settings/>}/>
        </Routes>
      </WindowContainer>
    </div>
  );
}

export default App;
