import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AllTransactions from "./AllTransactions";
import { accountContext } from "../context/accountContext/AccountContext";
import Icon from "react-icons-kit";
import {plusRound} from 'react-icons-kit/ionicons/plusRound'


const AccountDetails = () => {
    const { accountId } = useParams();
    
    const { getAccountDetails, account } = useContext(accountContext);

    

    // $Calculate total income
    const totalIncome = account?.initialBalance + account?.transactions?.reduce((acc, transaction) => {
        if (transaction?.transactionType === "Income") {
            return acc + transaction?.amount;
        } else {
            return acc;
        }
    }, 0);

    // $Calculate total expense
    const totalExpense = account?.transactions?.reduce((acc, transaction) => {
        if (transaction?.transactionType === "Expense") {
            return acc + transaction?.amount;
        } else {
            return acc;
        }
    }, 0);

    const totalBalance = (totalIncome - totalExpense + account?.initialBalance) < 0 ? 0 : (totalIncome - totalExpense + account?.initialBalance);

    useEffect(() => {
        getAccountDetails(accountId);
    }, [accountId])
    
    

    return (
    <>
    {account?.transactions?.length <= 0 ?
        <>
            <h1 className="text-center text-3xl my-10 font-medium tracking-wide leading-tight">This account does not have any transaction!</h1>
            <div className="text-center">
                <Link className="text-center bg-indigo-500 rounded-md  font-mediums hover:ripple-bg-indigo-300 lg:px-4 py-2 px-7 text-white lg:text-lg text-base capitalize" to={`/add-transaction/${accountId}`}>
                    <Icon icon={plusRound} size={20} className="pr-2 pb-0"></Icon>
                    Add transaction
                </Link>
            </div>
        </>
        :
        <>
        <div className="w-full h-full ">
            <section className="flex flex-col items-center justify-center w-full h-full bg-indigo-100 lg:clip-home pb-16 lg:p-20 pt-20">
                    <h1 className="text-5xl max-md:text-4xl font-bold capitalize tracking-wide leading-tight mt-6 text-indigo-100 rounded-md py-1 px-4 shadow-md bg-indigo-800 text-center">{account?.name}</h1>
                <p className="text-xl text-black/80 font-medium tracking-wide leading-loose mt-2">{account?.notes}</p>
                <div className=" w-full gap-0 mt-6 pb-16">
                    <div className="grid grid-cols-3 max-md:grid-cols-1 shadow-md mx-44 max-md:mx-10 rounded-md">
                        <div className="text-center flex flex-col items-center justify-start py-14 pt-16 bg-white border rounded-s-md">
                            <h3 className="font-medium capitalize text-lg tracking-wide">total balance</h3>
                            <h1 className="lg:text-6xl text-4xl font-bold text-indigo-800">₹{totalBalance}</h1>
                        </div>
                        
                        <div className="text-center flex flex-col items-center justify-start py-10 pt-16 bg-white border">
                            <h3 className="font-medium capitalize text-lg tracking-wide ">total expenses</h3>
                            <h1 className="lg:text-6xl text-4xl font-bold text-red-600">₹{totalExpense}</h1>
                            <Link className="mt-2 bg-green-100 border text-green-600 font-bold rounded-full px-2 hover:ripple-bg-green-300 hover:text-white py-1 text-sm" to={`/account-details/view-history/Expense/${accountId}`}>view history</Link>
                        </div>
                        
                        <div className="text-center flex flex-col items-center justify-start py-10 pt-16 bg-white border rounded-e-md">
                            <h3 className="font-medium capitalize text-lg tracking-wide ">total income</h3>
                            <h1 className="lg:text-6xl text-4xl font-bold text-green-700">₹{totalIncome}</h1>
                            <Link className="mt-2 bg-green-100 border text-green-600 font-bold rounded-full px-2 hover:ripple-bg-green-300 hover:text-white py-1 text-sm" to={`/account-details/view-history/Income/${accountId}`}>view history</Link>
                        </div>        
                    </div>
                </div>
            </section>
        </div>
        <AllTransactions id={accountId}  transactions={ account?.transactions } />
        </>
    }
    </>
  )
};

export default AccountDetails;
