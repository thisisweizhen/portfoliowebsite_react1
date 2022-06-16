import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import product from '../images/fitree/product.png';
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

            <div className='h-[90vh] flex flex-col items-center justify-center pb-52 '>
                <div className="text-7xl font-bold text-center mt-20">
                    Fi.tree
                </div>
                <p className='mt-10 text-center text-2xl lg:px-64 px-20 '>A website designed to allow entrepreneurs to analyse their sales performance and manage their products across all decentralised platforms. </p>
            </div>

            <div className=' lg:px-64 px-10 '>
                <div className='flex flex-col items-center gap-4'>

                    <h2 className='mt-40' >Product Features</h2>
                    <div className='flex flex-col justify-center items-align shrink-0 ' >
                        <MediumImage image={product} />
                    </div>

                </div>
            </div>

            <div className=' lg:px-64 px-10 '>
                <div className='flex flex-col items-center gap-4'>

                    <h2 className='mt-40' >User Persona</h2>
                    <div className='flex flex-col justify-center items-align shrink-0 w-10/12 ' >
                        <MediumImage image={persona} />
                    </div>

                </div>
            </div>


            <div className=' lg:px-64 px-10 '>
                <div className='flex flex-col items-center gap-4'>

                    <h2 className='mt-40' >User Flow</h2>
                    <div className='flex flex-col justify-center items-align shrink-0 ' >
                        <MediumImage image={userflow} />

                    </div>

                </div>
            </div>

            <div className=' lg:px-64 px-10 '>
                <div className='flex flex-col items-center gap-4'>

                    <h2 className='mt-40' >High Fidelity Wireframes</h2>
                    <p> After establishing a rough idea of how the website will flow, I began building out high fidelity wireframes to give me a more accurate look and feel of the website.
                    </p>

                    <h3 className='mt-20'>Sign Up Process</h3>
                    <div className='flex flex-col justify-center items-align shrink-0 gap-5' >
                        <MediumImage image={signin} />
                        <MediumImage image={connect} />
                        <MediumImage image={create} />
                        <MediumImage image={seed} />
                        <MediumImage image={test} />

                    </div>

                    <h3 className='mt-20'>Home Dashboard</h3>
                    <p>The home dashboard is where users can view the overall analytics for the month.</p>
                    <MediumImage image={dashboard} />

                    <h3 className='mt-20'>Product Page</h3>
                    <p>The product page allows users to make amendments easily to their product listings regardless of the platform they use as long as they sync their product IDs</p>
                    <MediumImage image={productoverview} />
                    <MediumImage image={add} />
                    <MediumImage image={details} />
                </div>

                
            </div>


            <Footer />

        </div>
    )
}

export default Fitree