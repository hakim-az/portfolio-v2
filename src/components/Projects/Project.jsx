import Website from '../../assets/images/website.png'
import GitHub from '../../assets/skills/github.svg'


const Project = ({image, title, githubUrl, viewUrl, figmaUrl}) => {
  return (
    <div className='w-2/5 mb-10' style={{minWidth: '350px'}}>
        <div className='w-full h-80 bg-white rounded max-[834px]:h-56' style={{backgroundImage : `url(${image})`, backgroundPosition : 'center', backgroundSize: 'cover', backgroundRepeat : 'no-repeat'}}>
            
        </div>
        <div className='mt-3 flex items-center justify-between'>
            <h3 className='text-white text-xl font-medium'> {title} </h3>
            <div className='flex gap-3'>
                <a href={githubUrl} target="_blank">
                    <img className=' w-7 h-7' src={GitHub} alt="github-icon" />
                </a>
                <a href={viewUrl} target="_blank">
                    <img className=' w-7 h-7' src={Website} alt="website-icon" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Project