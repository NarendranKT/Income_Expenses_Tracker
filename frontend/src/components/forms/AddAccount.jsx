import React, {useContext, useState} from "react";
import account from '../../assets/account.svg'
import { accountContext } from "../context/accountContext/AccountContext";
// import { Link } from "react-router-dom";  

const AddAccount = () => {

  const { addAccountAction } = useContext(accountContext);

  const [formData, setFormData] = useState({
    name: "",
    accountType: "",
    initialBalance: "",
    notes: "",
  })

  const { name, accountType, initialBalance, notes} = formData;
  

  const onChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  console.log(formData);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addAccountAction(formData)
  }

    return <>
        <div className= "w-full h-full flex items-center justify-center font-modern pt-16">
        
          
          <form onSubmit={onSubmitHandler}
            className="flex flex-col items-center justify-center rounded-lg p-3 py-8 lg:shadow-[0px_0px_60px_2px_rgba(0,0,0,0.1)] mt-10 max-w-[650px] text-center mb-16 "
          >
            <img className="w-3/5 m-1" src={account} alt="Register"/>
            <h1 className="text-[38px] lg:text-[50px] uppercase text-b mt-6 mb-2">add account</h1>
            
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
                    <label htmlFor="accountType" className="capitalize py-2 text-black font-medium"> Account Type</label>
                    
                <select
                  name="accountType"
                  className="w-full border rounded-md border-black py-2 text-base outline-none text-md cursor-pointer p-2.5 hover:ring-indigo-500 h-11"
                  value={accountType}
                  onChange={onChangeInput}
            >
                        <option value="" selected>Select Account Type</option>
                        <option value="Savings">Savings</option>
                        <option value="Investment">Investment</option>
                        <option value="Checking">Checking</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Builing">Builing</option>
                        <option value="Travel">Travel</option>
                        <option value="Education">Education</option>
                        <option value="Personal">Personal</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Project">Project</option>
                        <option value="Uncategorized">Uncategorized</option>
                </select>
            </div>
            
            <div
              className="w-4/5 flex flex-col items-start pt-5 mt-3"
            >
              <label
                htmlFor="initialBalance"
                className="capitalize py-2 text-black font-medium"
              >
                Initial Deposit ($)
              </label>

              <div
                className="flex items-center justify-center border border-black rounded-md w-full"
              >
                <i
                  className="fa-solid fa-dollar-sign ps-3"
                />  
                  
                <input
                  type="number"
                  name="initialBalance"
                  value={initialBalance}
                  onChange={onChangeInput}
                  className="w-full rounded-md ps-3 h-11 border-solid text-md outline-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                />
                  
              </div>
                
            </div>

            <div className="w-4/5 flex flex-col items-start pt-5 mt-3">
              <label htmlFor="notes" className="capitalize font-medium py-2 text-black">add notes</label>
              <textarea name="notes" cols="47" rows="5" className="w-full outline-none border border-black rounded-md resize-y p-4" placeholder="notes..." value={notes} onChange={onChangeInput}></textarea>
            </div>
          
{/* SUBMIT BUTTON */}
            <button
            className="text-lg border border-black py-2 min-w-48 mt-8 rounded bg-indigo-500 text-white hover:ripple-bg-indigo-300 hover:border-indigo-500
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 capitalize"
              type="submit">
              add new account
            </button>
          
          </form>
        </div>    
    </>
};

export default AddAccount;
