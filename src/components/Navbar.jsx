import logo from '../images/navbar/logo.png';

function Navbar() {
    return (
        <div className='flex flex-row justify-between px-8 font-serif'>
            <img className='w-48 h-48' src={logo} alt=""/>
            <div className='md:hidden block'>
                Hamburger icon
            </div>
            <div className='md:flex hidden flex-row gap-x-10 items-center' >
                <div>Projects</div>
                <div>About Me</div>
            </div>

        </div>

    )
}

export default Navbar