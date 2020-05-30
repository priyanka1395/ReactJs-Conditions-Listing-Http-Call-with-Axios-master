import React,{Component} from 'react';


class Flowers extends Component{

constructor(){
  super();
  this.state = {
    flowers : [
      {name : 'Rose',cost : 230},
      {name : "Lily", cost : 134},
      {name : 'Lotus',cost : 230}
    ]
  }
}

render(){
  return(
    <div>
<h2>List of Flowers</h2>
<table>
<th>Name </th><th>Cost </th>
{
  this.state.flowers.map((flower,i)=>{
    return (
      <tr key={i}>
<td>{i+1}</td>      
<td>{flower.name}</td>
<td>{flower.cost}</td>
      </tr>
    )
  })
}
</table>
    </div>
  )
}

}

export default Flowers;