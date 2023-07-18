import Website from '../../assets/images/website.png'
import GitHub from '../../assets/skills/github.svg'


const Project = () => {
  return (
    <div className='w-2/5 mb-10' style={{minWidth: '350px'}}>
        <img className='w-full h-80 bg-white rounded max-[834px]:h-56' src="#" alt="." />
        <div className='mt-3 flex items-center justify-between'>
            <h3 className='text-white text-xl font-medium'>Project Title</h3>
            <div className='flex gap-3'>
                <a href="#">
                    <img className=' w-7 h-7' src={GitHub} alt="github-icon" />
                </a>
                <a href="#">
                    <img className=' w-7 h-7' src={Website} alt="website-icon" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Project