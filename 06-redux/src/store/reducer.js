import {CHANGE_ITEM,ADD_ITEM,DEL_ITEM,INIT_ITEM} from './actionTypes';
 const defaultState = {
    list:['crossfire'],
    task:''
 }
 export default (state=defaultState,action)=>{
   if(action.type == CHANGE_ITEM){
      /*
         1.reducer是一个纯函数(有固定的输入就会有固定输出)
         2. (state.task = action.payload)错误的写法，reducer不能更改参数传递过来的state,因为传递过来的state是store中的state
         所有组件都共享store中的store，这个state由store来管理，store根据reducer返回的新的state
         来更改自己的store，在组件中getState()返回的是store中的state
            state.task = action.payload;
      */
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
      newState.task = action.payload;
      return newState;
   }   
   return state

}