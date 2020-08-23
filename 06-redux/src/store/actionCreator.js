import {CHANGE_ITEM,ADD_ITEM,DEL_ITEM,INIT_ITEM} from './actionTypes';

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