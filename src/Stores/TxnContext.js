import {createContext} from 'react';
export const TxnContext=createContext({
    key:"transactions",
    default:{
        transaction:{},
        setTransaction:()=>{}
    }
});