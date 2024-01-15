import React from "react";
import { Link } from "react-router-dom";
import { plusRound } from 'react-icons-kit/ionicons/plusRound'
import Icon from "react-icons-kit";

const AllTransactions = ({transactions, id}) => {
  return (
    <>
      <div className="mt-10 mb-8">
        <div className="flex items-center justify-between px-8">
          <div>
            <h1 className="text-2xl font-bold tracking-wide leading-normal">All Transactions</h1>
            <p className="text-lg tracking-wide leading-loose font-medium text-black/70">All transactions including expenses and income for this account</p>
          </div>
          <Link to={`/add-transaction/${id}`} className="text-center rounded-md p-2 capitalize bg-indigo-500 text-white lg:px-4 px-2 font-medium hover:ripple-bg-indigo-300 whitespace-nowrap">
             <Icon icon={plusRound} className="inline"></Icon> transaction
          </Link>
        </div>
      </div>

      <div className="w-full px-6 py-6">
          <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="w-full divide-y divide-gray-300 rounded-sm ">
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm text-gray-900 sm:pl-6 capitalize font-bold">name</th>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm text-gray-900 sm:pl-6 capitalize font-bold">type</th>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm text-gray-900 sm:pl-6 capitalize font-bold">amount</th>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm text-gray-900 sm:pl-6 capitalize font-bold max-md:hidden">note</th>
                  <th></th>
                </tr>
              </thead>

            {transactions?.map((transaction) => (
                  <tbody key={transaction?._id }>
                    <tr                      
                      className={transaction?.color}
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
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">
                          {transaction?.transactionType} 
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          ₹ {transaction?.amount}
                        </span>
                      </td>
                      <td className="whitespace-wrap max-md:hidden px-3 py-4 text-sm text-gray-500">
                        {transaction?.notes}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <Link
                          className="text-indigo-600 hover:text-indigo-900 "
                        >
                          Edit
                          <span className="sr-only">
                            {/*  {transaction?.name} */}
                          </span>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
              ))}
            </table>
          </div>
      </div>
    </>
  )
}

export default AllTransactions;
