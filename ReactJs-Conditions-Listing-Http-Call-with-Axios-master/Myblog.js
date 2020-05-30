import React,{Component} from 'react';
import axios from 'axios';
import Blogpost from './Blogpost'
class Myblog extends Component{

constructor(){
  super();
  this.state = {
    posts : []
  }
}

componentDidMount(){
axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
console.log('The list is ',res.data);
this.setState({
posts : res.data
})
})
.catch((err)=>{
  console.log('The error is ',err);
})
}

render(){
return (
  <div>
  List of Posts {this.state.posts.length}
  {
    this.state.posts.map((post)=>{
return <Blogpost title={post.title} body={post.body}/>
    })
  }

  </div>
)
}


}

export default Myblog;