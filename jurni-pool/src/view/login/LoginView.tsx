import { motion } from 'framer-motion';
import vedio from '../../assets/vedio_login.mp4';
import { Typography } from "@material-tailwind/react";

function LoginView() {
  return (
    <>
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
        className='bg-black md:h-screen md:w-3/5 w-screen h-48'>
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
         className="md:h-screen md:w-3/5 w-screen h-48 absolute top-0 left-0 bg-[#4D6DE3] mix-blend-overlay opacity-100"></motion.div>
        </motion.div>
        <div className='bg-[#e8e8e8] md:h-screen md:w-1/5 w-screen h-14 absolute mix-blend-overlay opacity-40'></div>
        <div className='bg-black md:h-screen md:w-3/5 w-screen h-48 absolute mix-blend-overlay opacity-10'></div>
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
           className='bg-[#4D6DE3] md:h-screen md:w-2/5 w-screen h-96'>
          <div className='flex items-center justify-center h-full'>
             <div className='bg-gray-500 w-4/5 h-4/5'>

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
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Material Tailwind
      </Typography>
    </footer>
    </>
  )
}

export default LoginView
