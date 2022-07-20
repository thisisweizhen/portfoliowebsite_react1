import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import ranking from '../images/amazon/ranking.png';
import process from '../images/amazon/designprocess.png';
import research from '../images/amazon/marketresearch.png';
import lazada from '../images/amazon/lazada.png';
import shopee from '../images/amazon/shopee.png';
import userflow from '../images/amazon/userflow.png';
import lofi1 from '../images/amazon/lofi1.PNG';
import lofi2 from '../images/amazon/lofi2.PNG';
import lofi3 from '../images/amazon/lofi3.PNG';
import homepage from '../images/amazon/homepage.png';
import product from '../images/amazon/product.png';
import category from '../images/amazon/category.png';
import payment from '../images/amazon/payment.png';
import cart from '../images/amazon/cart.png';
import click from '../images/amazon/click.png';
import joe from '../images/amazon/joe.png';
import victoria from '../images/amazon/victoria.png';
import amy from '../images/amazon/amy.png';
import MediumImage from '../components/images/MediumImage'
import personas from '../assets/amazon/persona.json'
import Persona from '../components/amazon/persona'
import micrositegif from '../images/amazon/microsite.gif';
import checkout from '../images/amazon/checkout.png';
import voucher from '../images/amazon/voucher.jpg';
import details from '../images/amazon/details.png';
import condensed from '../images/amazon/condensed.gif';
import select from '../images/amazon/select.gif';
import popup from '../images/amazon/popup.gif';
import paymentsummary from '../images/amazon/paymentsummary.gif';



