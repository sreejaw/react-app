import axios from "axios";
import React from "react";

class ViewEmployeeComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={employees:[]}
    }

    componentDidMount(){
        axios.get("http://localhost:2000/emps")
        .then(data=>this.setState({employees:data.data}))
    }

    render(){
        return(
    
            <div>
        <table border="2px">
            <tr>
                <th>Emp ID</th>
                <th>Emp Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
            {
                this.state.employees.map((emp)=>
                    <tr>
                        <td>{emp._id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.age}</td>
                        <td><button onClick={()=>this.deleteEmployee(emp._id)}>Delete</button></td>
                        {/* <td><button onClick={this.updateEmployee(emp._id)}>Edit</button></td> */}
                    </tr>
                )
            }
        </table>
        </div>
        )
    }
    deleteEmployee=(id)=>{
        axios.delete("http://localhost:2000/deleteemp/"+id)
        .then(data=>this.setState({employees:data.data}))
    }
}

export default ViewEmployeeComponent 