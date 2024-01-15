import React, { useState, useContext } from "react";
import login from '../../assets/fingerprint.svg'
import profile from '../../assets/profilePic.svg'
import {Icon} from 'react-icons-kit';
import { Link } from "react-router-dom";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { authContext } from "../context/authContext/AuthContext";


const Login = () => {

  const {loginUserAction, userAuth, error} = useContext(authContext);

  const [formData, setFormData] = useState({
      email: '',
      password: ''
  })
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  // const { loginUserAction, userAuth } = useContext();

  const { email, password } = formData;

  const onChangeInput = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleToggle = () => {
   if (type==='password'){
      setIcon(eye);
      setType('text')
   } else {
      setIcon(eyeOff)
      setType('password')
   }
}

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!email || !password ) {
      return alert('Please provide all details')
    }
    loginUserAction(formData);

    setFormData({
      email: '',
      password: ''
    })
  }
  console.log(userAuth);

    return <>
        <div className= "w-full h-full lg:grid lg:grid-cols-2 lg:gap-20 lg:px-8 flex justify-center items-center pt-24">
          <div>
            <img className="flex justify-center items-center w-4/5 lg:block max-lg:hidden" src={login} alt="login"/>
          </div>
        
          <div>
          <form onSubmit={onSubmitHandler}
            className="flex flex-col items-center justify-center lg:w-4/5  rounded-lg p-2 py-16 lg:shadow-[0px_0px_50px_-10px_rgba(0,0,0,0.24)] mt-2"
          >
            <img className="flex justify-center items-center w-32" src={profile} alt="profile" />
            
            <h1 className="text-[55px] uppercase text-stone-950 my-3 mb-5">Welcome</h1>

              <p>
                { userAuth?.error && (
                  <span className="text-red-500">{userAuth?.error}</span>
                )}
              </p>
            
            <div className="lg:w-full lg:flex lg:flex-col lg:items-center">
               <div
              className=" lg:w-4/5 mb-5 flex items-center border-b-2 border-solid border-black pt-5 focus-within:border-b-4 transition-all ease-in-out duration-75"
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
              className="lg:w-4/5 flex items-center border-b-2 border-solid border-black w-82 pt-5 focus-within:border-b-4 transition-all ease-in-out duration-75"
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

            <button
              className="text-lg border border-black py-2 min-w-48 mt-8 rounded bg-indigo-500 text-white hover:ripple-bg-indigo-300 hover:border-indigo-500"
              type="submit"
            >
              Login
            </button>
            
            <p className="text-center mt-2">
                <span className="text-md font-medium">
                  Don't have an account? <Link to="/register" className="text-indigo-500 hover:underline">Sign up</Link>
                </span>
            </p>
            
          </form>
          
          
          </div>
        </div>
    </>
};

export default Login;
