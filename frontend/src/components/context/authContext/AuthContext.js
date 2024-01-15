import { createContext, useReducer } from "react";
import axios from 'axios';
import { LOGIN_FAILED, LOGIN_SUCCESS, PROFILE_SUCCESS, PROFILE_FAILED, REGISTRATION_FAILED, REGISTRATION_SUCCESS, LOGOUT } from "./authActionTypes";
import { API_URL_USER } from "../../../utils/apiURL";
import { redirect } from "react-router-dom";



// auth context
export const authContext = createContext();

// initial state
const INITIAL_STATE = {
    userAuth: JSON.parse(localStorage.getItem('userAuth')),
    error: null,
    loading: false,
    profile: null,
}

// Auth Reducer
const reducer = (state, action) => {
    const { type, payload } = action;
    // console.log(type + " " + payload);
    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('userAuth', JSON.stringify(payload));
            return {
                ...state,
                loading: false,
                error: null,
                userAuth: payload,
            };
        case LOGIN_FAILED:
            return {
                ...state,
                error: payload,  
                loading: false,
                userAuth: null
            };
        case PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                profile: payload,
            }
        case PROFILE_FAILED:
            return {
                ...state,
                loading: false,
                error: payload,
                profile: null,
            }
        case REGISTRATION_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                userAuth: payload
            }
        case REGISTRATION_FAILED:
            return {
                ...state,
                loading: false,
                error: payload,
                userAuth: null,
            }
        case LOGOUT:
            localStorage.removeItem('userAuth')
            return {
                ...state,
                loading: false,
                userAuth: null,
                error: null,
            }
        default:
            return state;
    }
}


// auth provider
const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    
    // $Login Action
    const loginUserAction = async (formData) => {
        const config = {
            headers: {
                'Content-Type': "application/json",
            }
        }
        try {
            const res = await axios.post(`${API_URL_USER}/login`,
                formData,
                config
            );

            if (res?.data?.status === 'success') {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data
                })
            }

            window.location.href = "/dashboard";
            // redirect('/dashboard');
            
        } catch (error) {
            dispatch({
                    type: LOGIN_FAILED,
                    payload: error?.response?.data?.message
            })
            // console.log(error?.response?.data?.message);
        }
    }

    // $Register Action
    const registerUserAction = async (formData) => {
        const config = {
            headers: {
                'Content-Type' : "application/json"
            }
        }

        try {
            const res = await axios.post(`${API_URL_USER}/register`, formData, config);

            if (res?.data?.status === 'success') {
                dispatch({
                    type: REGISTRATION_SUCCESS,
                    payload: res.data
                })
            }

            // redirect to login
            window.location.href = "/login";
            

        } catch (error) {
            dispatch({
                type: REGISTRATION_FAILED,
                payload:error?.response?.data?.message
            })
        }
    }

    // $Profile Action
    const fetchProfileAction = async () => {
        const config = {
            headers: {
                'Content-Type': "application/json",
                'authorization' : `Bearer ${state?.userAuth?.token}`
            }
        }
        try {
            const res = await axios.get(`${API_URL_USER}/profile`, config);
            if (res?.data?.status === 'success') {
                dispatch({
                    type: PROFILE_SUCCESS,
                    payload: res.data?.data,
                })
            }
        } catch (error) {
            dispatch({
                type: PROFILE_FAILED,
                payload: error?.response?.data?.message,
            })
        }
    }

    // $Logout Action
    const logoutUserAction = () => {
        dispatch({
            type: LOGOUT,
            payload: null
        })
        
        window.location.href = "/";
    }

    return (
        <authContext.Provider value={{
            userAuth: state,
            profile: state?.profile,
            error: state?.error,
            token: state?.userAuth?.token,
            loginUserAction,
            registerUserAction,
            fetchProfileAction,
            logoutUserAction
        }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthContextProvider;