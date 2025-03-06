import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './app/components/header/Header';
import Login from './app/login/Login';
import Home from './app/components/home/Home';
import SideNavigation from './app/side-navigation/SideNavigation';
import Layout from './app/components/layout/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/home" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
