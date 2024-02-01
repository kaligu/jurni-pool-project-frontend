import { motion } from 'framer-motion';
import vedio from '../../assets/vedio_login.mp4';
import logo from '../../assets/bigmain_logo.png';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import {GOOGLE_AUTH_CLIENT_ID, URL_SERVERAPI_USER_LOGIN, LOADTIMECALL_SERVERAPI_USER_LOGIN} from '../../util/config';
import { useState } from 'react';
import FullLoadScreen from '../../components/FullLoadScreen';
import { useNavigate} from 'react-router-dom';
import Footer from '../../components/Footer';

import { Carousel } from "@material-tailwind/react";
import image1 from '../../assets/cimage1.jpg';
import image2 from '../../assets/cimage2.jpg';
import image3 from '../../assets/cimage3.jpg';
import image4 from '../../assets/cimage4.jpg';
import image5 from '../../assets/cimage5.jpg';
import image6 from '../../assets/cimage6.jpg';
import image7 from '../../assets/cimage7.jpeg';
import image8 from '../../assets/cimage8.jpeg';


function LoginView() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();  // Access the history object for navigation

  const handleGoogleLogin = (credentialResponse:any) => {
    setLoading(true);

    if (credentialResponse?.credential) {

      axios.post(URL_SERVERAPI_USER_LOGIN, {
        userData: credentialResponse,
      })
      .then(function (response) {
        console.log(response);
        // Handle the response as needed
        const userProfileImage = response.data._data.picture;

      // Store user profile image data in local storage
      localStorage.setItem('jur_ni_data_Profile_image', userProfileImage);
        //set routing link
        navigate('/user/app/Home'); // Use the history object for navigation>

      })
      .catch(function (error) {
        console.log(error);
        navigate('/');
      })
      .finally(() => {
        setLoading(false); // Set loading to false on login error

      });
    } else {
      console.log('Credential not available');
      navigate('/');
    }
  };

  return (
    <>
      {/* loading component */}
      {loading && <FullLoadScreen loadingTime={LOADTIMECALL_SERVERAPI_USER_LOGIN}/>}


      <div className='flex md:flex-row flex-col'>
        <motion.div
        initial={{
          x: -1000
        }}
        animate={{
          x: 0
        }}
        transition={{
          duration: 0.5,
          ease: "linear",
          delay: 0.1,
        }}
        className='bg-black md:h-screen md:min-h-[30rem] md:w-3/5 w-screen h-48'>
        <video
        src={vedio}
        controls={false}
        autoPlay
        muted  
        loop  
        style={{ objectFit: 'cover', width: '100vw',height:'100%'}}
      ></video>
      <motion.div
        initial={{
          x: -1000
        }}
        animate={{
          x: 0
        }}
        transition={{
          duration: 1.5,
          ease: "linear",
          delay: 0.5,
        }}
         className="md:h-screen md:w-3/5 w-screen h-48 md:min-h-[30rem] absolute top-0 left-0 bg-[#4D6DE3] mix-blend-overlay opacity-80"></motion.div>
        </motion.div>
        <div className='bg-[#e8e8e8] md:h-screen md:min-h-[30rem] md:w-1/5 w-screen h-14 absolute mix-blend-overlay opacity-40'></div>
        <div className='bg-black md:h-screen md:min-h-[30rem] md:w-3/5 w-screen h-48 absolute mix-blend-overlay opacity-10'></div>
        <motion.div
        initial={{
          y: -1000
        }}
        animate={{
          y: 0
        }}
        transition={{
          duration: 0.5,
          ease: "linear",
          delay: 0.1,
        }}
           className='bg-[#4D6DE3] md:h-screen md:min-h-[30rem] md:w-2/5 w-screen h-[31rem]'>
          <div className='flex items-center justify-center h-full'>
             <div className='w-4/5 h-4/5 flex flex-col items-center justify-center border border-white rounded'>
             <h1 className='-mt-5 text-white font-bold text-2xl '>පිවිසුම</h1>
             <hr className='mt-2 h-1 w-2/5'></hr>
               <img alt='logo' src={logo} className='mt-8 w-3/5 h3/5'></img>
               
               <h3 className='mt-5 text-white'>ඔබේ ගිනුමට ඇතුළු වීමට </h3>
               <h3 className='text-white'>පහලින් තිබෙන</h3>
               <h3 className='text-white'>ගූගල් බොත්තම ඔබන්න.</h3>
               <div className='mt-3'></div>
               <GoogleOAuthProvider  clientId={GOOGLE_AUTH_CLIENT_ID}>
      <GoogleLogin
        size='large'
          onSuccess={handleGoogleLogin}
          onError={() => {
            console.log('Login Failed');
            setLoading(false); // Set loading to false on login error
          }}
        useOneTap
      />
    </GoogleOAuthProvider>

             </div>
          </div>
        </motion.div>
      </div>

      {/* Other Content */}


      <div className='bg-gray-800 h-screen w-full flex justify-center items-center flex-col'>
      
      <h1 className='text-white text-2xl' >"අපි දිනපතා කාර් මිලියනයක් මාර්ගවලින් ඉවත් කිරීමේ මෙහෙයුමක යෙදී සිටිමු"</h1>
      <h1 className='text-white text-xl mt-3' >කාර්පූල්. බයික් පූල්. හිස් ආසන බෙදාගන්න. මුදල් ඉතිරිකිරීම. මිතුරන් ඇති කරගන්න. CO2 අඩු කරන්න</h1>
      <Carousel placeholder='' transition={{ duration: 1 }} className="mt-5 rounded-xl w-5/6 h-2/3">
      <img
        src={image1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={image2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={image3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src={image4}
        alt="image 4"
        className="h-full w-full object-cover"
      />
      <img
        src={image5}
        alt="image 5"
        className="h-full w-full object-cover"
      />
      <img
        src={image6}
        alt="image 6"
        className="h-full w-full object-cover"
      />
      <img
        src={image7}
        alt="image 7"
        className="h-full w-full object-cover"
      />
      <img
        src={image8}
        alt="image 8"
        className="h-full w-full object-cover"
      />
  
    </Carousel>

      </div>

      {/* footer */}
      <Footer/>
    </>
  )
}

export default LoginView
