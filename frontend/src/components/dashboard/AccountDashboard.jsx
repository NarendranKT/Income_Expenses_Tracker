import React, { useContext, useEffect } from "react";
import AccountSummary from "./AccountSummary";
import AccountList from "./AccountList";
import { authContext } from "../context/authContext/AuthContext";
import { accountContext } from "../context/accountContext/AccountContext";


const AccountDashboard = () => {
    const { profile, fetchProfileAction, error } = useContext(authContext);
    
    
    // dispatch action
    useEffect(() => {
        fetchProfileAction();
    }, [])

    return (
        <>
            {error ?
            <>
                <div role="alert" className="bg-red-100 border mt-28 border-red-400 text-center text-red-700 px-4 py-3 rounded relative font-modern">
                    <strong className="font-bold">Error!</strong>
                    <span className="block sm:inline px-2">{error} </span>
                </div>
                </>
                :
                <>
                    <AccountSummary />
                    <AccountList accounts={profile?.accounts} />
                </>
            }
            

            
        
        </>
  )
};

export default AccountDashboard;
