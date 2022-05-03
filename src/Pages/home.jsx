
import arrow from '../images/homepage/arrow.png';
import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import phone from '../images/homepage/phone.png';
import { Link } from 'react-router-dom';



function Home() {
    return (
        <div>

            <Navbar />

            <div className='flex justify-center items-center flex-col w-full'>
                <div className='text-9xl text-center mb-20 font-sans '>
                    Hello,
                    <br />
                    I'm Wei Zhen
                </div>
                <div className='text-2xl text-center w-1/2 mb-16 font-serif'>
                    A product designer that uses my background in business and marketing to create meaningful user
                    experience with design.
                </div>

                <div>
                    <img className='w-12 h-12 mb-20 animate-bounce ' src={arrow} alt="" />
                </div>
            </div>

            <div className='flex justify-center items-center flex-col w-full'>
                <div className="text-5xl text-center mb-20" id='projects'>
                    Projects
                </div>

                <div className='flex lg:flex-row flex-col justify-center w-full gap-10 px-20'>

                    <Link to='/amazon' className="flex-1" >
                        <div className='bg-amber-200 rounded-3xl text-center hover:bg-amber-300 transition duration-500 py-6'>
                            <p className='font-bold text-3xl text-center px-5' >Amazon.sg</p>
                            <p className='text-base text-center px-5 mb-4' >Redesigining of Amazon E-Commerce Mobile Application Platform</p>
                            <div className='flex flex-col justify-center items-center '>
                                <img className='w-32 mb-4' src={phone} alt="" />
                            </div>

                            <div className='font-bold '>View Project</div>
                            
                        </div>
                    </Link>





                    <div className='bg-red-300 rounded-3xl flex flex-col justify-center hover:bg-red-400 transition duration-500 flex-1'>
                        <p className='font-bold text-3xl text-center px-5' >Work In Progress</p>

                    </div>
                    <div className='bg-orange-300 rounded-3xl flex flex-col justify-center hover:bg-orange-400 transition duration-500 flex-1'>
                        <p className='font-bold text-3xl text-center px-5 ' >Work In Progress</p>

                    </div>

                </div>

            </div>

            <Footer />

        </div >
    );

}

export default Home
