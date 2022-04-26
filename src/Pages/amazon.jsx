import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import ranking from '../images/amazon/ranking.png';

function amazon() {
    return (
        <div >
            <Navbar />

            <div className='h-[80vh] flex flex-col items-center'>
                <div className="text-7xl font-bold text-center mt-20">
                    Amazon.sg
                </div>
                <p className='mt-10 text-center' >Amazon.com is an international e-commerce company and the leading e-retailer in the United States, with net sales amounting to close to 386 billion U.S. dollars in 2020. As a worldwide e-commerce company, Amazon operates in 13 countries and ships worldwide to more than 100 countries. Due to its global scope and reach, Amazon is considered one of the most valuable brands worldwide.</p>

            </div>
            <div classname='text-7xl' >
                hello
            </div>
            <div className='bg-yellow-300 text-center'>
                <div classname='mt-48 pt-36 flex flex-col items-center'>
                    <h2 classname='' >Project Overview</h2>
                    <h3>Problem Statement</h3>

                    <img classname='w-1/2' src={ranking} alt="" />
                    

                    <p classname='mt-32' >Though Amazon is the largest online retailer in the world, it ranks only 3rd in Singapore with Shopee leading at 13.6 million visits as of the 2nd quarter of 2021, followed by Lazada at 7.5 million while Amazon at 6.5 million (Statista, 2021). However, I believe Amazon has the potential to strive in Singapore as well by redesigning its mobile application</p>
                    <h3 classname='mt-32' >Solution</h3>

                    <li>Redesign Amazon.sg mobile application that meets the goals of the business and user</li>
                    <li>New branding that effectively communicates Amazon’s unique personality</li>
                </div>
            </div>






        </div>


    );

}

export default amazon