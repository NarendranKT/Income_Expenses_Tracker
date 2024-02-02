import { createContext, useReducer } from "react";
import axios from 'axios';
import { API_URL_ACCOUNT } from "../../../utils/apiURL";
import { ACCOUNT_DETAILS_FAILED, ACCOUNT_DETAILS_SUCCESS, ACCOUNT_CREATION_SUCCESS, ACCOUNT_CREATION_FAILED, ACCOUNT_FETCH_SUCCESS, ACCOUNT_FETCH_FAILED } from "./accountActionType";

export const accountContext = createContext();

const INITIAL_STATE = {
    userAuth: JSON.parse(localStorage.getItem('userAuth')),
    account: null,
    accounts: [],
    loading: false,
    error: null,
    darkMode: false,
}

const reducer = (state, action) => {

    const { type, payload } = action;
    switch (type) {
        case ACCOUNT_DETAILS_SUCCESS:
            return {
                ...state,
                account: payload,
                loading: false,
                error: null
            };
        case ACCOUNT_DETAILS_FAILED:
            return {
                ...state,
                account: null,
                loading: false,
                error: payload
            };
        case ACCOUNT_CREATION_SUCCESS:
            return {
                ...state,
                account: payload,
                loading: false,
                error: null
            };
        case ACCOUNT_CREATION_FAILED:
            return {
                ...state,
                account: null,
                loading: false,
                error: payload
            };
        case ACCOUNT_FETCH_SUCCESS:
            return {
                ...state,
                accounts: [...payload],
                loading: false,
                error: null,
            }
        case ACCOUNT_FETCH_FAILED:
            return {
                ...state,
                error: payload,
                accounts: [],
                loading: false
            }
        default:
            return state;
    }

}

const AccountContextProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    
    // $Get account details
    const getAccountDetails = async (id) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${state?.userAuth?.token}`
            }
        };

        try {
            const res = await axios.get(`${API_URL_ACCOUNT}/${id}`, config);

            if (res?.data?.status === 'success') {
                dispatch({
                    type: ACCOUNT_DETAILS_SUCCESS,
                    payload: res.data.account
                })
            }

        } catch (error) {
            dispatch({
                type: ACCOUNT_DETAILS_FAILED,
                payload: error?.response?.data?.message
            })
        }
    }

    // $Add account 
    const addAccountAction = async (formData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${state?.userAuth?.token}`
            }
        }

        try {
            const res = await axios.post(API_URL_ACCOUNT, formData, config);
            if (res?.data?.status === 'success') {
                dispatch({
                    type: ACCOUNT_CREATION_SUCCESS,
                    payload: res?.data.data
                })
            }
            console.log(res?.data);
            window.location.href = '/dashboard';

        } catch (error) {
            dispatch({
                type: ACCOUNT_CREATION_FAILED,
                payload: error?.data?.response?.message
            })
        }
    }

    // $All account details
    const getAllAccountsAction = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${state?.userAuth?.token}`
            }
        }

        try {
            const res = await axios.get(API_URL_ACCOUNT, config)
            if (res?.data?.status === 'success') {
                dispatch({
                    type: ACCOUNT_FETCH_SUCCESS,
                    payload: res?.data?.data
                })
                console.log(res?.data);
            }
        } catch (error) {
            dispatch({
                type: ACCOUNT_FETCH_FAILED,
                payload: error?.response?.data?.message
            })
        }
    }

    // console.log(state);

    return (
        <accountContext.Provider value={{
            account: state?.account,
            getAccountDetails,
            addAccountAction,
            getAllAccountsAction,
            allAccounts: state?.accounts
        }}>
            {children}
        </accountContext.Provider>
    )
}

export default AccountContextProvider;