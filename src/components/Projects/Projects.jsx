import Title from '../Title/Title'
import Project from './Project'


const Projects = () => {

  return (
    <section id="projects" className='bg-gray-900 pb-20'>
        <div className="box-container flex items-center justify-evenly flex-wrap">
            <Title Title='Projetcs'/>
            {/* Projects */}
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            {/* Button view more */}
            <div className='w-full flex items-center justify-center mt-4'>
                <button className='px-5 py-2 bg-green-600 rounded-sm text-base text-white hover:bg-green-500'>View more</button>
            </div>
        </div>
    </section>
  )
}

export default Projects