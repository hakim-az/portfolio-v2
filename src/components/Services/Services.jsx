import Title from "../Title/Title"
import Service from "./Service"

const Services = () => {
  return (
    <section id="services" className="bg-slate-900">
        <div className="box-container flex items-start flex-wrap justify-evenly">
            <Title Title='Services'/>
            <Service/>
            <Service/>
            <Service/>
            <Service/>
            <Service/>
            <Service/>
        </div>
    </section>
  )
}

export default Services