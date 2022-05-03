import logo from '../images/navbar/logo.png';
import { Link, useLocation } from 'react-router-dom';
// import useLocation from 'react-router-dom'


function Navbar() {
    const location = useLocation()

    return (
        <div className='h-[10vh] flex flex-row justify-between px-8 font-serif sticky top-0 bg-white items-center'>
            <Link to='/'>
                <img className='w-32 h-32' src={logo} alt="" />
            </Link>

            <div className='md:hidden block cursor-pointer'>
                Hamburger icon
            </div>
            <div className='md:flex hidden flex-row gap-x-10 items-center text-xl' >
                {
                    location.pathname == "/"
                        ?
                        <a href="#projects">Projects</a>
                        :
                        <Link to="/#projects">
                            Projects
                        </Link>
                }
                {/* <a href="#projects">Projects</a> */}

                <Link to='/about'>About Me</Link>


            </div>

        </div>

    )
}

export default Navbar