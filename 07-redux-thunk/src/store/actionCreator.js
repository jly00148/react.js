import {CHANGE_ITEM,ADD_ITEM,DEL_ITEM,INIT_ITEM} from './actionTypes';
import axios from 'axios';
export function getChangeCreator(task){
    return {
        type:CHANGE_ITEM,
        payload:task
    }
}

function getAddCreator(payload){
    return {
        type:ADD_ITEM,
        payload:payload
    }
}

function getDelCreator(payload){
    return {
            type:DEL_ITEM,
            payload
        }
}

function getInitDataCreator(payload){
    return {
        type:INIT_ITEM,
        payload
    }
}

const getRequestInitData = ()=>{
    return (dispatch)=>{ //默认有dispatch方法
            axios.get('http://127.0.0.1:3000')
            .then(result=>{
                dispatch(getInitDataCreator(result.data))
            })
            .catch(err=>{
                console.log(err);
            })
    }
}

export {
    getAddCreator,
    getDelCreator,
    getInitDataCreator,
    getRequestInitData
}