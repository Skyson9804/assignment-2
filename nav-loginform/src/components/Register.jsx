
import { useState } from "react"
const Register =()=> {
   const [formData, setFormData]= useState({
                name:"",
                email:"",
                password:"",
                contact:""
})
   const  handleChange =(e)=>{
                // setFormData({...formData, [e.target.name]:e.target.value})
                setFormData({...formData, [e.target.name]:e.target.value})
        }
        const handleSubmit =(e)=>{
                e.preventDefault()
                if(!formData.name || !formData.email || !formData.password){
                        alert("Please fill all the fields")
                        return
                }
              
                console.log(formData)
        }
  return (
    <>
      <div className="min-w-screen min-h-screen bg-[#d6eadf]  flex justify-center">
        <div className="w-[350px] text-[#ffffff] p-2">
          <div className="bg-[#b8e0d481] shadow-slate-600 shadow-lg  p-4 rounded-md">
            <form  onSubmit={handleSubmit}>
            <p className="text-md mb-3 font-medium text-center text-[#6f68d5]">
            {" "}
            Register your account
          </p>
          <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="">Name</label>
              <input
                
                className="px-3 bg-[#ffffff] text-black py-2 outline-none border border-slate-700     rounded-md"
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
                value={formData.name} onChange={handleChange}
              />
            </div>
              <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="">Email</label>
              <input
                
                className="px-3 bg-[#ffffff] text-black py-2 outline-none border border-slate-700 rounded-md"
                type="email"
                name="email"
                placeholder="Enter your Email"
                required
                value={formData.email} onChange={handleChange}
              />
            </div>
              <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="">Password</label>
              <input
                
                className="px-3 bg-[#ffffff] text-black py-2 outline-none border border-slate-700     rounded-md"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                required
                value={formData.password} onChange={handleChange}
              />
            </div>
              <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Contact</label>
              <input
                
                className="px-3 bg-[#ffffff] text-black py-2 outline-none border border-slate-700     rounded-md"
                type="text"
                name="contact"
                placeholder="Enter your Number"
                id="name"
                required
                value={formData.contact} onChange={handleChange}
              />
            </div>
               <div className="flex items-center w-full gap-1 mb-3">
              <input
                className="w-4 h-4  bg-[#ffffff] text-blue-600 overflow-hidden rounded border-gray-300 focus:ring-blue-500"
                type="checkbox"
                name="checkbox"
                placeholder="checkbox"
                id="checkbox"
              />
              <label htmlFor="checkbox">I agree to privacy policy!</label>
            </div>
        
            <button className="bg-[#ffffff] text-[#6f68d5] px-4 py-2 w-full rounded-md font-medium flex justify-center items-center hover:bg-[#6f68d5] hover:text-white transition duration-300">
              <a href="/signup">SignIn</a>
            </button>
            

          </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
