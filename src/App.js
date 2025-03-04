import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './app/components/header/Header';
import Login from './app/login/Login';
import Home from './app/components/home/Home';
import SideNavigation from './app/side-navigation/SideNavigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Login />} />
          <Route path="/home" element={<SideNavigation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
