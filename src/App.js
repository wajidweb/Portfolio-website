
import './App.css';
import Home from './App/components/pages/Home';
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div>

      <Router >
        
        
             <Home />
            
        
      </Router>
    </div>
  );
}

export default App;
