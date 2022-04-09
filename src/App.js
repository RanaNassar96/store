
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import React , { useContext} from 'react';
import Home from './pages/home/Home'
import PreOrders from './pages/preOrders/PreOrders'
import FixedMenu from './components/fixedMenu/FixedMenu'
import MenuSection from './components/menuSection/MenuSection'
import OverlayMenu from './components/OverlayMenu/OverlayMenu'
import {Context} from './context'



function App() {

  const { open } = useContext(Context);

  return (
    <Router>
      <div className="App">
        { open ? <OverlayMenu /> : null }
        <MenuSection />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/preOrders" element={<PreOrders />} />
        </Routes>
        <FixedMenu />
      </div>
    </Router>
  );
}

export default App;
