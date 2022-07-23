import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import product from '../images/fitree/product.png';
import solution from '../images/fitree/solution.png';
import userflow from '../images/fitree/userflow.png';
import persona from '../images/fitree/persona.png';
import signin from '../images/fitree/signin.png';
import connect from '../images/fitree/connect.png';
import create from '../images/fitree/create.png';
import seed from '../images/fitree/seed.png';
import test from '../images/fitree/test.png';
import dashboard from '../images/fitree/dashboard.png';
import productoverview from '../images/fitree/productoverview.png';
import add from '../images/fitree/add.png';
import details from '../images/fitree/details.png';
import Zoom from 'react-medium-image-zoom'
import MediumImage from '../components/images/MediumImage'





function Fitree() {
    return (
        <div>
            <Navbar />

            <div className='h-[90vh] flex flex-col items-center justify-center pb-52  '>
                <div className="text-7xl font-bold text-left mt-20">
                    Fi.tree
                </div>
                <p className='mt-10 text-left text-2xl lg:px-96 px-20 '>Most of us view technology as something that makes things easier. For many people, they view technology as something that makes things possible. <br /> <br />

                    This is my story of designing ‘Fi.tree’ a webapp that empowers aspiring entrepreneurs in rural areas to live their dreams.
                </p>
            </div>

            <div className=' lg:px-96 px-10 '>
                <div className='flex flex-col items-center gap-4'>
                    <h2 className='mt-40 mb-10' >My Role</h2>
                    <div className='flex flex-col justify-center items-align shrink-0 mb-40 ' >
                        <p>My team and I used this project idea during a HackForGood Hackathon organised by Grab Singapore in 2022 and we are proud to announce that we emerged as the Top 10 finalists out of >1500 registered participants from Singapore, India and Indonesia.

                        </p>
                        <br />
                        <p>This project took place in May to June 2022. I was responsible for the research of our business idea and product design.
                        </p>
                    </div>
                </div>
            </div>




            <div className=' lg:px-96 px-10 bg-neutral-100'>
                <div className='flex flex-col items-center gap-4'>
                    <h2 className='mt-40 mb-10' >Problem Statement</h2>
                    <div className='flex flex-col justify-center items-align shrink-0 mb-40 ' >
                        <p>Budding entrepreneurs in rural areas lack access to a network of consumers due to the lack of presence on the digital world map and the availability of digital payment methods
                        </p>
                        <br />

                        <p>Digitalisation is especially difficult for the unbanked population which poses an exclusivity to the underprivileged community who want to pursue their dream online businesses that can potentially reach out to the world.


                        </p>


                    </div>

                </div>
            </div>

            <div className=' lg:px-72 px-10 '>
                <div className='flex flex-col items-center gap-4'>

                    <h2 className='mt-40 ' >Proposed Solution</h2>
                    <div className='flex flex-col justify-center items-align shrink-0 mb-20 grow' >
                        <MediumImage className='w-max' image={solution} />
                    </div>

                </div>
            </div>



            <div className=' lg:px-80 px-10 '>
                <div className='flex flex-col items-center gap-4'>

                    <h2 className='mt-40' >Product Features</h2>
                    <div className='flex flex-col justify-center items-align shrink-0 mb-20' >
                        <MediumImage image={product} />
                    </div>

                </div>
            </div>


            <div className=' lg:px-64 px-10 '>
                <div className='flex flex-col items-center gap-4'>

                    <h2 className='mt-40' >User Flow</h2>
                    <div className='flex flex-col justify-center items-align shrink-0 mb-20 ' >
                        <MediumImage image={userflow} />

                    </div>

                </div>
            </div>

            <div className=' lg:px-64 px-10 '>
                <div className='flex flex-col items-center gap-4'>

                    <h2 className='mt-40 px-32' >High Fidelity Wireframes</h2>
                    <p className='px-32'> After establishing a rough idea of how the website will flow, I began building out high fidelity wireframes to give me a more accurate look and feel of the website.
                    </p>

                    <h3 className='mt-20'>Sign Up Process</h3>
                    <div className='flex flex-col justify-center items-align shrink-0 gap-5' >
                        <MediumImage image={signin} />
                        <MediumImage image={connect} />
                        <MediumImage image={create} />
                        <MediumImage image={seed} />
                        <MediumImage image={test} />

                    </div>

                    <h3 className='mt-40 '>Home Dashboard</h3>
                    <p className='px-32 '>The home dashboard is where users can view the overall analytics for the month.</p>
                    <MediumImage image={dashboard} />

                    <h3 className='mt-40'>Product Page</h3>
                    <p>The product page allows users to make amendments easily to their product listings regardless of the platform they use as long as they sync their product IDs</p>
                    <MediumImage image={productoverview} />
                    <MediumImage image={add} />
                    <MediumImage image={details} />
                </div>
            </div>

            <div className=' lg:px-96 px-10 '>
                <div className='flex flex-col items-center gap-4'>

                    <h2 className='mt-40' >Conclusion</h2>
                    <div className='flex flex-col justify-center items-align shrink-0 mb-20 ' >
                        <p>As we could only execute this project idea in a span of 2 weeks, we didn't have the luxury of time to conduct user testing. Nonetheless, our team will continue develop this idea and delve deeper to enhance the features in the near future.  </p>
               

                    </div>

                </div>
            </div>


            <Footer />

        </div>
    )
}

export default Fitree