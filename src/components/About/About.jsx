import Cv from "../Cv/Cv"
import Title from "../Title/Title"
// SKILLS
import Html from '../../assets/skills/html.svg'
import Css from '../../assets/skills/css.svg'
import Javascript from '../../assets/skills/javascript.svg'
import Sass from '../../assets/skills/sass.svg'
import Tailwind from '../../assets/skills/tailwind-css.svg'
import Figma from '../../assets/skills/figma.svg'
import ReactJs from '../../assets/skills/react-js.svg'
import NodeJs from '../../assets/skills/node-js.svg'
import ExpressJs from '../../assets/skills/express-js.svg'
import NextJs from '../../assets/skills/nextjs-icon.svg'
import Gatsby from '../../assets/skills/gatsbyjs.svg'
import Git from '../../assets/skills/git.svg'
import Ts from '../../assets/skills/typescript.svg'
import Mui from '../../assets/skills/mui.svg'
import CvBlock from "../CvBlock/CvBlock"

const About = () => {

    const skills = [Html, Css, Sass, Tailwind, Git, Javascript, ReactJs, Mui, Figma, Ts, NodeJs, ExpressJs, NextJs, Gatsby];

  return (
    <section id="about" className="bg-gray-900 py-40 ">
        <div className="box-container">
        <Title Title='About me'/>
        </div>
        <div className="box-container flex items-center justify-evenly flex-wrap max-[768px]:flex-col-reverse">
            {/* About content */}
            <div className="w-2/5" style={{minWidth: '350px'}}>
                <p className="text-white py-4 text-justify">
                    I'm <span className="inline text-green-600">Azzaz Abdelhakim</span> a passionate and dedicated individual with a unique blend of skills, combining my expertise as a frontend React.js web developer with my ongoing studies in network administration as a Master's degree student at the university.
                </p>
                <p className="text-white py-4 text-justify">
                    As a <span className="inline text-green-600">Frontend developer</span>, I thrive on transforming ideas and concepts into delightful user experiences. With a keen eye for design and an understanding of user behavior, I craft intuitive and responsive web applications that not only look fantastic but also provide seamless interactions. My proficiency in React Js allows me to build dynamic and cutting-edge websites that cater to the needs of modern-day users.
                </p >
                <a className='mt-8 inline-block px-5 py-2 bg-green-600 rounded-sm text-base text-white hover:bg-green-500' href="#">Get Resume</a>
            </div>
            {/* About image */}
            <div className="w-2/5 max-[768px]:mb-10" style={{minWidth: '350px'}}>
                <img className="w-96 h-96 bg-white rounded" src="#" alt=".." />
            </div>
        </div>
        <div className="box-container flex items-start justify-evenly flex-wrap">
            {/* education */}
            <Cv Title='Education'>
                <CvBlock Title='Baccalaureate - Mathematics'   Position='High School El Mokrani' Date='2016 - 2019' />
                <CvBlock Title='Bachelor degree - Computer Science'   Position='University of Algiers 1' Date='2019 - 2022' />
                <CvBlock Title='Master degree - Computer Science'   Position='University of Algiers 1' Date='2022 - 2024' />
            </Cv>
            {/* experience */}
            <Cv Title='Experience'>
                <CvBlock Title='All Vibes Agency'   Position='Frontend Developer' Date='2020 - 2022' />
                <CvBlock Title='Algeria partners'   Position='Frontend Developer' Date='2022 - 2023' />
                <CvBlock Title='Infinity Agency'   Position='Frontend Developer' Date='2023 - Today' />
            </Cv>
            {/* skills */}
            <Cv Title='Skills'>
                {skills.map((skill, index) =>  <img key={index} className="w-1/4 p-2 hover:bg-green-400 rounded cursor-pointer" src={skill} alt=".." />)}
            </Cv>
        </div>
    </section>
  )
}

export default About