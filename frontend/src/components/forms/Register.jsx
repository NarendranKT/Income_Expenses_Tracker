import React, {useContext, useState} from "react";
import SecureRegister from '../../assets/secureLogin.svg'
import profile from '../../assets/profilePic.svg'
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import { Link } from "react-router-dom";  
import { authContext } from "../context/authContext/AuthContext";


const Register = () => {

  const {registerUserAction} = useContext(authContext)

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: ''
  })

  const { fullname, email, password } = formData;
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);


  const handleToggle = () => {
    if (type==='password'){
        setIcon(eye);
        setType('text')
    } else {
        setIcon(eyeOff)
        setType('password')
    }
}
  

  const onChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!email || !password || !fullname) {
      return alert('Please provide all details')
    }

    registerUserAction(formData);

    // setFormData({
    //   fullname: '',
    //   email: '',
    //   password: ''
    // })
    
  }

    return <>
        <div className= "w-full h-full lg:grid lg:grid-cols-2 lg:gap-28 lg:px-8 flex justify-center items-center font-modern max-md:px-14 py-6 pt-24">
          <div>
            <img className="flex justify-center items-center w-4/5 lg:block max-lg:hidden" src={SecureRegister} alt="Register"/>
        </div>
        
          <div >
          <form onSubmit={onSubmitHandler}
            className="flex flex-col items-center justify-center lg:w-4/5  rounded-lg p-3 py-8 lg:shadow-[0px_0px_40px_-10px_rgba(0,0,0,0.24)]"
          >
            <img className="flex justify-center items-center w-32" src={profile} alt="profile" />
            
            <h1 className="text-[55px] uppercase text-stone-950 my-3 mb-5">Register</h1>
            
            <div className="lg:w-full lg:flex lg:flex-col lg:items-center">
               <div
              className=" lg:w-4/5 mb-5 flex items-center border-b-2 border-solid border-black pt-5 focus-within:border-b-4 transition"
            > 
                
              <i className="fas fa-envelope px-2"></i>
              

              <input
                className="outline-none border-none ps-2 bg-none placeholder:text-grey-600 text-lg focus:placeholder:opacity-0 w-full "
                value={email}
                onChange={onChangeInput}                
                autoComplete="off"
                placeholder="Email"
                type="email"
                name="email"
              />
            </div>

            <div
              className="lg:w-4/5 flex items-center border-b-2 border-solid border-black pt-5 focus-within:border-b-4 transition-all mb-5"
            >
              <i className="fas fa-user px-2"></i>
              
              <input
                className="outline-none ps-2 w-full placeholder:text-grey-600 text-lg focus:placeholder:opacity-0" placeholder="Fullname"
                type="text"
                name="fullname"
                value={fullname}
                onChange={onChangeInput}
                autoComplete="off"
              />
            </div>

            <div
              className="lg:w-4/5 flex items-center border-b-2 border-solid border-black w-82 pt-5 focus-within:border-b-4 transition-all"
            >
              <i className="fas fa-lock p-2"></i>
              
              <input
                className="outline-none ps-2 w-72 lg:w-full placeholder:text-grey-600 text-lg focus:placeholder:opacity-0" placeholder="Password"
                type={type}
                name="password"
                value={password}
                onChange={onChangeInput}
              />
              <span className="inline px-2 cursor-pointer" onClick={handleToggle}>
                <Icon icon={icon} size={20}/>
              </span>
            </div>
            </div>
            

{/* SUBMIT BUTTON */}
            <button
              className="text-lg border border-black py-2 min-w-48 mt-8 rounded bg-indigo-500 text-white hover:ripple-bg-indigo-300 hover:border-indigo-500"
              type="submit">
              Register
            </button>
            
            <p className="text-center mt-4">
                <span className="text-md font-medium">
                  Already have an account? <Link to="/login" className="text-indigo-500 hover:underline">Sign in</Link>
                </span>
            </p>
          </form>
          </div>
        </div>
    </>
};

export default Register;
