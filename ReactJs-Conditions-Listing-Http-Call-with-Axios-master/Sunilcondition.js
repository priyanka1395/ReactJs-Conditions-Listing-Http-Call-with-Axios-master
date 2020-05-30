import React,{Component} from 'react';
import Sunilprofile from './Sunilprofile';
class Sunilcondition extends Component{

constructor(){
super();
this.state = {
  checked : true
}
}

stateChanged = ()=>{
  this.setState({
    checked : ! this.state.checked
  })
}

render(){

//solving in javascript manner
let content = null;

if(this.state.checked){
  content = (
<Sunilprofile name="Sunil cute boy" age="18"/>
  )
}
else{
  content = null
}

  return (
    <div>
    <button onClick={this.stateChanged}>Toggle</button>
{content}


    </div>
  )
}


}

export default Sunilcondition;