import linkedin from '../images/homepage/linkedin.png';
import email from '../images/homepage/email.png';

function Footer () {
    return (
        <div className='bg-rose-200 h-56 mt-20 flex flex-col justify-center'>
            <div className='flex justify-center mb-5 text-2xl font-Open_Sans'>
                Lets Have A Chat!
            </div>
            <div className='flex flex-row justify-center gap-10'>

                <a href="https://www.linkedin.com/in/weizhensuen/">
                    <img className='w-10 h-10' src={linkedin} alt="" />
                </a>

                <a href="mailto:wei.zhen.suen@gmail.com">
                    <img className='w-10 h-10' src={email} alt="" />
                </a>

            </div>

        </div>
    )
}

export default Footer

