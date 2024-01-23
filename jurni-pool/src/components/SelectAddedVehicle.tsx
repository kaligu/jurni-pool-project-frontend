
import { useState } from 'react';

interface CountryTypes {
  name: string;
  code: string;
}

const countries = [
    { name: 'United States', code: 'us' },
    { name: 'Canada', code: 'ca' },
    { name: 'United Kingdom', code: 'uk' },
    { name: 'Australia', code: 'au' }
];


function SelectAddedVehicle() {

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleCountrySelect = (country:CountryTypes) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
  };

  return (
    <>
      <div className="relative">

        <div className="relative w-full min-w-[200px] h-14"
         onClick={() => setDropdownOpen(!isDropdownOpen)} >

          <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
            <img src='https://img.icons8.com/ios/50/expand-arrow--v1.png'
             alt='expand-arrow--v1'
             className="absolute w-6 h-6 -ms-2"
            />
          </div>
          
          <div className=" peer w-full h-full bg-[#e0f2ff] text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-md px-3 py-2.5 rounded-[7px] !pr-9 border-blue-gray-200 focus:border-gray-900">
            <div className="inline-flex w-full px-4 py-2 text-sm text-gray-700  dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
              <div className="inline-flex items-center">
                <img className="w-4 h-4 mr-2 rounded-full"
                 src={`/images/${selectedCountry.code}.png`} 
                 alt={selectedCountry.name}
                />   
                {selectedCountry.name}
              </div>
            </div>
          </div>

          <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-[16px] text-[14px] peer-focus:text-[14px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-700 peer-focus:text-black before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
            Vehicle
          </label>
        </div>
    
        {isDropdownOpen && (
          <div className='w-full h-full bg-[#e0f2ff] rounded-md'>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="states-button">
              {/* Static Div */}
              <li>
                <div className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <div className="inline-flex items-center">
                      <img
                       className="w-4 h-5 mr-2 rounded-full"
                       src='https://img.icons8.com/ios/50/new-by-copy--v1.png'
                       alt='add-icon'
                      />           
                      Add New Vehicle
                    </div>
                </div>
            </li>

              {/* Dynamic generation of list items based on the countries array */}
              {countries.map((country) => (

                <li key={country.code}>
                  <div className={`inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white ${
                   selectedCountry === country ? 'bg-gray-200' : ''
                   }`}
                   onClick={() => handleCountrySelect(country)} 
                  >
                    <div className="inline-flex items-center">
                      <img
                       className="w-4 h-4 mr-2 rounded-full"
                       src={`/images/${country.code}.png`} // Replace with your image path
                       alt={country.name}
                      />
                    </div>
                    {country.name}
                  </div>
                </li>

              ))}

            </ul>
          </div>
        )}

      </div>
    </>
  )

} export default SelectAddedVehicle


