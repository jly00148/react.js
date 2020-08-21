import {CHANGE_ITEM,ADD_ITEM,DEL_ITEM} from './actionTypes';

export function getChangeCreator(task){
    const action = {
        type:CHANGE_ITEM,
        payload:task
    }
    return action;
}

export function getAddCreator(payload){
    const action = {
        type:ADD_ITEM,
        payload:payload
    }
    return action;
}

export function getDelCreator(payload){
        const action = {
            type:DEL_ITEM,
            payload
        }
    return action;
}