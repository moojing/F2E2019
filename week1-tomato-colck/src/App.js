import React , {useState} from 'react';
import PanelAside from './component/PanelAside'
import {ToggleContext} from './context/ToggleContext'
import Cover from './component/Cover'

function App() {
  const [panelShrink,setPanelShrink] = useState(false)
  let toggleContext = {
    panelShrink, 
    setPanelShrink
  }
  return (
    <ToggleContext.Provider  value={toggleContext}>
    <div className="App">
       <div className="container-fluid"> 
        <div className="row panel"> 
          <div className={`panel-main bg-gray d-flex align-items-center
                           justify-content-center flex-column ${panelShrink?'panel-main-expand':''}`}>
            <Cover/>
            <div className="logo">
              PODOMORO
            </div>
          </div>
          <div className={`panel-aside ${panelShrink?'panel-aside-shrink':''}`}>
            <PanelAside/>
          </div>
        </div>
       </div>
    </div>
    </ToggleContext.Provider>
  );
}

export default App;
