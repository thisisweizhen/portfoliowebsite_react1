import logo from '../images/navbar/logo.png';
import { Link, useLocation } from 'react-router-dom';
// import useLocation from 'react-router-dom'
import menu from '../images/homepage/menu.png'
import { useState } from 'react'
import { Drawer } from 'antd';



function Navbar() {
    const location = useLocation()
    const [open, setOpen] = useState(false)
    const onClose = () => {
        setOpen(false)
    }
    return (
        <>
            <Drawer
                placement="right"
                onClose={onClose}
                visible= {open}
                width={200}
            >
                <div className='flex flex-col text-xl' onClick={onClose}>
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

            </Drawer>
            <div className='h-[15vh] flex flex-row justify-between px-8 font-serif sticky top-0 items-center'>
                <Link to='/'>
                    <img className='w-24 ' src={logo} alt="" />
                </Link>


                <div className='md:hidden block cursor-pointer w-6'>
                    <img src={menu} alt="" onClick={() => {setOpen(true)}} />
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
        </>
    )
}

export default Navbar