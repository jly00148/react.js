import store from "."

 const defaultState = {
    list:['crossfire'],
    task:''
 }
 export default (state=defaultState,action)=>{
   if(action.type == 'change_item'){
      state.task = action.payload;
   }
    return state
}