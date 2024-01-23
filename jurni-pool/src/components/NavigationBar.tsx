// import ProfileAvatarIcon from '../assets/test_avatar.jpg';
import FindRideIcon from '../assets/navicon_find_ride.png';
import OfferSeatIcon from '../assets//navicon_seat.png';
import TripHistoryIcon from '../assets/navicon_history.png';
import MiniLogoIcon from '../assets/logo_mini_icon.png';
import { useEffect, useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
// import { LOADTIMECALL_SERVERAPI_GET_USER_IMAGE, URL_SERVERAPI_GET_USER_IMAGE } from '../util/config';
// import FullLoadScreen from './FullLoadScreen';

function NavigationBar(props: { clickedState: number; }) {

  // const [profileImage, setProfileImage] = useState('');
  // const [loading, setLoading] = useState(false);

  const [isButtonTwoClicked, setIsButtonTwoClicked] = useState(false);
  const [isButtonThreeClicked, setIsButtonThreeClicked] = useState(false);
  const [isButtonFourClicked, setIsButtonFourClicked] = useState(false);
  const [isButtonFiveClicked, setIsButtonFiveClicked] = useState(false);

  useEffect(() => {
    //
    switch (props.clickedState) {
      case 1:
        clearAllClickedCSS();
        break;
      case 2:
        clearAllClickedCSS();
        setIsButtonTwoClicked(true);
        break;
      case 3:
        clearAllClickedCSS();
        setIsButtonThreeClicked(true);
        break;
      case 4:
        clearAllClickedCSS();
        setIsButtonFourClicked(true);
        break;
      case 5:
        clearAllClickedCSS();
        setIsButtonFiveClicked(true);
        break;
      default:
        break;

    }


    // Load images using Axios and update state
    //  setLoading(true);
    //  axios.get(URL_SERVERAPI_GET_USER_IMAGE, {
    //   params: {
    //     userID: '114097123141468148252',
    //   },
    // })
    // .then(function (response) {
    //   // Assuming the image URL is available in response.data.imageUrl
    //   setProfileImage(response.data.data);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // })
    // .finally(() => {
    //   setLoading(false);
    // });
    
  }, []);

  function clearAllClickedCSS(){
    setIsButtonTwoClicked(false);
    setIsButtonThreeClicked(false);
    setIsButtonFourClicked(false);
    setIsButtonFiveClicked(false);
   
  }

  
  return (
    
    <>
    {/* loading component */}
    {/* {loading && <FullLoadScreen loadingTime={LOADTIMECALL_SERVERAPI_GET_USER_IMAGE}/>} */}
    
      <div className='sticky top-0 w-full h-16 bg-[#4D6DE3] hidden md:block z-50'>
        <div className='absolute'>
        <div>
        <Link to={'/user/app/Home'}>
        <img
          src={MiniLogoIcon}
          className='ml-3 mt-1 w-14 h-14 rounded-full transition-transform transform active:scale-120 active:shadow-2xl hover:scale-110 hover:shadow-xl cursor-pointer'
          alt='profile_photo'
        />
        </Link>
        
        </div>
        </div>
        <Link to={'/user/app/Home'}>
        <div className='absolute ml-20 mt-1 flex flex-col'>
          <div><h1 className='text-3xl text-white font-bold'>Jur-ni</h1></div>
          <div><h1 className='text-sm text-blue-100'>ශ්‍රී ලංකාවේ ප්‍රමුකතම ගමන් සංචිතය</h1></div>
          </div>
          </Link>
        <div className='flex flex-row justify-end '>
           
          <Link to={'/user/app/offerride'}>
          <div className='flex flex-col justify-center items-center' onClick={() => {clearAllClickedCSS(); setIsButtonTwoClicked(true);}}>
            <img src={OfferSeatIcon} className='mr-16 mt-2 w-8 h-8 rounded-full transition-transform transform active:scale-120 active:shadow-2xl hover:scale-110 hover:shadow-xl cursor-pointer' alt='profile_photo'/>
            <p className={`text-white text-xs -ml-16 ${isButtonTwoClicked ? 'border-b-2 border-white' : ''}`}>පලකිරීමට</p>
          </div>
          </Link>
          <Link to={'/user/app/history'}>
          <div className='flex flex-col justify-center items-center '
          onClick={() => {clearAllClickedCSS(); setIsButtonThreeClicked(true);}}> 
            <img src={TripHistoryIcon} className='mr-16 mt-2 w-8 h-8 rounded-full transition-transform transform active:scale-120 active:shadow-2xl hover:scale-110 hover:shadow-xl cursor-pointer'  alt='profile_photo ' 
            />
            <p className={`text-white text-xs -ml-16 ${isButtonThreeClicked ? 'border-b-2 border-white' : ''}`}>ගමන්</p>
          </div>
          </Link>
          <Link to={'/user/app/searchride'}>
          <div className='flex flex-col justify-center items-center' onClick={() => {clearAllClickedCSS(); setIsButtonFourClicked(true);}}>
            <img src={FindRideIcon} referrerPolicy="no-referrer" className='mr-16 mt-2 w-8 h-8 rounded-full transition-transform transform active:scale-120 active:shadow-2xl hover:scale-110 hover:shadow-xl cursor-pointer' alt='profile_photo'
            />
            <p className={`text-white text-xs -ml-16 ${isButtonFourClicked ? 'border-b-2 border-white' : ''}`}>සෙවීමට</p>
          </div>
          </Link>
          <Link to={'/user/app/account'}>
          <div className='flex flex-col justify-center items-center' onClick={() => {clearAllClickedCSS(); setIsButtonFiveClicked(true); } }>
            <img src={localStorage.getItem('jur_ni_data_Profile_image') || ''} referrerPolicy="no-referrer" className='mr-6 mt-2 w-8 h-8 rounded-full transition-transform transform active:scale-120 active:shadow-2xl hover:scale-110 hover:shadow-xl cursor-pointer' alt='profile_photo'
            />
            <p className={`text-white text-xs -ml-7 ${isButtonFiveClicked ? 'border-b-2 border-white' : ''}`}>මාගේ ගිනුම</p>
          </div>
          </Link>
        </div>
      </div>

      {/* mobile  */}
      <div className='sticky top-0 z-10 w-full h-14 bg-[#4D6DE3] block md:hidden'>
       
         
        <div className='flex flex-row justify-between '>
          
          <div>
          <Link to={'/user/app/Home'}>
            <img src={MiniLogoIcon} className='ml-2 mt-2 w-11 h-11 rounded-full transition-transform transform active:scale-110 active:shadow-md' alt='profile_photo'/>
            </Link>
          </div>
          
          
          <div>
          <Link to={'/user/app/offerride'}>
            <img src={OfferSeatIcon} className={`mr-2 mt-3 w-9 h-9 rounded-full transition-transform transform active:scale-110 active:shadow-md ${isButtonTwoClicked ? 'border-b-4 border-white'  : ''}`} alt='profile_photo'
            onClick={() => {clearAllClickedCSS(); setIsButtonTwoClicked(true);}}/>
            </Link>
          </div>
          
          
          <div>
          <Link to={'/user/app/history'}>
            <img src={TripHistoryIcon} className={`mr-2 mt-3 w-9 h-9 rounded-full transition-transform transform active:scale-110 active:shadow-md ${isButtonThreeClicked ? 'border-b-4 border-white' : ''}`} alt='profile_photo'
            onClick={() => {clearAllClickedCSS(); setIsButtonThreeClicked(true);}}/>
            </Link>
          </div>
          
          
          <div>
          <Link to={'/user/app/searchride'}>
            <img src={FindRideIcon} className={`mr-2 mt-3  w-9 h-9 rounded-full transition-transform transform active:scale-110 active:shadow-md ${isButtonFourClicked ? 'border-b-4 border-white' : ''}`} alt='profile_photo'
            onClick={() => {clearAllClickedCSS(); setIsButtonFourClicked(true);}}/>
            </Link>
          </div>
          
          
          <div>
          <Link to={'/user/app/account'}>
            <img src={localStorage.getItem('jur_ni_data_Profile_image') || ''} className={`mr-2 mt-3 w-9 h-9 rounded-full transition-transform transform active:scale-110 active:shadow-md ${isButtonFiveClicked ? 'border-b-4 border-white' : ''}`} alt='profile_photo'
            onClick={() => {clearAllClickedCSS(); setIsButtonFiveClicked(true);}}/>
            </Link>
          </div>
          
        </div>
      </div>

    </>
  )
}

export default NavigationBar