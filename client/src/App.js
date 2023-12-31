import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Components/home';
import Login from './Components/Chat_menu';




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
