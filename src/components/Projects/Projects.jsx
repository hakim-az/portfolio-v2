import { useState } from 'react'
import Title from '../Title/Title'
import Project from './Project'
import ProjectOne from '../../assets/projects/project-1.png'
import ProjectTwo from '../../assets/projects/project-2.png'
import ProjectThree from '../../assets/projects/project-3.png'
import ProjectFour from '../../assets/projects/project-4.png'
import ProjectFive from '../../assets/projects/project-5.png'
import ProjectSix from '../../assets/projects/project-6.png'
import ProjectSeven from '../../assets/projects/project-7.png'
import ProjectHeight from '../../assets/projects/project-8.png'
import ProjectNine from '../../assets/projects/project-9.png'
import ProjectTen from '../../assets/projects/project-10.png'
import DeepMinds from '../../assets/projects/deepminds.png'
import Hubforward from '../../assets/projects/hubforward.png'
import ProvenMed from '../../assets/projects/provenmed.png'
import Rdock from '../../assets/projects/rdock.png'
import Root4ai from '../../assets/projects/root4ai.png'
import Vitalls from '../../assets/projects/vitalls.png'


const Projects = () => {

  const projects = [
    {
      id : 1,
      image : DeepMinds,
      title : 'Deepminds',
      viewUrl : 'https://www.deepminds.me/',
      githubUrl : '#',
    },
    {
      id : 2,
      image : Hubforward,
      title : 'Hubforward',
      viewUrl : 'https://hubforward.com/',
      githubUrl : '#',
    },
    {
      id : 3,
      image : ProvenMed,
      title : 'ProvenMed',
      viewUrl : 'https://www.provenmed.com/',
      githubUrl : '#',
    },
    {
      id : 4,
      image : Rdock,
      title : 'Rdock',
      viewUrl : 'https://rdock.co/',
      githubUrl : '#',
    },
    {
      id : 5,
      image : Root4ai,
      title : 'Root4Ai',
      viewUrl : 'https://www.root4.ai/',
      githubUrl : '#',
    },
    {
      id : 6,
      image : Vitalls,
      title : 'Vitalls',
      viewUrl : 'https://vitalls.ai/',
      githubUrl : '#',
    },
    {
      id : 7,
      image : ProjectOne,
      title : 'Life Time',
      viewUrl : 'https://life-time.netlify.app/',
      githubUrl : '#',
    },
    {
      id : 8,
      image : ProjectTwo,
      title : 'Sunny',
      viewUrl : 'https://comforting-licorice-482ab1.netlify.app/',
      githubUrl : '#',
    },
    {
      id : 9,
      image : ProjectThree,
      title : 'Furni Shop',
      viewUrl : 'https://furni-shop-dz.netlify.app/',
      githubUrl : 'https://github.com/hakim-az/FurniShop',
    },
    {
      id : 10,
      image : ProjectFour,
      title : 'Agency Exconsultancy',
      viewUrl : 'https://agency-exconsultancy.netlify.app/',
      githubUrl : 'https://github.com/hakim-az/agency',
    },
    {
      id : 11,
      image : ProjectFive,
      title : 'GPT-3 Website',
      viewUrl : 'https://gpt-3-website.netlify.app/',
      githubUrl : 'https://github.com/hakim-az/GPT-3',
    },
    {
      id : 12,
      image : ProjectSix,
      title : 'Easy Bank',
      viewUrl : 'https://web-05-easybank.netlify.app/',
      githubUrl : 'https://github.com/hakim-az/web-05-Easybank',
    },
    {
      id : 13,
      image : ProjectSeven,
      title : 'Blogr',
      viewUrl : 'https://web-03-blogr.netlify.app/',
      githubUrl : 'https://github.com/hakim-az/web-03-Blogr',
    },
    {
      id : 14,
      image : ProjectHeight,
      title : 'Loop Studios',
      viewUrl : 'https://web-04-loopstudios.netlify.app/',
      githubUrl : 'https://github.com/hakim-az/web-04-Loopstudios',
    },
    {
      id : 15,
      image : ProjectNine,
      title : 'Focal Portfolio',
      viewUrl : 'https://web-01-foacl-portfolio.netlify.app/',
      githubUrl : 'https://github.com/hakim-az/web-01-FOCAL',
    },
    {
      id : 16,
      image : ProjectTen,
      title : 'Sunny Side',
      viewUrl : 'https://web-02-sunnyside.netlify.app/',
      githubUrl : 'https://github.com/hakim-az/web-02-Sunnyside',
    }
  ];

  const [more, setMore] = useState(6);
  const [view, setView] = useState(true);

  const handleMore = () => {
    setMore(projects.length)
    setView(false)
  }
  const handleLess = () => {
    setMore(6)
    setView(true)
  }

  return (
    <section id="projects" className='pt-24'>
        <div className="box-container flex items-center justify-evenly flex-wrap overflow-hidden">
            <Title Title='Projetcs'/>
            {/* Projects */}
            {projects.slice(0,more).map(({id, image, title, githubUrl, viewUrl}) => <Project key={id} image={image} title={title} viewUrl={viewUrl} githubUrl={githubUrl} /> )}
            {/* Button view more/less */}
            {
              view 
              ? <div className='w-full flex items-center justify-center mt-4' >
                  <button className='px-5 py-2 bg-green-600 rounded-sm text-base text-white hover:bg-green-500' onClick={handleMore}>View more</button>
                </div>
              : <div className='w-full flex items-center justify-center mt-4' >
                  <button className='px-5 py-2 bg-green-600 rounded-sm text-base text-white hover:bg-green-500' onClick={handleLess}>View less</button>
                </div> 
            }
        </div>
    </section>
  )
}

export default Projects