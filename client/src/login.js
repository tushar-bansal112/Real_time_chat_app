import './login.css';
import Vector from './images/Vector.svg'
import logo from './images/Group.png'
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  }
  return (
    <div className="home" >
      <div className='background_img'>
        <div className='navbar'>
          <img className="img" src={Vector} alt="vector"/>
        </div>
        <div className='container'>
          <div className='welcome'>
            <img className="logo_img" src = {logo} alt="logo"/>
            <div className='init_msg'>Welcome to </div> 
            <div className='init_msg'>goodspace communication </div>
          </div>
          <div className='login_container'>
            <div className='signup'>
              Signup/Login
            </div>
            <form>
              <label >Your Email Id</label>
              <input type="text" autoFocus id="email" autoComplete="off"/>
              <label  className="pass" >Password</label>
              <input type="password" id="password" autoComplete="off"/>
              <button className="loginBtn" type="submit" onClick={handleClick}>Let's Go!!</button>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
