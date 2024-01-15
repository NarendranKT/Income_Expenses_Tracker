import axios from "axios";
import { createContext, useReducer } from "react";
import { API_URL_TRANSACTION } from "../../../utils/apiURL";
import { TRANSACTION_CREATION_FAILED, TRANSACTION_CREATION_SUCCESS } from "./transactionActionTypes";

export const transactionContext = createContext();

const INITIAL_STATE = {
    transaction: null,
    transactions: [],
    loading: false,
    error: null,
    userAuth: JSON.parse(localStorage.getItem('userAuth'))
}

const reducer = (state, action) => {
    const {type, payload} = action;
    switch (type) {
        case TRANSACTION_CREATION_SUCCESS:
            return {
                ...state,
                transaction: payload,
                loading: false,
                error: null,
            }
        case TRANSACTION_CREATION_FAILED:
            return {
                ...state,
                transaction: null,
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}

const TransactionContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    const addTransactionAction = async (formData) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "authorization" : `Bearer ${state?.userAuth?.token}`
            }
        }

        try {
            const res = await axios.post(`${API_URL_TRANSACTION}/create`, formData, config);
            
            if (res?.data?.status === 'success') {
                dispatch({
                    type: TRANSACTION_CREATION_SUCCESS,
                    payload: res?.data?.data
                })
            }
            
            window.location.href = `/account-details/${formData.account}`

        } catch (error) {
            dispatch({
                type: TRANSACTION_CREATION_FAILED,
                payload: error?.data?.response?.message
            })
            console.log(error?.data?.response?.message);
        }
    }

    

    return (
        <transactionContext.Provider value={{
            addTransactionAction,
            error: state?.error
        }}>
            {children}
        </transactionContext.Provider>
    )
}

export default TransactionContextProvider;