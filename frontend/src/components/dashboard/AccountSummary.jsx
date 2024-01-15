import React, { useContext, useEffect } from "react";
import Icon from "react-icons-kit";
import { arrowUp2 } from 'react-icons-kit/icomoon/arrowUp2'
import {ellipsisH} from 'react-icons-kit/fa/ellipsisH'
import { accountContext } from "../context/accountContext/AccountContext";


const AccountSummary = () => {
    let totalIncome = 0;
    let expenses = 0;

    let rupees = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    })

    const { getAllAccountsAction, allAccounts } = useContext(accountContext);
    
    useEffect(() => {
        getAllAccountsAction();
    }, []);
    
    for (let i = 0; i < allAccounts.length; i++) {
        
        const income = allAccounts[i]?.transactions?.reduce((acc, transaction) => {
            if (transaction.transactionType === 'Income') {
                return acc + transaction.amount;
            } else {
                return acc;
            }
        }, 0);
        totalIncome += income + allAccounts[i].initialBalance;

        const totalExpenses = allAccounts[i]?.transactions?.reduce((acc, transaction) => {
            if (transaction.transactionType === 'Expense') {
                return acc + transaction.amount;
            } else {
                return acc;
            }
        }, 0)
        expenses += totalExpenses;
    }


    return <>
        <div className="flex flex-col text-center items-center justify-center pt-28 px-4">
            <h3 className="capitalize text-3xl md:text-4xl tracking-tight leading-tight font-bold text-coolGray-900">
                total income/expenses of all accounts
            </h3>
            <p className="mt-6 text-lg md:text-xl text-coolGray-500 font-medium">
                A list of your company's accounts, either separated by category or in chronological order.
            </p>
        </div>
        
        <section className="grid grid-cols-3 max-md:grid-cols-1 gap-5 p-5 px-10 my-5">
            <div className="border border-black/15 rounded-md p-4">
                <div className="flex flex-wrap items-end justify-between  mb-2">
                    <div className="w-auto p-2">
                        <h3 className="capitalize text-sm text-coolGray-500 font-medium">total income</h3>
                    </div>
                    
                    <div className="w-auto p-2 ">
                        <Icon icon={ellipsisH} size={20} className=" text-zinc-300 cursor-pointer hover:text-zinc-500 transition-colors duration-300"></Icon>
                    </div>
                </div>

                <div className="flex flex-wrap items-end justify-between  mb-2">
                    <div className="w-auto p-2">
                        <h2 className="capitalize font-medium text-3xl text-black tracking-tighter">{rupees.format(totalIncome)}</h2>
                    </div>
                    
                    <div className="w-auto p-2">
                        <div className="flex items-center px-2 py-1 text-green-500 font-medium text-xs bg-green-100 rounded-full shadow-sm opacity-0">
                            <Icon icon={arrowUp2} size={12}></Icon>
                            <p>23%</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border border-black/15 rounded-md p-4">
                <div className="flex flex-wrap items-end justify-between  mb-2">
                    <div className="w-auto p-2">
                        <h3 className="capitalize text-sm text-coolGray-500 font-medium">total expenses</h3>
                    </div>
                    
                    <div className="w-auto p-2">
                        <Icon icon={ellipsisH} size={20} className=" text-zinc-300 cursor-pointer hover:text-zinc-500 transition-colors duration-300"></Icon>
                    </div>
                </div>

                <div className="flex flex-wrap items-end justify-between  mb-2">
                    <div className="w-auto p-2">
                        <h2 className="capitalize font-medium text-3xl text-black tracking-tighter">{rupees.format(expenses)}</h2>
                    </div>
                    
                    <div className="w-auto p-2">
                        <div className="flex items-center px-2 py-1 text-green-500 font-medium text-xs bg-green-100 rounded-full shadow-sm opacity-0">
                            <Icon icon={arrowUp2} size={12}></Icon>
                            <p>8%</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border border-black/15 rounded-md p-4">
                <div className="flex flex-wrap items-end justify-between  mb-2">
                    <div className="w-auto p-2">
                        <h3 className="capitalize text-sm text-coolGray-500 font-medium">balance</h3>
                    </div>
                    
                    <div className="w-auto p-2">
                        <Icon icon={ellipsisH} size={20} className=" text-zinc-300 cursor-pointer hover:text-zinc-500 transition-colors duration-300"></Icon>
                    </div>
                </div>

                <div className="flex flex-wrap items-end justify-between  mb-2">
                    <div className="w-auto p-2">
                        <h2 className="capitalize font-medium text-3xl text-black tracking-wide">{rupees.format(totalIncome - expenses)}</h2>
                    </div>
                    
                    <div className="w-auto p-2">
                        <div className="flex items-center px-2 py-1 text-green-500 font-medium text-xs bg-green-100 rounded-full shadow-sm opacity-0">
                            <Icon icon={arrowUp2} size={12}></Icon>
                            <p>23%</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>;
};

export default AccountSummary;
