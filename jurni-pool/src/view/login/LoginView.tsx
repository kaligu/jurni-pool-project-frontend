import { motion } from 'framer-motion';
import vedio from '../../assets/vedio_login.mp4';
import { Typography } from "@material-tailwind/react";
import logo from '../../assets/bigmain_logo.png';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import {GOOGLE_AUTH_CLIENT_ID, URL_SERVERAPI_USER_LOGIN, LOADTIMECALL_SERVERAPI_USER_LOGIN} from '../../util/config';
import { useState } from 'react';
import FullLoadScreen from '../../components/FullLoadScreen';

function LoginView() {
  const [loading, setLoading] = useState(false);
  

  const handleGoogleLogin = (credentialResponse:any) => {
    setLoading(true);

    if (credentialResponse?.credential) {

      axios.post(URL_SERVERAPI_USER_LOGIN, {
        userData: credentialResponse,
      })
      .then(function (response) {
        console.log(response);
        // Handle the response as needed
      })
      .catch(function (error) {
        console.log(error);
        // Handle the error as needed
      })
      .finally(() => {
        setLoading(false); // Set loading to false on login error
      });
    } else {
      console.log('Credential not available');
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
         className="md:h-screen md:w-3/5 w-screen h-48 md:min-h-[30rem] absolute top-0 left-0 bg-[#4D6DE3] mix-blend-overlay opacity-100"></motion.div>
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
      <div className='bg-white h-screen w-full'></div>

      {/* footer */}
      <footer className="w-full bg-[#4D6DE3] p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-[#4D6DE3] text-center md:justify-between">
        <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="logo-ct" className="w-10" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              placeholder=''
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              placeholder=''
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              placeholder=''
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              placeholder=''
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography placeholder='' color="blue-gray" className="text-center font-normal">
        &copy; 2023 Material Tailwind
      </Typography>
    </footer>
    </>
  )
}

export default LoginView
