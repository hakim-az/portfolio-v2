import Website from '../../assets/images/website.png'
import GitHub from '../../assets/skills/github.svg'
import { motion } from "framer-motion"


const Project = ({image, title, githubUrl, viewUrl}) => {
  return (
    <motion.div   initial={{ opacity:0, x: '-50%' }} whileInView={{ opacity:1, x: "0"  }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} className='w-2/5 mb-10' style={{minWidth: '350px'}}>
        <div className='w-full h-80 bg-white bg-cover bg-center bg-no-repeat rounded max-[834px]:h-56' style={{backgroundImage : `url(${image})`}}>
            
        </div>
        <div className='mt-3 flex items-center justify-between'>
            <h3 className='text-white text-xl font-medium'> {title} </h3>
            <div className='flex gap-3'>
            {githubUrl !== '#' &&                
                <a href={githubUrl} target="_blank" rel="noreferrer">
                    <img className=' w-7 h-7' src={GitHub} alt="github-icon" />
                </a>
            }
                <a href={viewUrl} target="_blank" rel="noreferrer">
                    <img className=' w-7 h-7' src={Website} alt="website-icon" />
                </a>
            </div>
        </div>
    </motion.div>
  )
}

export default Project