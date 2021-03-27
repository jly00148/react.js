import {CHANGE_ITEM,ADD_ITEM,DEL_ITEM,INIT_ITEM} from './actionTypes';
 const defaultState = {
    list:['crossfire'], //空数组也行
    task:''
 }
 export default (state=defaultState,action)=>{
   if(action.type == CHANGE_ITEM){
      const newState = JSON.parse(JSON.stringify(state));
      newState.task = action.payload;
      return newState
   }

   if(action.type == ADD_ITEM){
      const newState = JSON.parse(JSON.stringify(state));
      newState.list.push(action.payload);
      return newState;
   }

   if(action.type == DEL_ITEM){
      const newState = JSON.parse(JSON.stringify(state));
      newState.list.splice(action.payload,1);
      return newState;
   }

   if(action.type == INIT_ITEM){
      const newState = JSON.parse(JSON.stringify(state));
      newState.list = action.payload;
      return newState;
   }   
   return state

}