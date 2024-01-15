  import React from "react";
  import Header from "../header/Header";
  import { Link } from "react-router-dom";
  import {Icon} from 'react-icons-kit';
  import {ic_grid_view} from 'react-icons-kit/md/ic_grid_view'

  const HomePage = () => {
    return <div className="pt-24 font-modern ">
        <Header />
      <section className="py-14 px-10 bg-white mt-9">
          <div className="px-3 w-full h-full flex flex-col ">
              <div className="h-full py-5 ">
                  <span className="uppercase bg-indigo-200 p-1 px-2 rounded-sm text-indigo-600 font-medium text-[12px] mb-5">income and expenses tracker</span>
                  <h1 className="mt-5 mb-6 text-4xl font-bold leading-tight tracking-tight ">Track Your Project Income and Expenses</h1>
                  <p className="mb-8 text-lg md:text-xl font-medium">
                      Manage your money more effectively and make better financial decisions with this easy-to-use software.
                  </p>
              </div>
          </div>                   
          <div className="flex max-md:flex-col w-full rounded-lg">
              
                <div className="w-1/2 max-md:w-full pr-10 flex flex-col justify-start">
                  <div className="flex items-start justify-center p-4 hover:shadow-[0px_0px_40px_1px_rgba(0,0,0,0.3)] rounded-md mb-3 mt-2">
                    <i className="fa-regular fa-envelope px-4 py-3 bg-indigo-500 text-white rounded-md text-lg"></i>
                    <span className="p-2 ps-6">
                      <h1 className="font-bold text-2xl">Understand Your Spending Patterns</h1>
                      <p className="font-medium text-md mt-3">Stop wasting time logging expenses and tracking your income by hand. Use our software to manage it all in one place.</p>
                    </span>
                  </div>
                  
                  <div className="flex items-start justify-start p-4 hover:shadow-[0px_0px_40px_1px_rgba(0,0,0,0.3)] rounded-md mb-3">
                    <i className="fa-regular fa-pen-to-square px-4 py-3 bg-indigo-500 text-white rounded-md text-lg"></i>
                    <span className="p-2 ps-6">
                      <h1 className="font-bold text-2xl">
                      Visualize Your Income and Expenses Over Time
                    </h1>
                    <p className="font-medium text-md mt-3">
                      See where your money goes each month and how it changes over time with this easy-to-use income and expenses tracker.
                    </p>
                    </span>
                  </div>
                  
                  <div className="flex items-start justify-start p-4 hover:shadow-[0px_0px_40px_1px_rgba(0,0,0,0.3)] rounded-md mb-3">
                    <Icon icon={ic_grid_view} size={20}  className="px-4 py-3 bg-indigo-500 text-white rounded-md text-lg" />
                    <span className="p-2 ps-6">
                      <h1 className="font-bold text-2xl">Stay on Top of Your Spending</h1>
                    <p className="font-medium text-md mt-3">
                      Take back control of your finances with our easy-to-use budgeting tool. Get started for free.
                    </p>
                    </span>
                  </div>
                </div>

              {/* IMAGE */}
                <div className="w-2/3 lg:w-1/2 max-md:w-full justify-center flex items-center">
                  <img src="https://cdn.pixabay.com/photo/2015/01/28/22/20/bookkeeping-615384_1280.jpg" alt="income-tracker-computer" className="relative rounded-md cursor-pointer w-full max-md:mt-7" /> 
                </div>
                            
          </div>                                    
      </section>

      <section className="w-full h-full lg:px-28 flex justify-center items-start mt-8">
        <div className="flex flex-col md:mb-8 mx-auto items-center justify-center">

          <span className="uppercase bg-indigo-200 p-1 px-2 rounded-xl text-indigo-600 font-medium text-[12px] mb-5">
            get started
          </span>

          <h1 className="xl:max-w-4xl text-3xl md:text-4xl font-bold text-center mb-5 leading-tight font-heading">
            Save Time and Money with the Income and Expenses Tracker  
          </h1>
          <p className=" font-normal text-center lg:px-32 mb-6 text-lg md:text-xl text-coolGray-500 font-heading ">
            Flex is a Small SaaS Business. Flex isn’t a traditional company. We believe a diverse team, approaches to work and transparency are key to our success.
          </p>

          <Link className="p-2 bg-indigo-500 hover:ripple-bg-indigo-300 rounded-md text-white px-5 text-xl py-3 capitalize mb-10">
            get started
          </Link>

          <div className="w-full px-32 justify-center flex items-center mb-12 rounded-md">
            <img src="https://cdn.pixabay.com/photo/2015/01/28/22/20/bookkeeping-615384_1280.jpg" alt="income-tracker-computer" className="relative rounded-md cursor-pointer w-full" /> 
          </div>
        </div>
      </section>

    </div>
  };

  export default HomePage;
