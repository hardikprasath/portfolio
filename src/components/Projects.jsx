import trendifyImage from "../assets/Trendify.png";
import weatherImage from "../assets/weather.png";
import currencyImage from "../assets/currency.png";
import qrcodeImage from "../assets/qrcode.png";
import passwordImage from "../assets/passwordGenerator.png";
import bmiImage from "../assets/bmi.png";

const projects = [
    {
        id: 1,
        name: "Trendify Fashion",
        technologies: "ReactJS, MySQL",
        image: trendifyImage,
        github: "https://github.com/prasathnanthakumar?tab=repositories",
    },
    {
        id: 2,
        name: "Weather App",
        technologies: "ReactJS",
        image: weatherImage,
        github: "https://github.com/prasathnanthakumar?tab=repositories",
    },
    {
        id: 3,
        name: "Currency Converter",
        technologies: "ReactJS",
        image: currencyImage,
        github: "https://github.com/prasathnanthakumar?tab=repositories",
    },
    {
        id: 4,
        name: "QRCODE Generator",
        technologies: "ReactJS",
        image: qrcodeImage,
        github: "https://github.com/prasathnanthakumar?tab=repositories",
    },
    {
        id: 5,
        name: "Password Generator",
        technologies: "ReactJS",
        image: passwordImage,
        github: "https://github.com/prasathnanthakumar?tab=repositories",
    },
    {
        id: 6,
        name: "BMI Calculator",
        technologies: "ReactJS",
        image: bmiImage,
        github: "https://github.com/prasathnanthakumar?tab=repositories",
    },
]

const Projects = () => {
    return (
        <div className='bg-black text-white py-20' id='project'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map(project => (
                        <div key={project.id} className='bg-gray-800 p-6 rounded-lg
                        hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                            <img src={project.image} alt={project.name} className='rounded-lg mb-4
                            w-full h-48 object-cover'/>
                            <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                            <p className='text-gray-400 mb-4'>{project.technologies}</p>
                            <a href={project.github} className='inline-block bg-gradient-to-r from-green-400
                            to-blue-500 text-white px-4 py-2 rounded-full' target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects