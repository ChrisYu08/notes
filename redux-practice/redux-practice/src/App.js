import React, { Component } from 'react';
import {connect} from 'react-redux';
import {add,addWithAsync} from './Action';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      h:1
     }
  }
  click=()=>{
    let {add,addWithAsync,dispatch} = this.props;
    // let {a}=this.state;
    // a++;
    // this.setState({
    //   a
    // })
    console.log(this.props)
    dispatch(addWithAsync())
  }
  render() { 
    let {a}=this.props;
    return (
      <div>
        <button onClick={this.click}>sure</button>
        {a}
      </div> 
     );
  }
}
 
export default connect((state,ownProps)=>{
  return state
},(dispatch,ownProps)=>{
  //第一种方式
  return {dispatch,add,addWithAsync}
  // 第二种方式
  // return {
  //   add1:id=>{
  //     dispatch(add(id))
  //   }
  // }
})(App);
