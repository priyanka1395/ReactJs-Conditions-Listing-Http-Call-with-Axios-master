import React from 'react';

const Blogpost = (props)=>{

const style = {
  width : '400px',
  height : '200px',
  margin : '10px',
  padding : '15px',
  border : '1px solid #ccc',
  borderRadius : '10px',
  fontFamily : 'serif'

}

const headStyle={
  color : 'red',
  fontFamily : 'georgia'
}

return (
  <div style={style}>
<h3 style={headStyle}>{props.title}</h3>
<p>
{props.body}
</p>
  </div>
)
}

export default Blogpost;