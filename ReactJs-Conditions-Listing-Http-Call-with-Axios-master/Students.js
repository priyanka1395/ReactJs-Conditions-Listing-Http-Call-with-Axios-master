import React,{Component} from 'react';

class Students extends Component{

constructor(){
    super();
    this.state = {
        students : [
            {name : 'Sunil Cute',height : 6,wt : 60},
            {name : 'Amitabh Bacchan',height : 7,wt : 35},
            {name : 'Rajesh Khanna',height : 6,wt : 60},
        ]
    }
}

render(){
    return (
        <div>
 <table>  
 <th>Serial No.</th><th>Name</th><th>Height</th> <th>Weight</th>      
{
this.state.students.map((student,i)=>{
return <tr key={i}><td>{i+1}</td><td>{student.name}</td><td>{student.height} </td><td> {student.wt}</td></tr>
})
}
</table>
        </div>
    )
}


}

export default Students;