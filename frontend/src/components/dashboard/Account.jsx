import React, { useContext, useEffect } from "react";
import { accountContext } from "../context/accountContext/AccountContext";
import { all } from "axios";
import { Link } from "react-router-dom";

const Account = () => {

    const { getAllAccountsAction, allAccounts } = useContext(accountContext);

    
    useEffect(() => {
        getAllAccountsAction();
    }, []);

    // const background_img = 'bg-hero-pattern blur-md hue-rotate-15 bg-no-repeat bg-cover contrast-75 backdrop-brightness-0 brightness-50';
    console.log(allAccounts);
    return (    
    <>
        <div className="w-full px-6 py-6">
            <div className="w-full pt-28 px-10 grid lg:grid-cols-2 gap-5 grid-cols-1 ">
                {allAccounts.map((acc) => (
                        <div className="md:rounded-lg rounded-md border border-gray-300">
                            <table className=" w-full divide-y divide-gray-300 rounded-md text-nowrap">
                                <tr>
                                    <th className="py-3.5 w-1/2 text-base text-left  text-gray-900 sm:pl-6 capitalize font-bold border-r-2 pl-4">Account name</th>
                                    <td className="text-center">{ acc?.name }</td>
                                </tr>

                                <tr>
                                    <th className="py-3.5 w-1/2 text-base text-left  text-gray-900 sm:pl-6 capitalize font-bold border-r-2 pl-4">Account type</th>
                                    <td className="text-center">{ acc?.accountType }</td>
                                </tr>

                                <tr>
                                    <th className="py-3.5 w-1/2 text-base text-left  text-gray-900 sm:pl-6 capitalize font-bold border-r-2 pl-4">initial balance</th>
                                    <td className="text-center">{ acc?.initialBalance }</td>
                                </tr>

                                <tr>
                                    <th className="py-3.5 w-1/2 text-base text-left text-gray-900 sm:pl-6 capitalize font-bold border-r-2 pl-4">created at</th>
                                    <td className="text-center border-b-2">{ acc?.createdAt.split("T")[0] }</td>
                                </tr>
                            <tr>
                                <th></th>
                                <td className="py-5 text-right pr-6">
                                    {/* <th className=""></th> */}
                                    <Link to={`/account-details/${acc._id}`} className="border p-3 rounded-md capitalize hover:ripple-bg-indigo-300 bg-indigo-500 text-white text-nowrap text-center w-full">view all</Link>
                                </td>
                            </tr>
                            </table>
                        </div>    
                        
                ))}
            </div>
        </div>
    </>
    )
};

export default Account;
