import React from "react";
import { Link } from "react-router-dom";

    const Header = () => {
        return <>
            <section className=" py-[55px] px-10 bg-white mt-[20px]">
                <div className=" w-full h-full flex items-center max-md:flex-col">
                    <div className="lg:w-1/2 px-3 w-full h-full flex flex-col ">
                        <div className="h-full py-5 max-md:hidden ">
                            <span className="uppercase bg-indigo-500 p-1 px-2 rounded-sm text-white text-[12px] mb-5">project income-expenses tracker</span>
                            <h1 className="mt-5 mb-6 text-[32px] md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight ">Track Your Income and Expenses in One Place</h1>
                            <p className="mb-8 text-lg md:text-xl text-gray-600 font-medium">
                                Wondering where all your money goes each month? Tired of complicated budgeting software? Try our Simple Income & Expenses Tracker Application, the simple way to track your income and expenses in one place.
                            </p>
                        </div>

                        <div className="flex items-center justify-start transition-all ease-out max-md:hidden  mb-4">
                            <Link className="bg-indigo-500 p-3 rounded-md text-center text-white mr-5 uppercase text-md hover:ripple-bg-indigo-300 font-bold outline-none border-none animate-bounce hover:animate-none">request a demo</Link>
                            <Link to='/register' className=" ring-2 ring-indigo-500 uppercase p-[10px] rounded-md text-center text-md font-bold  hover:text-white hover:ripple-bg-indigo-300">sign up</Link>
                        </div>
                    </div>

                    {/* Image with hover effect */}
                    <div className="relative lg:w-1/2 rounded-lg p-2 cursor-pointer">   
                        <img src="https://cdn.pixabay.com/photo/2015/01/28/22/20/bookkeeping-615384_1280.jpg" alt="income-tracker-computer" className="relative rounded-md " /> 
                        <div className="w-full p-2 min-w-28 h-full absolute right-0 bottom-0 left-0 top-0 rounded-md  ease-in-out transition-opacity duration-150">
                            <div className="w-full h-full rounded-md flex justify-center items-center opacity-0 hover:max-md:opacity-100 ">
                                <div className="w-full h-full rounded-md hover:backdrop-blur-sm hover:bg-black/40 flex flex-col items-center justify-center text-white transition-all duration-300 ease-in-out p-3">
                                    <h1 className="mt-5 mb-6 text-[25px]  font-bold leading-tight tracking-tight text-center">Track Your Income and Expenses in One Place</h1>
                                    <p className=" text-base md:text-xl text-white/90 font-medium text-center">
                                        Wondering where all your money goes each month? Tired of complicated budgeting software? Try our Simple Income & Expenses Tracker Application, the simple way to track your income and expenses in one place.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-md:flex items-center justify-center transition-all ease-out md:max-md:visible hidden my-3">
                            <Link className="bg-indigo-500 p-2 rounded-md text-center text-white uppercase text-md hover:ripple-bg-indigo-300 font-bold mr-9">request a demo</Link>
                            <Link to='/register' className=" ring-2 ring-indigo-500 uppercase p-[6px] rounded-md text-center text-md font-bold hover:text-white hover:ripple-bg-indigo-300 ">sign up</Link>
                        </div>
                </div>
            </section>
        </>
    };

    export default Header;
