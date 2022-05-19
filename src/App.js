import React from "react";
import ReactDOM  from "react-dom";
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import HomeComponent from "./HomeComponent";
import AddEmployeeComponent from "./AddEmployeeComponent";
import UpdateEmployeeComponent from "./UpdateEmployeeComponent";
import ViewEmployeeComponent from "./ViewEmployeeComponent";
// import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  return(
    <div>
      <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/addEmp">Add Employees</Link></li>
        <li><Link to="/updateEmp">Update Employee Details</Link></li>
        <li><Link to="/emps">View Employees </Link></li>
      </ul>
      <Switch>
        <Route exact path="/"><HomeComponent></HomeComponent></Route> 
        <Route path="/home"><HomeComponent/></Route>
        <Route path="/addEmp"><AddEmployeeComponent/></Route>
        <Route path="/updateEmp" component={UpdateEmployeeComponent}/>
        <Route path="/emps" component={ViewEmployeeComponent}/>
      </Switch>
      </Router>
    </div>
    
  )
}

ReactDOM.render(<App/>,document.getElementById('root'))

export default App




























































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
