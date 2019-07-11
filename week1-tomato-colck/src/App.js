import React from 'react';
import { ReactComponent as AddIcon }  from './assets/icons/add.svg'
import { ReactComponent as ListIcon }  from './assets/icons/list.svg'
import { ReactComponent as Analysis }  from './assets/icons/analysis_red.svg'
import { ReactComponent as Ring }  from './assets/icons/ringtone.svg'


function App() {
  return (
    <div className="App">
       <div className="container-fluid"> 
        <div className="row panel"> 
          <div className=" panel-main bg-gray">
          
          </div>
          <div className="panel-aside">
            <div className=" panel-aside-shrink bg-dark "> 
                <div className="icon" > 
                  <AddIcon className="icon-svg active"/>
                </div>
           
                <div className="icon" > 
                  <ListIcon className="icon-svg"/>
                </div>

          
                <div className="icon" > 
                  <Analysis  className="icon-svg"/>
                </div>

                <div className="icon" > 
                  <Ring className="icon-svg"/>
                </div>
           
              
            </div>
            <div className=" panel-aside-main bg-dark"> asda</div>
          </div>
        </div>
       </div>
    </div>
  );
}

export default App;
