import HeroImage from "../assets/heroImage.jpg";

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <img src={HeroImage} alt=""
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform
        transition-transform duration-300 hover:scale-105'/>
      <h1 className='text-4xl font-bold'>
        I&apos;m{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          Prasath N
        </span>
        , Frontend Developer
      </h1>

      <p className='mt-4 text-lg text-gray-300'>
        I specialize in building modern and responsive web applications.
      </p>

      <div className="mt-8 flex flex-col items-center space-y-4 md:flex-row md:justify-center md:space-x-4 md:space-y-0">
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white block transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          <a href="#contact">Contact With Me</a>
        </button>
        <button
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white block transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          <a href="https://drive.google.com/file/d/1Ac8zaXoknjEC-U1U4gTG42GDaJTHYOD-/view?usp=sharing">Resume</a>
        </button>
      </div>

    </div>
  )
}

export default Hero
