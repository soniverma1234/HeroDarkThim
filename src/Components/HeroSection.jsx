import bg from "../assets/image.png"
const HeroSection = () => {
  return (
    <section className="relative flex min-h-[90vh] items-center bg-cover bg-center"
    style={{backgroundImage: `url(${bg})`}}>

        <div className="relative mx-auto w-full max-w-6xl px-6">
            <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
                Ideas Into <br />
            Impact</h1>
            <p className="mt-6 max-w-md text-lg text-gray-200">Discover amazing places, breathtaking Sviews and unforgettable experiences.</p>
        
           <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
            View Our Work
           </button>
        </div>
      
    </section>
  )
}

export default HeroSection;
