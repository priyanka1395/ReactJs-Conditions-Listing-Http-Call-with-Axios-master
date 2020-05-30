import React,{Component} from 'react';
import Profile from './Profile';
class Mycondition extends Component{

constructor(){
  super();
  this.state = {
    checked : true
  }
}

changeState = ()=>{
  this.setState({
    checked : ! this.state.checked
  })
}



render(){
let content = null;
if(this.state.checked){
content = (
  <Profile name="Mohan" age="21"/>
)
}
else{
  content = null;
}
return (
  <div>
<button onClick={this.changeState}>Change</button>
<hr/>
{content}
  </div>
)
}

// render(){
//   return (
//     <div>
//     <button onClick={this.changeState}>Change State</button>
//     <hr/>
//     {
//      (this.state.checked)? <Profile name="Mohan" age="21"/> : null
//     }

//     </div>
//   );
// }

}


export default Mycondition;