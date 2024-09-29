import './css/App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Orden from './components/Orden';
import User from './components/User';
import Temp from './components/Temp';
import Navbar from './statics/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './statics/Sidebar';

// Componente para manejar la lógica de rutas
function App() {
  const location = useLocation(); 

  const isLogin = location.pathname === '/';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {!isLogin && <Navbar />} 
      <div style={{ display: 'flex', flex: 1 }}>
        {!isLogin && <Sidebar />}
        <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Temp />} />
            <Route path="/orden-resultados/:id" element={<Orden />} />
            <Route path="/info" element={<User />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default function Wrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}



