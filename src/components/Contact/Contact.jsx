import Title from "../Title/Title"
import MessageImage from '../../assets/images/message.png'


import Figma from '../../assets/social/figma.svg'
import Github from '../../assets/social/github.svg'
import Gmail from '../../assets/social/gmail.svg'
import Linkedin from '../../assets/social/linkedin.svg'
import Whatsapp from '../../assets/social/whatsapp.svg'
import Form from "./Form"


const Contact = () => {

    const socials = [
        {
            id: 1,
            image : Figma,
            url: "https://figma.com/@hakimazzaz",
        },
        {
            id: 2,
            image : Github,
            url: "https://github.com/hakim-az",
        },
        {
            id: 3,
            image : Gmail,
            url: "mailto:azzazhakimou@gmail.com",
        },
        {
            id: 4,
            image : Linkedin,
            url: "https://www.linkedin.com/in/abdelhakim-azzaz-27194a1b3/",
        },
        {
            id: 5,
            image : Whatsapp,
            url: "tel:+231779991468",
        },
    ]

    return (
        <section id="contact" className="pt-24">
            <div className="box-container flex items-center justify-evenly flex-wrap">
                <Title Title='Contact me' />
                {/* Contact image */}
                <div className="w-2/5 max-[768px]:mb-12 flex items-center justify-center flex-col" style={{minWidth: '350px'}}>
                    <h3 className='text-green-600 text-center text-4xl'>Get in touch !</h3>
                    <img className=" w-60 rounded" src={MessageImage} alt="message-icon" />
                    <div className="flex gap-4 mt-10">
                        {socials.map((social) => <a href={social.url} target="_blank" key={social.id}> <img className="w-10 h-10 rounded hover:bg-green-500 p-1" src={social.image} alt="social-icon" /></a> )}
                    </div>
                </div>
                {/* Contact form */}
                <Form />
            </div>
        </section>
    )
}

export default Contact