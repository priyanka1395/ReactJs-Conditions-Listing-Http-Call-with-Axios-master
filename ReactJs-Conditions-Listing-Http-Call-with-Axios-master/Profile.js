import React from 'react';
import './Profile.css';
const Profile = (props)=>{
return (
  <div className="Profile">
<h3>{props.name}</h3>
<h4>Age : {props.age}</h4>
  </div>
)
}

export default Profile;