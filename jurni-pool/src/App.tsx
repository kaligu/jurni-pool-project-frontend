import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginView from './view/login/LoginView';
import FullLoadScreen from './components/FullLoadScreen';
import Main from './view/user/main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<LoginView />} />
        <Route path={'/user/app'} element={<Main/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
