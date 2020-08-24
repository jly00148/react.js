import {CHANGE_ITEM,ADD_ITEM,DEL_ITEM,INIT_ITEM} from './actionTypes';
import axios from 'axios';
import store from  './index'
export function getChangeCreator(task){
    return {
        type:CHANGE_ITEM,
        payload:task
    }
}

export function getAddCreator(payload){
    return {
        type:ADD_ITEM,
        payload:payload
    }
}

export function getDelCreator(payload){
    return {
            type:DEL_ITEM,
            payload
        }
}

export function getInitDataCreator(payload){
    return {
        type:INIT_ITEM,
        payload
    }
}

export const getRequestInitData = ()=>{
    return (dispatch)=>{
        axios.get('http://127.0.0.1:3000')
            .then(result=>{
                store.dispatch(getInitDataCreator(result.data))
            })
            .catch(err=>{
                console.log(err);
            })
    }
}