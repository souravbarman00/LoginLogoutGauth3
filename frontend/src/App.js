import logo from './logo.svg';
import './App.css';
import Profile from './Profile';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/logout" element={<Logout/>} />
        <Route exact path="/profile" element={<Profile/>} />
        {/* Add other routes for different pages */}
      </Routes>
      {/* <Profile/> */}
    </Router>
    
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">

//       <Profile/>
//     </div>
//   );
// }

// export default App;
