import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import arrow from './images/homepage/arrow.png'
import linkedin from './images/homepage/linkedin.png'
import email from './images/homepage/email.png'


function App() {
  return (
    <><Router>
      <nav>
        <Link to="/"> Home</Link>
        <Link to="about"> About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/about" element={<about />} />
      </Routes>
    </Router><div>
        <div>
          <Navbar />
        </div>

        <div className='flex justify-center items-center flex-col w-full'>
          <div className='text-9xl text-center mb-8 font-sans'>
            Hello,
            <br />
            I'm Wei Zhen
          </div>
          <div className='text-2xl text-center w-1/2 mb-20'>
            A product designer that uses my background in business and marketing to create meaningful user
            experience with design.
          </div>

          <div>
            <img className='w-12 h-12 mb-20' src={arrow} alt="" />
          </div>
        </div>

        <div className='flex justify-center items-center flex-col w-full'>
          <div className="text-5xl text-center mb-20">
            Projects
          </div>

          <div className='flex flex-row justify-between w-full px-40'>
            <div className='h-80 w-80 bg-yellow-300 rounded-3xl'>

            </div>
            <div className='bg-blue-300 h-80 w-80 rounded-3xl'>

            </div>
            <div className='bg-orange-300 h-80 w-80 rounded-3xl'>

            </div>

          </div>

        </div>

        <div className='bg-rose-300 h-56 mt-20 flex flex-col justify-center'>
          <div className='flex justify-center mb-5 text-2xl font-Open_Sans'>
            Lets Have A Chat!
          </div>
          <div className='flex flex-row justify-center gap-10'>

            <a href="https://www.linkedin.com/in/weizhensuen/">
              <img className='w-10 h-10' src={linkedin} alt="" />
            </a>

            <a href="mailto:wei.zhen.suen@gmail.com">
              <img className='w-10 h-10' src={email} alt="" />
            </a>

          </div>

        </div>















      </div></>
  );
}

export default App
