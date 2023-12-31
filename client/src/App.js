import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './home';
import Login from './login';



function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
