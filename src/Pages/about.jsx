import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import me from '../images/about/me.JPG';
import skills from '../images/about/skills.png';



function about() {
    return (

        <div className="content">

            <Navbar />

            <div className='px-40 flex flex-row'>



                <div className='flex flex-col w-3/6 gap-4 pr-10'>

                    <h3 >Hey there!</h3>
                    <h1 className='font-sans'>I'm Wei Zhen</h1>
                    <p>I'm an aspiring product designer based in Singapore. I'm passionate about creating an impactful and meaningful user experience through design. With my experiences in business and marketing, I am able to see through the lenses of users as well as businesses and empathise with them.</p>
                    <h3>Drive . Commitment . Gratitude .</h3>
                    <p>I hold these values dearly to my heart. That burning passion in me provides clarity in my purposes. Cultivating a habit is what keeps me committed to my goals. And gratitude is a reminder for me to appreciate the little things in life.</p>
                    <h3>What got me into product design?</h3>
                    <p>As an economics undergraduate, I learn to draw quantitative insights from a pool of data which brushes my numerical, analytical and problem-solving skills. It helps me to think strategically and make decisions to optimise the outcome. I got the opportunity to apply such soft skills during my marketing internships.</p>
                    <p>While I was interning in Shopee Singapore, I got lots of exposure in website design and wireframe creations as I was tasked to design thematic microsites such as cameras, video games and home appliances microsites. Often, I find myself enjoying that freedom to unleash my creativity through design. While doing my post-campaign analysis, I learnt how designs play a significant role in bounce rate, traffic and consumer retention.</p>
                    <p>As adventurous as I can be, I challenged myself to pick up HTML, CSS and react to code out my own website rather than using templates to deploy.</p>
                    <h3>TLDR</h3>
                    <p>It's been a long journey thus far but I’ve never regretted any of the choices made. My past experiences have equipped me with transferable skills and that accumulation of skills and experiences have moulded me into who I am today.</p>
                </div>

                <div className='w-3/6 pl-10' >
                    <img src={me} alt="" />
                    <h3 className='mt-10 mb-10'>Skills</h3>

                    <div className='flex flex-row '>
                        <img src={skills} alt="" />
                       
                    </div>

                </div>


            </div>

            <Footer />

        </div>




    );
}

export default about