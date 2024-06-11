import { motion } from "framer-motion"

const Footer = () => {
    return (
        <motion.footer initial={{ opacity:0, x: '-300px' }} whileInView={{ opacity:1, x: "0"  }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }}  className="py-24">
            <h3 className="text-white text-lg text-center">Azzaz abdelhakim &#169; 2024
                
            </h3>
        </motion.footer>
    )
}

export default Footer