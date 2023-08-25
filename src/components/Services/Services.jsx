import Title from "../Title/Title"
import Service from "./Service"

const Services = () => {

  const services = [
    {
      id : 1,
      title : "Responsive Web",
      description : "Create websites that adapt seamlessly to different devices, ensuring an optimal user experience on desktops, tablets, and mobile phones."
    },
    {
      id : 2,
      title : "Custom Component",
      description : "Craft tailor-made React components that can be reused across projects, saving time and ensuring consistency in design and functionality."
    },
    {
      id : 3,
      title : "API Integration",
      description : "Integrate external APIs into web applications, enabling seamless data retrieval and display, and creating dynamic, real-time content."
    },
    {
      id : 4,
      title : "Performance Optimization",
      description : "Fine-tune website performance by optimizing code, assets, and loading times, delivering fast and responsive applications to end-users."
    },
    {
      id : 5,
      title : "Single Page Applications",
      description : "Develop modern, smooth, and fast-loading SPAs that eliminate the need for page reloads, providing users with a fluid and continuous browsing experience."
    },
    {
      id : 6,
      title : "Interactive Animations",
      description : "I leverage Framer Motion to create captivating and smooth animations that enhance user interactions and elevate the overall user experience. "
    },

  ]


  return (
    <section id="services" className="pt-24">
        <div className="box-container flex flex-wrap justify-evenly items-stretch overflow-hidden">
            <Title Title='Services'/>
            {services.map((service) => <Service key={service.id} title={service.title} description={service.description} /> )}
        </div>
    </section>
  )
}

export default Services