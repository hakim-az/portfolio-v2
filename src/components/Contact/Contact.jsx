import Title from "../Title/Title"

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 pb-10">
        <div className="box-container flex items-center justify-evenly flex-wrap">
            <Title Title='Contact me' />
            {/* Contact image */}
            <div className="w-2/5 max-[768px]:mb-12 " style={{minWidth: '350px'}}>
                <img className="w-full h-80 bg-white rounded" src="#" alt="" />
            </div>
            {/* Contact form */}
            <form action="POST" className="w-2/5" style={{minWidth: '350px'}}>
                {/* input */}
                <div className="flex flex-col mb-5">
                    <label className="text-white text-lg pb-2" htmlFor="full-name">Full name</label>
                    <input className="py-2 px-3 rounded outline-none border-2 focus:border-green-600 text-lg" type="text" />
                </div>
                {/* input */}
                <div className="flex flex-col mb-5">
                    <label className="text-white text-lg pb-2" htmlFor="email">Email</label>
                    <input className="py-2 px-3 rounded outline-none border-2 focus:border-green-600 text-lg" type="text" />
                </div>
                {/* input */}
                <div className="flex flex-col">
                    <label className="text-white text-lg pb-2" htmlFor="message">Message</label>
                    <textarea className="p-3 border-2 focus:border-green-600 text-lg outline-none rounded" style={{height : '150px', resize: 'none'}} name="message" id="" cols="30" rows="10"></textarea>
                </div>
                {/* Button */}
                <button className='mt-5 float-right px-5 py-2 bg-green-600 rounded-sm text-base text-white hover:bg-green-500'>Submit</button>
            </form>
        </div>
    </section>
  )
}

export default Contact