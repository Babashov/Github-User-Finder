import { createContext,useReducer } from "react";
import AlertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertContextProvider = ({children})=>{

    const initialState = null;
    const [state,dispatch] = useReducer(AlertReducer,initialState);

    // Set Alert
    const setAlert = (msg,type)=>{
        dispatch({
            type:'set_alert',
            payload:{msg,type}
        });

        setTimeout(()=>{
            dispatch({type:'remove_alert'})
        },3000)
    }


    return <AlertContext.Provider value={{alert:state,setAlert}}>
        {children}
    </AlertContext.Provider>
}

export default AlertContext;

