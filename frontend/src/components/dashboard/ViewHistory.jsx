import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { accountContext } from "../context/accountContext/AccountContext";

const ViewHistory = () => {
    const { history, id } = useParams();
    const { getAccountDetails, account } = useContext(accountContext);

    useEffect(() => {
        getAccountDetails(id)
    }, [])

    const transactions = account?.transactions?.filter((transaction) => {
        return transaction.transactionType === history;
    })

    return (
        <>
        <div className="w-full px-6 py-6 pt-32">
            <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="w-full divide-y divide-gray-300 rounded-sm ">
                <thead className="bg-gray-100">
                    <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm text-gray-900 sm:pl-6 capitalize font-bold">name</th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm text-gray-900 sm:pl-6 capitalize font-bold">date of transaction</th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm text-gray-900 sm:pl-6 capitalize font-bold">time of transaction</th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm text-gray-900 sm:pl-6 capitalize font-bold">category</th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm text-gray-900 sm:pl-6 capitalize font-bold">amount</th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm text-gray-900 sm:pl-6 capitalize font-bold">note</th>
                    <th></th>
                    </tr>
                </thead>

                {transactions?.map((transaction) => (
                    <tbody key={transaction?._id }>
                        <tr                      
                        >
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                            <div className="flex items-center">
                            <div className="ml-4">
                                <div className="font-medium text-gray-900 capitalize">
                                {transaction?.name}
                                </div>
                                {/* <div className="text-gray-500">Emma</div> */}
                            </div>
                            </div>
                        </td>
                        <td className="whitespace-nowrap px-3 pl-10 py-4 text-sm text-gray-500">
                            <div className="text-gray-900">
                            {transaction?.date.split("T")[0]} 
                            </div>
                        </td>
                        
                        <td className="whitespace-nowrap px-3 pl-10 py-4 text-sm text-gray-500">
                            <div className="text-gray-900">
                            {transaction?.date.split("T")[1].split('.')[0]} 
                            </div>
                        </td>
                        
                            
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {transaction?.category}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 pl-10">
                            <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            ₹ {transaction?.amount}
                            </span>
                        </td>
                        <td className="whitespace-wrap max-md:w-full px-3 py-4 text-sm text-gray-500">
                            {transaction?.notes}
                        </td>
                        
                        </tr>
                    </tbody>
                ))}
                </table>
            </div>
        </div>
        </>
  )
};

export default ViewHistory;
