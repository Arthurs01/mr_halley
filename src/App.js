import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './Header';
import GalleryMenu from './GalleryMenu';
import Home from './Home';
import Contact from './Contact';



function App() {
  return (
    <div className="App">
     
      <Router>
        <Header/> 
        
        <Switch>
        
              <Route exact path="/mr_halley"component={Home}/>
              <Route path="/about">About</Route>
              <Route path="/gallery"component={GalleryMenu}/>
              <Route path="/contact"component={Contact}/>
              {/* <Route path="*"><h1>404 Not found</h1></Route> */}
              
             
              
        </Switch>
        
      </Router>
     
    </div>
  );
}


export default App;
