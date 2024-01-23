import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginView from './view/login/LoginView';
import UserMain from './view/user/UserMain';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<LoginView />} />
        <Route path={'/user/app'} element={<UserMain/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
