import HeroImage from '../../assets/images/hero.png'

const Hero = () => {
  return (
    <section className="hero pt-20">
        <div className="box-container flex items-center justify-between max-[834px]:flex-col-reverse">
            {/* Hero content */}
            <div className="hero-content w-1/2 max-[834px]:text-center max-[834px]:w-full max-[834px]:flex max-[834px]:flex-col max-[834px]:items-center max-[834px]:mt-10">
                <span className='text-green-600 text-4xl'>Hey, i'm</span>
                <h1 className='text-white  text-5xl'>Azzaz Abdelhakim</h1>
                <h2 className='text-green-600 text-4xl mt-8'>React Js Developer</h2>
                <div className='mt-20 flex gap-8'>
                    <a className='px-5 py-2 bg-green-600 rounded-sm text-base text-white hover:bg-green-500' href="#contact">Get in touch</a>
                    <a className='px-5 py-2 bg-white rounded-sm text-base text-green-600 hover:bg-green-500 hover:text-white' href="#">Get Resume</a>
                </div>
            </div>
            {/* Hero image */}
            <div className="hero-image w-1/2 max-[834px]:w-2/3 max-[600px]:w-full">
                <img src={HeroImage} alt="hero-image" />
            </div>
        </div>
    </section>
  )
}

export default Hero