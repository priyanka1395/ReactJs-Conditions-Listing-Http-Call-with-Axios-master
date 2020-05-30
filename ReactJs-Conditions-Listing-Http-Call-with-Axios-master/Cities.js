import React,{Component} from 'react';
import City from './City';
class Cities extends Component{

constructor(){
  super();
  this.state = {
    cities : [
      {name : "Bangalore",population : 200},
      {name : "Chennai",population : 150},
      {name : "Madurai",population : 100}
    ]
  }
}

maintxtChange=(event,index)=>{

let tmpCities = this.state.cities;
console.log('The chnage is ',event.target.value)
tmpCities[index].name = event.target.value;
this.setState({
  cities : tmpCities
})
}

render(){
  return (
    <div>
    <h2>List Of Cities</h2>
{
this.state.cities.map((city,i)=>{
  return <City txtChange={(event)=>this.maintxtChange(event,i)} name={city.name} population={city.population}/>
})
}
    </div>
  )
}

}

export default Cities;