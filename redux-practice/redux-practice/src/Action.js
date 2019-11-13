function add(){
  return{
      type:'ADD'
  }
};
function addWithAsync(){
  alert(2)
  return dispatch =>{
    alert(3)
    setTimeout(() => {
      dispatch(add())
    }, 2000);
  }
}
export {add,addWithAsync}