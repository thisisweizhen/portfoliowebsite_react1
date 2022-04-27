import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import ranking from '../images/amazon/ranking.png';
import process from '../images/amazon/designprocess.png';
import research from '../images/amazon/marketresearch.png';
import lazada from '../images/amazon/lazada.png';
import shopee from '../images/amazon/shopee.png';
import '../index.css';

function Amazon() {
    return (
        <div >
            <Navbar />

            <div className='h-[80vh] flex flex-col items-center'>
                <div className="text-7xl font-bold text-center mt-20">
                    Amazon.sg
                </div>
                <p className='mt-10 text-center'>Amazon.com is an international e-commerce company and the leading e-retailer in the United States, with net sales amounting to close to 386 billion U.S. dollars in 2020. As a worldwide e-commerce company, Amazon operates in 13 countries and ships worldwide to more than 100 countries. Due to its global scope and reach, Amazon is considered one of the most valuable brands worldwide.</p>

            </div>

            <div className='bg-amber-200 text-center'>
                <div classname='flex flex-col items-center mt-56'>

                    <h2 classname='m-4' >Project Overview</h2>
                    <h3>Problem Statement</h3>
                    <div className='flex flex-col justify-center items-align' >
                        <img className=' w-1/2' src={ranking} alt="" />

                    </div>

                    <p classname='' >Though Amazon is the largest online retailer in the world, it ranks only 3rd in Singapore with Shopee leading at 13.6 million visits as of the 2nd quarter of 2021, followed by Lazada at 7.5 million while Amazon at 6.5 million (Statista, 2021). However, I believe Amazon has the potential to strive in Singapore as well by redesigning its mobile application</p>
                    <h3 classname='' >Solution</h3>

                    <li>Redesign Amazon.sg mobile application that meets the goals of the business and user</li>
                    <li>New branding that effectively communicates Amazon’s unique personality</li>
                </div>
            </div>

            <div>
                <h2>Design Process</h2>
                <img src={process} alt="" />
                <h3>Emphatise</h3>
                <h3>Market Research</h3>
                <img src={research} alt="" />
                <li>With the rising consumer spending, government support and growing preference for online shopping, Singapore e-commerce market is projected to grow at a compound annual growth rate of 16.2% through 2025 to be worth $14.2b, according to GlobalData.</li>
                <li>73% of online consumers in Singapore have patronized overseas merchants. Presently, cross-border e-commerce takes 35% of the entire Singapore e-commerce market (Heysara PteLtd, 2021).
                </li>
                <li>In 2021, Singapore’s user penetration is expected to be 55.9% and should reach 67.2% by 2025. The average revenue per user (ARPU) is also expected to reach USD 846.96 by 2025.</li>
                <li>According to a study by performance marketing firm Reprise Digital, Singaporean shoppers are very price-conscious, with 63% of consumers choosing to shop online for promotions and discounts. In fact, 52% of Singaporean shoppers do their due diligence by visiting brand websites before making a purchase decision.</li>
            </div>

            <div classname='bg-amber-200' >
                <h2>Competitor's Analysis</h2>
                <p>To compare Amazon with its stronger competitors, I did a competitor analysis in which these insights gained will provide key information in terms of the strengths we want to build upon and the weaknesses we want to avoid.</p>
                <div classname='flex flex-row' >
                    <div  >
                        <img classname='w-2' src={shopee} alt="" />
                        <p>Strengths</p>
                        <li>Known for its promotions & discounts: Instead of focusing on advertisements, Shopee managed to capture customers through various campaigns, for promotions from free shipping, discounts, to flash sales all year round.</li>
                        <li>Customer loyalty: With Shopee coins collected after each purchase, consumers can use these coins to enjoy further discounts on the next purchase, attracting more customers to its platform</li>
                        <li>A variety of payment methods to ease payment transaction</li>

                        <p>Weaknesses</p>
                        <li>Lack of variety of product origin</li>
                        <li>Quality of items is compromised</li>
                    </div>
                    <div>
                        <img classname='w-2' src={lazada} alt="" />
                        <p>Strengths</p>
                        <li>Free return: free return of items received in case the item doesn’t meet the client’s expectations.</li>
                        <li>Brand presence: Lazada is well known in the local market and has already gained customers’ trust</li>
                        <li>Wide variety of sellers: with the potential sales from high traffic channel, more seller want to go on board to the Lazada platform</li>
                        <li>A variety of payment methods to ease payment transaction</li>

                        <p>Weaknesses</p>
                        <li>Limited free shipping options</li>
                        <li>Quality of items is compromised</li>
                        <li>Lack of variety from product origin</li>
                    </div>
                </div>




            </div>






        </div>


    );

}

export default Amazon