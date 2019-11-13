import {combineReducers} from 'redux';
let data={
  a:1
};
const Reducer=(state=data,action)=>{
  switch(action.type){
      case 'ADD':
          let b=state.a;
          b++
          return {a:b};
      default:
          return state
  }

}
export default Reducer;