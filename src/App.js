import './App.css';
import { useState } from 'react';
import Auth from './pages/Auth';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom'
import { getUser} from './utilities/users-service';

function App() {

  const [user, setUser] = useState(getUser());

  return (
    <div className="App">
      {
        user ?
          <>
            <NavBar setUser={setUser} user={user} />
            <Routes>

            </Routes>
          </>
        :
          <Auth setUser={setUser} />
      }
    </div>
  );
}

export default App;
