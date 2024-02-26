import React from 'react';
import { MdCardTravel } from "react-icons/md";
import { MdOutlineTravelExplore } from 'react-icons/md';

function Search() {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>LUXURY VACATIONS</h2>
          <p className="py-4">
            Come experience the very pinnacle of luxury all-inclusive
            vacations. Our luxury beach resorts,
            set along the most gorgeous settings and exquisite locations
            in Santorini, Greece, Amalfi, Italy, Toyko, Barbados and
            Curaçao. Features include unlimited gourmet dining, unique bars serving
            premium liquors and wines, and every land and water sport, including
            complimentary green fees at our golf resorts and certified scuba
            diving at most resorts. 
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdCardTravel size={50} />
            </button>
            <div>
              <p className="py-1">
                BEST TRAVEL COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <p className="py-1">
                ECO FRIENDLY TOURS AND PACKAGES 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="border text-center">
          <p className="pt-2">GET ADDITIONAL 10% LEFT</p>
          <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label htmlFor="">Destinations</label>
            <select className="border rounded-md p-2 cursor-pointer">
              <option value="">Toyko</option>
              <option value="">Key West</option>
              <option value="">Amalfi</option>
              <option value="">Maldives</option>
              <option value="">Curaçao</option>
              <option value="">Santorini</option>
              <option value="">Barbados</option>
            </select>
          </div>
          <div className="flex flex-col my-2">
            <label>Check-in</label>
            <input
              className="border rounded-md p-2 cursor-pointer"
              type="date"
            />
          </div>
          <div className="flex flex-col my-2">
            <label>Check-out</label>
            <input
              className="border rounded-md p-2 cursor-pointer"
              type="date"
            />
          </div>
          <div>
            <button className="w-full my-4 cursor-pointer">
              <a href='' class="inline-block text-sm px-4 py-3 bg-blue-600 leading-none border rounded text-white hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                Rates & Availabilities
              </a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;