import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import {AppProvider} from './Context/AppContext'
import Login from './login';
import Home from './home';



function App() {

  return (
    <div className="App" >
      <AppProvider>
        <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Login/>}/>
              <Route exact path="/home" element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </AppProvider>
      
    </div>
  );
}

export default App;
