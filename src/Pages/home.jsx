
import arrow from '../images/homepage/arrow.png';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import phone from '../images/homepage/phone.png';
import { Link } from 'react-router-dom';



function Home() {
    return (
        <div className="content">

            <Navbar />

            <div className='flex justify-center items-center flex-col w-full'>
                <div className='text-9xl text-center mb-20 font-sans'>
                    Hello,
                    <br />
                    I'm Wei Zhen
                </div>
                <div className='text-2xl text-center w-1/2 mb-16 font-serif'>
                    A product designer that uses my background in business and marketing to create meaningful user
                    experience with design.
                </div>

                <div>
                    <img className='w-12 h-12 mb-20' src={arrow} alt="" />
                </div>
            </div>

            <div className='flex justify-center items-center flex-col w-full'>
                <div className="text-5xl text-center mb-20" id='projects'>
                    Projects
                </div>

                <div className='flex flex-row justify-between w-full px-40'>

                    <Link to='/amazon' >
                        <div className=' h-100 w-80 bg-yellow-300 rounded-3xl text-center '>
                            <p className='font-bold text-3xl text-center mt-5 mb-2' >Amazon.sg</p>
                            <p className='text-base text-center px-5 mb-4' >Redesigining of Amazon E-Commerce Mobile Application Platform</p>
                            <div className='flex flex-col justify-center items-center '>
                                <img className='w-32 mb-4' src={phone} alt="" />
                            </div>

                            <div className='font-bold '>View Project</div>
                            
                        </div>
                    </Link>





                    <div className='bg-red-300 h-100 w-80 rounded-3xl flex flex-col justify-center'>
                        <p className='font-bold text-3xl text-center' >Work In Progress</p>

                    </div>
                    <div className='bg-orange-300 h-100 w-80 rounded-3xl flex flex-col justify-center'>
                        <p className='font-bold text-3xl text-center ' >Work In Progress</p>

                    </div>

                </div>

            </div>

            <Footer />

        </div >
    );

}

export default Home
