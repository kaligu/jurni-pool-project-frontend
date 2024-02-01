import NavigationBar from '../../components/NavigationBar'
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
function Home() {
  return (
    <div>
      <NavigationBar clickedState={1}/>
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
    </div>
  )
}

export default Home
