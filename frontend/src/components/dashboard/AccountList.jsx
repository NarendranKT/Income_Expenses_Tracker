import React from "react";
import Icon from "react-icons-kit";
import { Link } from 'react-router-dom'
import { plusCircle } from 'react-icons-kit/fa/plusCircle'
import { arrowRight2 } from 'react-icons-kit/icomoon/arrowRight2'

const AccountList = ({accounts}) => {
    return (
        <>
            
        <div className="flex flex-col items-center justify-center px-2 w-full">
            {
            accounts?.length <= 0 ?
                <>
                <div className="mt-10 text-center">
                    <h2 className="capitalize font-bold text-2xl tracking-wide leading-loose">no accounts found</h2>
                    <p className=" font-medium tracking-wide leading-tight text-lg mb-6">You have not created any accounts yet. Click the button below to create one.</p>
                    <Link to='/dashboard/accounts/create' className=" ripple-bg-indigo-500 text-white rounded-md px-4 py-2 capitalize font-medium">
                        create account
                    </Link>
                </div>
                </> 
                :    
                <>
                <div className="text-center px-3">
                    <h1 className="capitalize font-bold text-4xl leading-loose tracking-wide">list of accounts</h1>
                    <p className="text-xl font-medium leading-tight tracking-wide mb-7">A list of your company's accounts, either separated by category or in chronological order.</p>
                    
                </div>
  
                <div className="w-full flex flex-wrap gap-5 items-center justify-center my-3 ">
                    {accounts?.map(acc => {
                        
                    return (
                        <div className="lg:w-2/5 w-4/5 flex items-center justify-center gap-10 flex-wrap rounded-md">
                            <div className="w-full flex justify-between items-center py-8 px-6 transition-colors duration-1000  rounded-md border">
                                <h3 className=" pr-14 text-xl font-bold uppercase">{acc.name}</h3>
                                <Link to={`/account-details/${acc._id}`} 
                                className="flex items-center justify-center bg-indigo-100 text-indigo-600 font-medium rounded-full px-2 hover:ripple-bg-indigo-300 hover:text-white py-1 text-sm max-md:h-9 text-center">
                                    <span className="text-center hidden lg:block pr-2">view account</span>
                                    <Icon icon={arrowRight2} className="pr-1"></Icon>
                                </Link>   
                            </div>
                        </div>
                    );
                    })}
                </div>
                
                <Link to='/dashboard/accounts/create' className=" ripple-bg-indigo-500 text-white rounded-md px-3 py-2 font-medium my-7">
                        <Icon icon={plusCircle} size={20}>
                        </Icon>
                        <p className="capitalize ps-2 inline">add new account</p>    
                </Link>
                </>
            }
        </div>
            
        </>
  )
};

export default AccountList;
