import logo from '../images/navbar/logo.png';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div className='h-[20vh] flex flex-row justify-between px-8 font-serif mb-8 sticky top-0 bg-white'>
            <Link to='/'>
                <img className='w-32 h-32' src={logo} alt="" />
            </Link>

            <div className='md:hidden block'>
                Hamburger icon
            </div>
            <div className='md:flex hidden flex-row gap-x-10 items-center text-xl' >

                <a href="#projects">Projects</a>

                <Link to='/about'>About Me</Link>


            </div>

        </div>

    )
}

export default Navbar