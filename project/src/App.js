import './App.css';
import Form from "./components/Form";
import Nav from "./components/Nav";
import AllUsers from "./components/Allusers";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Nav />
       <Route  exact path="/" component={Form}/>
       <Route exact path="/add"component={AllUsers} />
        
       </BrowserRouter>  
    </div>
  );
}

export default App;
