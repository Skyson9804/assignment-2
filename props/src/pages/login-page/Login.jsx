import { useState } from "react";
import Buttons from "../../components/buttons";
import Inputs from "../../components/inputs";
import Card from "../../components/card";
import Navbar from "../../components/navbar/navbar";
const Login = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    permanentAddress: "",
    tempAddress: "",
    phone: "",
    fatherName: "",
    motherName: "",
    collegeName: "",
    collegeAddress: "",
  });

  const handleChnage = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.age ||
      !formData.email ||
      !formData.permanentAddress ||
      !formData.tempAddress ||
      !formData.phone ||
      !formData.fatherName ||
      !formData.motherName ||
      !formData.collegeName||
      !formData.collegeAddress
    ) {
      alert("Please fill all the fields");
      return;
    }
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
   
    <Navbar/>
      <div className="w-screen bg-[#d6eadf] flex justify-center items-center px-4 py-10">
        <form
          className="w-full max-w-3xl bg-[#a7dece81] shadow-slate-600 p-10 rounded-3xl shadow-2xl flex flex-col gap-5 md:grid md:grid-cols-2 relative"
          onSubmit={handleSubmit}
        >
          <h2 className="col-span-2 text-4xl font-extrabold text-center bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-transparent bg-clip-text drop-shadow-md mb-6">
            Register
          </h2>

          <Inputs
            label="First Name"
            placeholder="First Name"
            name="firstName"
            onChange={handleChnage}
            value={formData.firstName}
            type="text"
          />
          <Inputs
            label="Last Name"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChnage}
            value={formData.lastName}
            type="text"
          />
          <Inputs
            label="Age"
            placeholder="Age"
            name="age"
            onChange={handleChnage}
            value={formData.age}
            type="number"
          />
          <Inputs
            label="Email"
            placeholder="example@gmail.com"
            name="email"
            onChange={handleChnage}
            value={formData.email}
            type="email"
          />
          <Inputs
            label="Permanent Address"
            placeholder="Permanent Address"
            name="permanentAddress"
            onChange={handleChnage}
            value={formData.permanentAddress}
            type="text"
          />
          <Inputs
            label="Phone Number"
            placeholder="Phone Number"
            name="phone"
            onChange={handleChnage}
            value={formData.phone}
            type="text"
          />
          <Inputs
            label="Temp Address"
            placeholder="Temporary Address"
            name="tempAddress"
            onChange={handleChnage}
            value={formData.tempAddress}
            type="text"
          />
          <Inputs
            label="Father Name"
            placeholder="Father Name"
            name="fatherName"
            onChange={handleChnage}
            value={formData.fatherName}
            type="text"
          />
          <Inputs
            label="Mother Name"
            placeholder="Mother Name"
            name="motherName"
            onChange={handleChnage}
            value={formData.motherName}
            type="text"
          />
          <Inputs
            label="College Name"
            placeholder="College Name"
            name="collegeName"
            onChange={handleChnage}
            value={formData.collegeName}
            type="text"
          />
          <Inputs
            label="College Address"
            placeholder="College Address"
            name="collegeAddress"
            onChange={handleChnage}
            value={formData.collegeAddress}
            type="text"
          />

          <div className="col-span-2 flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
            <Buttons className="" title="Register" type="submit" />
          </div>
        </form>
      </div>
       <Card/>
    </>
    
    
  );
};

export default Login;
