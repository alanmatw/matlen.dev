import './App.css';
import Home from './components/home/home';

import {
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
      <div className='App'>
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
      </div>
  );
}

export default App;
