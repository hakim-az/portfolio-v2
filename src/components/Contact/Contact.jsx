import {useState, useEffect} from 'react'
import Title from "../Title/Title"

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setFormData({...formData, 
                  [name]: value
              })
          }


    const [errors, setErrors] = useState({})

    const validate = (formData) => {
            let formErrors = {}
            if(!formData.name){
                formErrors.name = "Name required"
            }
            if(!formData.email){
                formErrors.email = "Email required"
            } 
            if(!formData.message){
                formErrors.message = "Message is required"
            }
            return formErrors
        }


        const [isSubmitted, setIsSubmitted] = useState(false)

        const handleSubmit = e => {
        setErrors(validate(formData))
        setIsSubmitted(true)
        e.preventDefault();
        }


        useEffect(() => {
            if(Object.keys(errors).length === 0 && isSubmitted){
             fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({ "form-name": "contact-form", ...formData })
              })
              .then(() => alert("Success!"))
              .then(() => setIsSubmitted(false))
              .then(() => setFormData({name: "", email: "",  message: ""}))
              .catch(error => alert(error))}
               }, [errors, formData, isSubmitted])




               const encode = (data) => {
                return Object.keys(data)
                  .map(key => encodeURIComponent(key) + "=" + 
                  encodeURIComponent(data[key]))
                  .join("&");}

  return (
    <section id="contact" className="bg-gray-900 pb-10">
        <div className="box-container flex items-center justify-evenly flex-wrap">
            <Title Title='Contact me' />
            {/* Contact image */}
            <div className="w-2/5 max-[768px]:mb-12 " style={{minWidth: '350px'}}>
                <img className="w-full h-80 bg-white rounded" src="#" alt="" />
            </div>
            {/* Contact form */}
            <form onSubmit={handleSubmit} className="w-2/5" style={{minWidth: '350px'}}>
                {/* input */}
                <div className="flex flex-col mb-5">
                    <label htmlFor="name" className="text-white text-lg pb-2" >Full name</label>
                    <input type="text" name="full-name" id="name" value={formData.name} onChange={handleChange} className="py-2 px-3 rounded outline-none border-2 focus:border-green-600 text-lg"  />
                </div>
                {errors.name && <p>{errors.name}</p>} 
                {/* input */}
                <div className="flex flex-col mb-5">
                    <label htmlFor="email" className="text-white text-lg pb-2" >Email</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="py-2 px-3 rounded outline-none border-2 focus:border-green-600 text-lg"  />
                </div>
                {errors.email && <p>{errors.email}</p>} 
                {/* input */}
                <div className="flex flex-col">
                    <label htmlFor="message" className="text-white text-lg pb-2" >Message</label>
                    <textarea name="message"  id="message" value={formData.message} onChange={handleChange} className="p-3 border-2 focus:border-green-600 text-lg outline-none rounded" style={{height : '150px', resize: 'none'}} ></textarea>
                </div>
                {errors.message && <p>{errors.message}</p>} 
                {/* Button */}
                <button type="submit" className='mt-5 float-right px-5 py-2 bg-green-600 rounded-sm text-base text-white hover:bg-green-500'>Submit</button>
            </form>
        </div>
    </section>
  )
}

export default Contact