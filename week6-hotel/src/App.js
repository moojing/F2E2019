import React from 'react';
import Header from './component/Header'; 
import Recommand from './component/Recommand'; 

function App() {
  return (
    <div className="App">
      <div className="container"> 
        <section> 
          <Header/>
        </section>
      </div>
      <div className="container"> 
          <Recommand/> 
      </div>
      <div className="container"> 
          <div className="box"></div>
      </div>
      <div className="container"> 
          <div className="box"></div>
      </div>  
      
    </div>
  );
}

export default App;
