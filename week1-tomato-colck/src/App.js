import React from 'react';
import PanelAside from './component/PanelAside'
import Cover from './component/Cover'

function App() {
  
  return (
    <div className="App">
       <div className="container-fluid"> 
        <div className="row panel"> 
          <div className=" panel-main bg-gray d-flex align-items-center justify-content-center flex-column">
            <Cover/>
            <div className="logo">
              PODOMORO
            </div>
          </div>
          <div className="panel-aside">
            <PanelAside/>
          </div>
        </div>
       </div>
    </div>
  );
}

export default App;
