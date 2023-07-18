import Cv from "../Cv/Cv"
import Title from "../Title/Title"
// SKILLS
import Html from '../../assets/skills/html.svg'
import Css from '../../assets/skills/css.svg'
import Javascript from '../../assets/skills/javascript.svg'
import Sass from '../../assets/skills/sass.svg'
import Tailwind from '../../assets/skills/tailwind-css.svg'
import Bootstrtap from '../../assets/skills/bootstrap.svg'
import Figma from '../../assets/skills/figma.svg'
import ReactJs from '../../assets/skills/react-js.svg'
import NodeJs from '../../assets/skills/node-js.svg'
import ExpressJs from '../../assets/skills/express-js.svg'
import NextJs from '../../assets/skills/nextjs-icon.svg'
import Gatsby from '../../assets/skills/gatsbyjs.svg'
import CvBlock from "../CvBlock/CvBlock"

const About = () => {

    const skills = [Html, Css, Sass, Bootstrtap, Tailwind, Figma, Javascript, ReactJs, NodeJs, ExpressJs, NextJs, Gatsby];

  return (
    <section id="about" className="bg-gray-900 py-40 ">
        <div className="box-container">
        <Title Title='About me'/>
        </div>
        <div className="box-container flex items-center justify-evenly flex-wrap max-[768px]:flex-col-reverse">
            {/* About content */}
            <div className="w-2/5" style={{minWidth: '350px'}}>
                <p className="text-white py-4">
                    lLorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo modi asperiores vitae iure expedita omnis aperiam? Ex nesciunt quasi illo. Porro, commodi quis ea qui sapiente est fuga,
                </p>
                <p className="text-white py-4">
                    sint error voluptatum aut ad vitae beatae saepe excepturi suscipit maiores tenetur rerum. Officiis laboriosam recusandae sunt quasi soluta, nesciunt asperiores quaerat nulla voluptates officia sed totam, provident facilis reprehenderit, debitis doloremque.
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
                <CvBlock Title='Baccalauréat - Mathématiques'   Position='Lycée El mokrani' Date='2016 - 2019' />
                <CvBlock Title='Baccalauréat - Mathématiques'   Position='Lycée El mokrani' Date='2016 - 2019' />
                <CvBlock Title='Baccalauréat - Mathématiques'   Position='Lycée El mokrani' Date='2016 - 2019' />
            </Cv>
            {/* experience */}
            <Cv Title='Experience'>
                <CvBlock Title='All Vibes Agency'   Position='Frontend Developer' Date='2020 - 2022' />
                <CvBlock Title='All Vibes Agency'   Position='Frontend Developer' Date='2020 - 2022' />
                <CvBlock Title='All Vibes Agency'   Position='Frontend Developer' Date='2020 - 2022' />
            </Cv>
            {/* skills */}
            <Cv Title='Skills'>
                {skills.map((skill) =>  <img className="w-1/4 p-2 hover:bg-green-400 rounded cursor-pointer" src={skill} alt=".." />)}
            </Cv>
        </div>
    </section>
  )
}

export default About