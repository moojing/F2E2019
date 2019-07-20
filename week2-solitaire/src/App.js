import React from 'react';
import { BrowserRouter , Route } from "react-router-dom";
import Index from '../src/page/Index'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
    <Route path="/" component={Index}/>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
