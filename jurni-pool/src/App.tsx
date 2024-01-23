import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginView from './view/login/LoginView';
import Account from "../src/view/account/Account";
import History from "../src/view/history/History";
import OfferRide from "../src/view/offerride/OfferRide";
import SearchRide from "../src/view/searchride/SearchRide";
import Home from './view/Home/Home';

function App() {
  // localStorage.setItem('jur_ni_data_Profile_image','https://lh3.googleusercontent.com/a/ACg8ocLcshw8CRN4Mb8ak-MxkpjkRWUq4yV1HDzstsVhEc-nhJo=s96-c');
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<LoginView />} />

        <Route path={'/user/app/Home'} element={<Home/>} />
        <Route path={'/user/app/account'} element={<Account/>} />
        <Route path={'/user/app/offerride'} element={<OfferRide/>} />
        <Route path={'/user/app/searchride'} element={<SearchRide/>} />
        <Route path={'/user/app/history'} element={<History/>} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
