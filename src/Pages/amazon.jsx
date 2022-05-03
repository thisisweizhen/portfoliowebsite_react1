import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import ranking from '../images/amazon/ranking.png';
import process from '../images/amazon/designprocess.png';
import research from '../images/amazon/marketresearch.png';
import lazada from '../images/amazon/lazada.png';
import shopee from '../images/amazon/shopee.png';
import persona from '../images/amazon/persona.png';
import hmw from '../images/amazon/hmw.png';
import userflow from '../images/amazon/userflow.png';
import lofi1 from '../images/amazon/lofi1.PNG';
import lofi2 from '../images/amazon/lofi2.PNG';
import homepage from '../images/amazon/homepage.png';
import product from '../images/amazon/product.png';
import category from '../images/amazon/category.png';
import payment from '../images/amazon/payment.png';
import cart from '../images/amazon/cart.png';
import click from '../images/amazon/click.png';

function Amazon() {
    return (
        <div >
            <Navbar />

            <div className='h-[90vh] flex flex-col items-center justify-center pb-52'>
                <div className="text-7xl font-bold text-center mt-20">
                    Amazon.sg
                </div>
                <p className='mt-10 text-center px-48'>Amazon.com is an international e-commerce company and the leading e-retailer in the United States, with net sales amounting to close to 386 billion U.S. dollars in 2020. As a worldwide e-commerce company, Amazon operates in 13 countries and ships worldwide to more than 100 countries. Due to its global scope and reach, Amazon is considered one of the most valuable brands worldwide.</p>

            </div>

            <div className='bg-amber-200 text-center px-48'>
                <div className='flex flex-col items-center gap-4'>

                    <h2 className='mt-10' >Project Overview</h2>
                    <h3>Problem Statement</h3>
                    <div className='flex flex-col justify-center items-align shrink-0' >
                        <img src={ranking} alt="" />
                    </div>

                    <p >Though Amazon is the largest online retailer in the world, it ranks only 3rd in Singapore with Shopee leading at 13.6 million visits as of the 2nd quarter of 2021, followed by Lazada at 7.5 million while Amazon at 6.5 million (Statista, 2021). However, I believe Amazon has the potential to strive in Singapore as well by redesigning its mobile application</p>
                    <h3 className='mt-10' >Solution</h3>

                    <li>Redesign Amazon.sg mobile application that meets the goals of the business and user</li>
                    <li className='mb-10'>New branding that effectively communicates Amazon’s unique personality</li>
                </div>
            </div>

            <div className='flex flex-col items-center mt-40 gap-4 px-48' >
                <h2 className='text-center ' >Design Process</h2>
                <img className='w-5/6 shrink' src={process} alt="" />
                <p className='mt-10'>Emphatise</p>
                <h3>Market Research</h3>
                <img className='mb-10' src={research} alt="" />
                <li>With the rising consumer spending, government support and growing preference for online shopping, Singapore e-commerce market is projected to grow at a compound annual growth rate of 16.2% through 2025 to be worth $14.2b, according to GlobalData.</li>
                <li>73% of online consumers in Singapore have patronized overseas merchants. Presently, cross-border e-commerce takes 35% of the entire Singapore e-commerce market (Heysara PteLtd, 2021).
                </li>
                <li>In 2021, Singapore’s user penetration is expected to be 55.9% and should reach 67.2% by 2025. The average revenue per user (ARPU) is also expected to reach USD 846.96 by 2025.</li>
                <li>According to a study by performance marketing firm Reprise Digital, Singaporean shoppers are very price-conscious, with 63% of consumers choosing to shop online for promotions and discounts. In fact, 52% of Singaporean shoppers do their due diligence by visiting brand websites before making a purchase decision.</li>
            </div>

            <div className='mt-40'></div>

            <div className='bg-amber-200 px-48 gap-4'>
                <div className='pt-10' > 
                    <h2 className='text-center pb-10' >Competitor's Analysis</h2>
                    <p className='text-center' >To compare Amazon with its stronger competitors, I did a competitor analysis in which these insights gained will provide key information in terms of the strengths we want to build upon and the weaknesses we want to avoid.</p>
                    <div className='flex flex-row gap-x-20' >
                        <div className='flex flex-col gap-4 flex-1' >
                            <div className='flex flex-col justify-center items-center  h-32' >
                                <img className='w-1/2' src={shopee} alt="" />

                            </div>

                            <p className='font-bold' >Strengths</p>
                            <li>Known for its promotions & discounts: Instead of focusing on advertisements, Shopee managed to capture customers through various campaigns, for promotions from free shipping, discounts, to flash sales all year round.</li>
                            <li>Customer loyalty: With Shopee coins collected after each purchase, consumers can use these coins to enjoy further discounts on the next purchase, attracting more customers to its platform</li>
                            <li>A variety of payment methods to ease payment transaction</li>

                            <p className='font-bold' >Weaknesses</p>
                            <li>Lack of variety of product origin</li>
                            <li>Quality of items is compromised</li>
                        </div>
                        <div className='flex flex-col gap-4 flex-1' >
                            <div className='flex flex-col justify-center items-center h-32' >
                                <img className='w-1/2' src={lazada} alt="" />
                            </div>

                            <p className='font-bold' >Strengths</p>
                            <li>Free return: free return of items received in case the item doesn’t meet the client’s expectations.</li>
                            <li>Brand presence: Lazada is well known in the local market and has already gained customers’ trust</li>
                            <li>Wide variety of sellers: with the potential sales from high traffic channel, more seller want to go on board to the Lazada platform</li>
                            <li>A variety of payment methods to ease payment transaction</li>

                            <p className='font-bold' >Weaknesses</p>
                            <li>Limited free shipping options</li>
                            <li>Quality of items is compromised</li>
                            <li className='mb-10'  >Lack of variety from product origin</li>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center mt-40 gap-4 px-48'>
                <h2 className='text-center ' >User's Persona</h2>
                <p className='text-center' >Using insights gained from secondary research, I created personas to represent Amazon’s users demographics.</p>

                <div className='w-9/12' >
                    <img src={persona} alt="" />
                </div>


            </div>

            <div className='flex flex-col items-center mt-40 gap-4 px-48' >
                <p className='mt-10 '>Define & Ideate</p>
                <h3>Defining The Problem</h3>
                <p className='text-center' >To help define these problems, I used my understanding of the different persona to create POV statements to frame the problem from the user’s perspective. I used these POV statements to identify How Might We questions which would fuel my process to brainstorm solutions.</p>
                <div className='w-8/12' >
                    <img src={hmw} alt="" />
                </div>

                <div className="grid grid-cols-3">
                    <div className="border p-4">
                        hello
                    </div>
                    <div className="border p-4">
                        hello
                    </div>
                    <div className="border p-4">
                        hello
                    </div>
                    <div className="border p-4">
                        hello
                    </div>
                    <div className="border p-4">
                        hello
                    </div>
                    <div className="border p-4">
                        hello
                    </div>
                    <div className="border p-4">
                        hello
                    </div>
                    <div className="border p-4">
                        hello
                    </div>
                    <div className="border p-4">
                        hello
                    </div>
                </div>

                <h3>Information Architecture</h3>
                <p className='text-center' >To empathize with the users, I created user flows to step into their thoughts and better understand their overall journey.</p>
                <div className='w-full' >
                    <img src={userflow} alt="" />
                </div>

                <h3>Lo Fi Wireframe Sketches</h3>
                <div className='w-full' >
                    <img src={lofi1} alt="" />
                </div>
                <div className='w-8/12' >
                    <img src={lofi2} alt="" />
                </div>
            </div>

            <div className='flex flex-col items-center mt-40 gap-4 px-28 ' >
                <p className='mt-10 '>Prototype & Test</p>
                <h3 className='mb-10 '>High Fidelity Wireframes</h3>
            </div>


            <div className='flex flex-col items-center gap-4 px-28 ' >
                <div className='flex flex-row' >
                    <div className='w-full flex flex-col justify-end items-end' >
                        <img className='w-1/2 ' src={click} alt="" />
                        <a href="https://www.figma.com/proto/R5nR9IGpbN6NcwjrBkaLBw/Amazon?node-id=1%3A734&scaling=scale-down&page-id=0%3A1" target="_blank">
                            <img src={homepage} alt="" />
                        </a>

                    </div>
                    <div className='w-full justify-end items-end flex flex-col' >
                        <a href="https://www.figma.com/proto/R5nR9IGpbN6NcwjrBkaLBw/Amazon?node-id=79%3A687&scaling=min-zoom&page-id=79%3A686" target="_blank">
                            <img src={product} alt="" />
                        </a>
                    </div>
                    <div className='w-full justify-end items-end flex flex-col' >

                        <a href="https://www.figma.com/proto/R5nR9IGpbN6NcwjrBkaLBw/Amazon?node-id=79%3A845&scaling=scale-down&page-id=79%3A845" target="_blank">
                            <img src={category} alt="" />
                        </a>
                    </div>
                </div>

                <div className='flex flex-row justify-center mt-10 ' >
                    <div className='w-1/3' >
                        <a href="https://www.figma.com/proto/R5nR9IGpbN6NcwjrBkaLBw/Amazon?node-id=132%3A305&scaling=scale-down&page-id=132%3A305&starting-point-node-id=137%3A397&show-proto-sidebar=1" target="_blank">
                            <img src={cart} alt="" />
                        </a>
                    </div>
                    <div className='w-1/3' >
                        <a href="https://www.figma.com/proto/R5nR9IGpbN6NcwjrBkaLBw/Amazon?node-id=137%3A396&scaling=scale-down&page-id=137%3A395" target="_blank">
                            <img src={payment} alt="" />
                        </a>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center mt-40 gap-4 px-40 ' >
                <h2 className='text-center ' >Reflection</h2>
                <p className='text-center'>Overall, this project has made me understand how important the user experience is especially for an e-commerce platform when seamless journey means more leads and conversions, directly impacting the business.
                </p>
            </div>

            <Footer />







        </div>


    );

}

export default Amazon