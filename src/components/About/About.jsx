import Title from "../Title/Title"

const About = () => {
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
    </section>
  )
}

export default About