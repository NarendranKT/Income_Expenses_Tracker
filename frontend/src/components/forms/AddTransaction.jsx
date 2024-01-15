import React, {useContext, useState} from "react";
import transaction from '../../assets/transaction.svg'
import { transactionContext } from "../context/transactionContext/TransactionContext";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";  

const AddTransaction = () => {
  const { id } = useParams();
  const { addTransactionAction } = useContext(transactionContext);
  const [formData, setFormData] = useState({
    name: "",
    transactionType: "",
    amount: "",
    category: "",
    notes: "",
    color: "",
    date: "",
  })

  const { name, transactionType, amount, category, notes, color, date } = formData;
  

  const onChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  console.log(formData);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTransactionAction({account: id,...formData})
  }

    return <>
        <div className= "w-full h-full flex items-center justify-center font-modern pt-16">
        
          
          <form onSubmit={onSubmitHandler}
            className="flex flex-col items-center justify-center rounded-lg p-3 py-8 lg:shadow-[0px_0px_60px_2px_rgba(0,0,0,0.1)] mt-10 max-w-[650px] text-center mb-16 "
          >
            <img className="w-3/5 m-1" src={transaction} alt="Register"/>
            <h1 className="text-[38px] lg:text-[50px] uppercase text-b mt-6 mb-2">add transaction</h1>
            
            <div
              className=" w-4/5 mt-5 flex flex-col items-start pt-5 "
            > 
            
                <label htmlFor="name" className="capitalize py-2 text-black font-medium"> Name</label>
            
                <div className="flex items-center justify-center border border-black rounded-md w-full">
                  <i className="fas fa-user ps-3"></i>
                  <input
                    className="w-full rounded-md ps-3 h-11 border-solid text-md outline-none"
                    value={name}
                  onChange={onChangeInput}                
                    autoComplete="off"
                    type="text"
                    name="name"
                    />
                </div>              
            </div>
            
            <div className="w-4/5 flex flex-col items-start pt-5 mt-3">    
                    <label htmlFor="transactionType" className="capitalize py-2 text-black font-medium"> Transaction Type</label>
                    
                <select
                  name="transactionType"
                  className="w-full border rounded-md border-black py-2 text-base outline-none text-md cursor-pointer p-2.5 hover:ring-indigo-500 h-11"
                  value={transactionType}
                  onChange={onChangeInput}
            >
                        <option value="" disabled selected>Select Transaction Type</option>
                        <option value="Income">Income (+)</option>
                        <option value="Expense">Expense (-)</option>
                </select>
            </div>
            
            <div
              className="w-4/5 flex flex-col items-start pt-5 mt-3"
            >
              <label
                htmlFor="amount"
                className="capitalize py-2 text-black font-medium"
              >
                Amount
              </label>

              <div
                className="flex items-center justify-center border border-black rounded-md w-full"
              >
                <i
                  className="fa-solid fa-dollar-sign ps-3"
                />  
                  
                <input
                  type="number"
                  name="amount"
                  value={amount}
                  onChange={onChangeInput}
                  className="w-full rounded-md ps-3 h-11 border-solid text-md outline-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                />
                  
              </div>
                
            </div>
            
            <div className="w-4/5 flex flex-col items-start pt-5 mt-3">    
                <label htmlFor="transactionType" className="capitalize py-2 text-black font-medium"> Transaction category</label>
                
                <select name="category" className="w-full border rounded-md border-black py-2 text-base outline-none text-md cursor-pointer p-2.5 focus:ring-indigo-500 h-11" value={category} onChange={onChangeInput}>
                    <option value="" selected>Select Category</option>
                    <option value=" Food">Food</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Healt">Health</option>
                    <option value="Travel">Travel</option>
                    <option value="Education">Education</option>
                    <option value="Personal">Personal</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Bills">Bills</option>
                    <option value="Uncategorized">Uncategorized</option>
                </select>
            </div>
          
            <div className="w-4/5 flex flex-col items-start pt-5 mt-3">
              <label htmlFor="color" className="capitalize py-2 text-black font-medium">pick colors</label>
              <div className="flex items-center justify-center border border-black rounded-md w-full h-11">
                <i className="fa-solid fa-droplet ps-3"></i>
              <input
                type="color"
                name="color"
                value={color}
                onChange={onChangeInput}
                className="w-full h-8 rounded-md ps-2 pr-1"
              />
              </div>
            </div>

            <div className="w-4/5 flex flex-col items-start pt-5 mt-3">
              <label htmlFor="date" className="capitalize font-medium py-2 text-black">date</label>

              <div
                className="flex items-center justify-center border border-black rounded-md w-full h-11 ">
                  <input type="date" name="date" className="outline-none px-2" value={date} onChange={onChangeInput}/>
              </div>
            </div>

            <div className="w-4/5 flex flex-col items-start pt-5 mt-3">
              <label htmlFor="notes" className="capitalize font-medium py-2 text-black">add notes</label>
              <textarea name="notes" cols="47" rows="5" className="w-full outline-none border border-black rounded-md resize-y p-4" placeholder="notes..." value={notes} onChange={onChangeInput}></textarea>
            </div>
          
{/* SUBMIT BUTTON */}
            <button
            className="text-lg border border-black py-2 min-w-48 mt-8 rounded bg-indigo-500 text-white hover:ripple-bg-indigo-300 hover:border-indigo-500
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              type="submit">
              Add Transaction
            </button>
          
          </form>
        </div>    
    </>
};

export default AddTransaction;
