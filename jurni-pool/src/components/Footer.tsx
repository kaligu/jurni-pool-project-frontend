import React from 'react'
import { Typography } from "@material-tailwind/react";
import logo from '../../src/assets/logo_mini_icon.png';


function Footer() {
  return (
    <>
      <footer className="w-full bg-[#4D6DE3] p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-[#4D6DE3] text-center md:justify-between">
        <img src={logo} alt="logo-ct" className="w-10" />
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
        &copy; 2023 Jur-ni Pvt Ltd.
      </Typography>
    </footer>
    </>
  )
}

export default Footer
