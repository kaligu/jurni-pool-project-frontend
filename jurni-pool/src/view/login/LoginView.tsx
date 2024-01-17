import vedio from '../../assets/vedio_login.mp4';

function LoginView() {
  return (
    <>
      <div className='flex md:flex-row flex-col'>
        <div className='bg-black md:h-screen md:w-3/5 w-screen h-48'>
        <video
        src={vedio}
        controls={false}
        autoPlay
        muted  
        loop  
        style={{ objectFit: 'cover', width: '100vw',height:'100%'}}
      ></video>
      <div className="md:h-screen md:w-3/5 w-screen h-48 absolute top-0 left-0 bg-[#4D6DE3] mix-blend-overlay opacity-60"></div>
        </div>
        <div className='bg-[#1a254e] md:h-screen md:w-1/6 w-screen h-10 absolute mix-blend-overlay opacity-45'></div>
        <div className='bg-[#21326c] md:h-screen md:w-3/6 w-screen h-40 absolute mix-blend-overlay opacity-35'></div>
        <div className='bg-[#4D6DE3] md:h-screen md:w-2/5 w-screen h-96'>
          <div className='flex items-center justify-center h-full'>
             <div className='bg-red-500 w-4/5 h-4/5'>
              
             </div>
          </div>
        </div>
      </div>

      <div className='bg-green-500 h-screen w-full'></div>

    </>
  )
}

export default LoginView
