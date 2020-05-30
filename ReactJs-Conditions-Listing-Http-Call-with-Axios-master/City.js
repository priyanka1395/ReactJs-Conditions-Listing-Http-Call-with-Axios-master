import React from 'react';
import './City.css';
const City = (props)=>{
  return (
    <div className="City">
<h2>{props.name}</h2>
<h3>Population : {props.population}</h3>
<p>
<input onChange={props.txtChange}/>
</p>
    </div>
  )
}

export default City;