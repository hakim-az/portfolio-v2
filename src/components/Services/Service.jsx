import ServiceIcon from '../../assets/images/service.png'
import { motion } from "framer-motion"


const Service = ({title, description}) => {
  return (
    <motion.div initial={{ opacity:0, x: '-300px' }} whileInView={{ opacity:1, x: "0"  }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }}  className="bg-white p-5 mt-10 rounded flex flex-col justify-between " style={{width: '340px'}}>
      <div className="flex items-center">
        <img className='w-10 h-10' src={ServiceIcon} alt="service-icon" />
        <h3 className="ml-5 text-xl font-semibold text-green-600">{title}</h3>
      </div>
      <p className="py-5 text-justify"> {description} </p>
    </motion.div>
  )
}

export default Service