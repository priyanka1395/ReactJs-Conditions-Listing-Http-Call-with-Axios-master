import React from 'react';
import './Sunilprofile.css';
const Sunilprofile = (props)=>{
return (
  <div className="Sunilprofile">
<h2>{props.name}</h2>
<h3>Age : {props.age}</h3>
  </div>
)
}


export default Sunilprofile;