function Amazon() {
    return (
        <div >


            <  Navbar />




            <div className='h-[90vh] flex flex-col items-center justify-center pb-52 '>
                <div className="text-7xl font-bold text-center xl:mt-20 mt-40">
                    Amazon.sg
                </div>
                <p className='mt-10 text-left lg:px-96 px-10 '>Amazon.com is an international e-commerce company and the leading e-retailer in the United States, with net sales amounting to close to 386 billion U.S. dollars in 2020. As a worldwide e-commerce company, Amazon operates in 13 countries and ships worldwide to more than 100 countries. Due to its global scope and reach, Amazon is considered one of the most valuable brands worldwide.</p>

            </div>

            <div className=' xl:px-96 px-5 bg-neutral-100 '>
                <div className='flex flex-col items-center gap-4'>

                    <h2 className='mt-20' >Project Overview</h2>
                    <h3>Problem Statement</h3>
                    <div className='flex flex-col justify-center items-align shrink-0 ' >
                        <MediumImage image={ranking} />
                    </div>

                    <p className=' text-left' >Though Amazon is the largest online retailer in the world, it ranks only 3rd in Singapore with Shopee leading at 13.6 million visits as of the 2nd quarter of 2021, followed by Lazada at 7.5 million while Amazon at 6.5 million (Statista, 2021). However, I believe Amazon has the potential to strive in Singapore as well by redesigning its mobile application</p>
                    <h3 className='mt-10 ' >Goal:</h3>

                    <ol className='text-left mb-20' >Smoothen the payment process starting from the product page until the payment is made</ol>
                </div>
            </div>

            <div className='flex flex-col items-center mt-40 gap-4 xl:px-96 px-5 text-justify'>
                <h2 className='text-center ' >Design Process</h2>
                <MediumImage image={process} />
                <p className='mt-40'>Emphatise</p>
                <h3>Market Research</h3>
                <MediumImage image={research} />
                <li className='mt-10' >Singapore e-commerce market is projected to grow at a compound annual growth rate of 16.2% through 2025 to be worth $14.2b, according to GlobalData.</li>
                <br />
                <li>73% of online consumers in Singapore have patronized overseas merchants. Presently, cross-border e-commerce takes 35% of the entire Singapore e-commerce market (Heysara PteLtd, 2021).
                </li>
                <br />
                <li>According to a study by performance marketing firm Reprise Digital, Singaporean shoppers are very price-conscious, with 63% of consumers choosing to shop online for promotions and discounts.  </li>
                <br />
                <li>52% of Singaporean shoppers do their due diligence by visiting brand websites before making a purchase decision.</li>
            </div>

            <div className='mt-40'></div>

            <div className='xl:px-80 px-5 gap-4  '>
                <div className='pt-20' >

                    <p className='mt-10 text-center mb-10 '>Define & Ideate</p>

                    <h2 className=' pb-10 text-center' >Early Insights From Current Users</h2>
                    <p className='' >I tested the existing Amazon app with 5 participants who are existing users of e-commerce platforms. My goal was to understand the challenges that users face when purchasing online on Amazon.
                    </p>
                    <div className='flex lg:flex-row flex-col mt-20 items-center justify-center '>
                        <div className='lg:w-1/3 w-3/4 '>
                            <img src={condensed} alt="" />
                        </div>
                        <div className='w-2/3 lg:pl-20 flex flex-col justify-center lg:pt-0 pt-10'>
                            <p className='text-xl font-bold text-left'>Unnecessarily long product page </p>
                            <p className='text-lg mt-10'>Users were unhappy that the microsite is unnecessarily long, consisting of too many information, resulting in an almost endless scrolling. Users want the microsite to be concise with only important and relevant information to be shown. </p>
                        </div>
                    </div>

                    <div className='flex lg:flex-row flex-col mt-20 items-center justify-center '>
                        <div className='lg:w-1/3 w-3/4 '>
                            <img src={checkout} alt="" />
                        </div>
                        <div className='w-2/3 lg:pl-20 flex flex-col justify-center lg:pt-0 pt-10'>
                            <p className='text-xl font-bold text-left'>Unable to select the items they want to check out  </p>
                            <p className='text-lg mt-10'>By default, all items in the cart will be check out, users are unable to choose the items they want to check out. They have to either save or delete them, which result in a hassle when reading the item later. </p>
                        </div>
                    </div>

                    <div className='flex lg:flex-row flex-col mt-20 items-center justify-center  '>
                        <div className='lg:w-1/3 w-3/4'>
                            <img src={voucher} alt="" />
                        </div>
                        <div className='w-2/3 lg:pl-20 flex flex-col justify-center lg:pt-0 pt-10'>
                            <p className='text-xl font-bold text-left'>Discounts and vouchers not automatically applied
                            </p>
                            <p className='text-lg mt-10'>Users felt that it would help if Amazon provides a list of eligible vouchers they could use for their purchase rather than them manually typing it. </p>
                        </div>
                    </div>

                    <div className='flex lg:flex-row flex-col mt-20 items-center justify-center  '>
                        <div className='lg:w-1/3 w-3/4'>
                            <img src={details} alt="" />
                        </div>
                        <div className='w-2/3 lg:pl-20 flex flex-col justify-center lg:pt-0 pt-10'>
                            <p className='text-xl font-bold text-left'>Long check out process

                            </p>
                            <p className='text-lg mt-10'>Users were frustrated with the long check out process that requires them to go through several pages to reach the purchase summary. Users expected a more seamless journey when checking out.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center mt-40 gap-4 xl:px-96 px-5 '>
                <h2 className='text-center mb-10 ' >
                    Success Metrics
                </h2>
                <p>Before i could start on the design, it was important to define success and understand the health of the payment process experience.

                    <br />
                    <br />

                    For this case study, I would define shorter time taken from product selection to payment processed as the definition of success.

                    I will time and observe how users interact with both the current Amazon app and my new design.
                </p>


                {/* <div className="mb-10">
                    Using insights gained from secondary research, I created personas to represent Amazon’s users demographics.
                </div>

                <div className="flex lg:flex-row flex-col  gap-10 w-full">
                    {
                        personas.map((item, index) => {
                            let li = [amy, joe, victoria]
                            return (
                                <Persona
                                    image={li[index]}
                                    name={item.name}
                                    list={item.list}
                                />
                            )
                        })
                    }

                </div> */}

                {/* <p> Using insights gained from secondary research, I created personas to represent Amazon’s users demographics. </p>

                <div className='w-9/12' >
                    <div className="grid grid-cols-3 flex gap-8 mt-10">
                        <div className="flex flex-col justify-center items-center ">
                            <img className='w-1/3' src={amy} alt="" />
                        </div>
                        <div className=" flex flex-col justify-center items-center">
                            <img className='w-1/3' src={joe} alt="" />

                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img className='w-1/3' src={victoria} alt="" />

                        </div>
                        <div className="rounded-2xl bg-amber-200 text-center font-bold flex flex-col items-center justify-center">
                            Amy (The Kiasu Aunty)

                        </div>
                        <div className="rounded-2xl bg-amber-200 text-center font-bold flex flex-col items-center justify-center">
                            John (The Average Joe)

                        </div>
                        <div className="rounded-2xl bg-amber-200 text-center font-bold flex flex-col items-center justify-center">
                            Victoria (The Material Girl)

                        </div>
                        <div className="text-left">
                            <li> Discounts on items is a must</li>
                            <li>Flash sales are her forte</li>
                            <li>Buys anything as long as it's worth the money </li>

                        </div>
                        <div className="text-left">
                            <li> Looking to purchase what he needs online for its convenience</li>
                            <li>No particular brand affinity and interested products are all from different categories</li>
                        </div>
                        <div className="text-left">
                            <li> Shop branded goods </li>
                            <li>Brand authenticity is her priority</li>
                        </div>

                    </div>

                </div> */}


            </div>

            {/* <div className='lg:flex hidden flex-col items-center mt-40 gap-4 lg:px-64 px-20 text-justify' >
                <p className='mt-10 '>Define & Ideate</p>
                <h3>Defining The Problem</h3>
                <p>To help define these problems, I used my understanding of the different persona to create POV statements to frame the problem from the user’s perspective. I used these POV statements to identify How Might We questions which would fuel my process to brainstorm solutions.</p>
                <div className="grid grid-cols-5 mt-10 mb-20">
                    <div className="">

                    </div>
                    <div className="p-4 font-bold bg-amber-200 text-center">
                        Insights

                    </div>
                    <div className=" p-4 font-bold bg-amber-200 text-center">
                        Needs
                    </div>
                    <div className=" p-4 font-bold bg-amber-200 text-center">
                        POV
                    </div>
                    <div className=" p-4 font-bold bg-amber-200 text-center">
                        HMW
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                        <img className='w-1/3' src={amy} alt="" />
                    </div>
                    <div className="border p-4 ">
                        Amy chooses to purchase online when there are deals and discounts
                    </div>
                    <div className="border p-4">
                        To know what exclusive online deals they have
                    </div>
                    <div className="border p-4">
                        Amy needs to know what deals Amazon offers
                    </div>
                    <div className="border p-4 ">
                        How might we inform Amy about the deals we have?
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className='w-1/3' src={joe} alt="" />
                    </div>
                    <div className="border p-4">
                        John trusts what other users have to say before purchasing the items he needs
                    </div>
                    <div className="border p-4">
                        To know what other people think about the products
                    </div>
                    <div className="border p-4">
                        John needs to know what past users have to say before he purchases the product
                    </div>
                    <div className="border p-4 ">
                        How might we help expand the reach of customers’ recommendations to help reach John?
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img className='w-1/3' src={victoria} alt="" />
                    </div>
                    <div className="border p-4">
                        Victoria purchases online when there is a brand she prefers and knows that the products are legitimate
                    </div>
                    <div className="border p-4">
                        To be able to authenticate the authenticity of the brand
                    </div>
                    <div className="border p-4">
                        Victoria needs to be able to authenticate the authenticity of the products and have a wide selection to choose from
                    </div>
                    <div className="border p-4 ">
                        How might we make it easier for Victoria to authenticate the products?
                    </div>
                    <div className=" flex flex-row justify-center items-center">
                        <img className='w-1/3' src={amy} alt="" />
                        <img className='w-1/3' src={joe} alt="" />
                        <img className='w-1/3' src={victoria} alt="" />

                    </div>
                    <div className="border p-4">
                        Buyers purchase online for its convenience
                    </div>
                    <div className="border p-4">
                        To be able to receive their products at the comfort of their house
                    </div>
                    <div className="border p-4">
                        All buyers  needs to know that they can get cheap / free shipping
                    </div>
                    <div className="border p-4 ">
                        How might we educate buyers that Amazon provides good shipping services?
                    </div>
                </div>
            </div> */}

            <div className='flex flex-col items-center mt-40 gap-4 xl:px-96 px-5'>
                <h3>Information Architecture</h3>
                <p className='text-left mt-10' >To empathize with the users, I created user flows to step into their thoughts and better understand their overall journey.</p>
                <div className='w-full' >
                    <MediumImage image={userflow} />
                </div>

                <h3 className='mt-20 mb-10' >Lo Fi Wireframe Sketches</h3>
                <p>With the users’ pain and user flow in mind, I’ve sketched a low fidelity wireframe to have a better picture of how the app will look like.
                </p>
                <div className='flex flex-row flex-1 mt-10'>
                    <div className='w-full' >
                        <MediumImage image={lofi1} />
                    </div>
                    <div className='w-full' >
                        <MediumImage image={lofi2} />
                    </div>
                    <div className='w-full' >
                        <MediumImage image={lofi3} />
                    </div>

                </div>



            </div>


            <div className='flex flex-col items-center mt-40 gap-4 lg:px-96 px-5 ' >
                <p className='mt-10 '>Prototype & Test</p>
                <h3 className='mb-10 '>Introducing Amazon 2.0
                </h3>
                <p>In an age where everything is demanding your time, Amazon gives you time back by providing you with a seamless and effortless payment process. </p>

                <div className='flex lg:flex-row flex-col mt-20 items-center '>
                    <div className='lg:w-1/3 w-3/4' >
                        <img src={condensed} alt="" />
                    </div>
                    <div className='w-2/3 lg:pl-20 pl-0 lg:pt-0 pt-10 flex flex-col justify-center'>
                        <p className='text-xl font-bold text-left'>Condensed product page </p>
                        <p className='text-lg mt-10'>The product page is now condensed with only the important information being shown. Users can always expand the sections if they wish to find out more.
                        </p>
                    </div>
                </div>

                <div className='flex lg:flex-row flex-col mt-20 items-center  '>
                    <div className='lg:w-1/3 w-3/4'>
                        <img src={select} alt="" />
                    </div>
                    <div className='w-2/3 lg:pl-20 pl-0 lg:pt-0 pt-10 flex flex-col justify-center'>
                        <p className='text-xl font-bold text-left'>Select and deselect items they wish to check out </p>
                        <p className='text-lg mt-10'>With the select button, users can choose which products they wish to check out. Press on the icon on the right to add to wishlist, swipe left to delete and make changes to their product variation and quantity.
                        </p>
                    </div>
                </div>

                <div className='flex lg:flex-row flex-col mt-20 items-center  '>
                    <div className='lg:w-1/3 w-3/4'>
                        <img src={popup} alt="" />
                    </div>
                    <div className='w-2/3 lg:pl-20 pl-0 lg:pt-0 pt-10 flex flex-col justify-center'>
                        <p className='text-xl font-bold text-left'>Pop up vouchers section
                        </p>
                        <p className='text-lg mt-10'>When checking out, users view eligible vouchers they can apply  </p>
                    </div>
                </div>

                <div className='flex lg:flex-row flex-col mt-20 items-center  '>
                    <div className='lg:w-1/3 w-3/4'>
                        <img src={paymentsummary} alt="" />
                    </div>
                    <div className='w-2/3 lg:pl-20 pl-0 lg:pt-0 pt-10 flex flex-col justify-center'>
                        <p className='text-xl font-bold text-left'>Shorten payment page


                        </p>
                        <p className='text-lg mt-10'>From 3-4 pages, the payment page is now condensed into 1 page where all important information can be found. This reduces the user journey when making a payment.
                        </p>
                    </div>
                </div>


            </div>

            <div className='flex flex-col items-center mt-40 gap-4 lg:px-96 px-5 ' >
                <h2 className='text-justify mb-10' >User Testing</h2>
                <p className='text-justify'>With my prototype, I have gotten 5 participants to experience using the current Amazon app and my app as I time and observe them. And
                </p>
                <h3 className='mt-10 mb-10'>Its a success!
                </h3>
                <p>The time taken from choosing the product up to making the payment was reduced significantly from 
                    40 seconds on average to 28 seconds on average and that is a decrease of 30%.
</p>
            </div>






            <div className='flex flex-col items-center mt-40 gap-4 lg:px-96 px-5 ' >
                <h2 className='text-justify mb-10' >Reflection</h2>
                <p className='text-left'>Overall, this project has made me understand how important the user experience is especially for an e-commerce platform when seamless journey means more leads and conversions, directly impacting the business. The design thinking process has aided me in understanding the gains and pains of our persona and thus creating designs to address them.
                </p>
                <p>Do check out my
                    <a className='underline decoration-solid text-blue-700' href="https://pumpkincarrot.medium.com/why-amazon-isnt-blooming-in-singapore-55a7707a4fe9" target="_blank"> article</a> to further understand my thought process in these design. Looking forward to hearing some feedback. </p>
            </div>

            <Footer />







        </div>


    );

}

export default Amazon