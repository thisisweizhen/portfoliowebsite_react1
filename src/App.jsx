import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './images/navbar/logo.png';
import linkedin from './images/homepage/linkedin.png';
import email from './images/homepage/email.png';



function App() {
  return (
    <div>

      <nav>
        <div className='flex flex-row justify-between px-8 font-serif'>
          <img className='w-48 h-48' src={logo} alt="" />
          <div className='md:hidden block'>
            Hamburger icon
          </div>
          <div className='md:flex hidden flex-row gap-x-10 items-center' >
          </div>
        </div>
      </nav>


    
      </div>
  );

}

export default App
