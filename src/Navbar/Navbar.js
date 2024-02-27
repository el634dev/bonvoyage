import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import Popup from 'reactjs-popup';

function Navbar() {
    const [isOpen, setIsOpen ] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <nav class="flex items-center justify-between flex-wrap bg-blue-600 p-6">
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <span class="font-semibold text-xl tracking-tight">BonVoyage</span>
                </div>
                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                {/* Navbar Items */}
                <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div class="text-md lg:flex-grow text-center">
                        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            TOURS
                        </a>
                        {/******************/}
                        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            NEED TO KNOW
                        </a>
                        {/******************/}
                        <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            STORIES
                        </a>
                        {/******************/}
                        <a href="#" class="block mt-4 ml-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                           ABOUT
                        </a>
                    </div>
                    {/******************/}
                    <div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                        >
                            CONTACT
                        </button>
                        {isOpen && (
                            <form onSubmit={handleSubmit} class="absolute text-sm px-4 py-2 rounded text-black border-transparent hover:border-transparent hover:text-teal-500 bg-white hover:bg-white mt-4 lg:mt-0">
                                <label class="block">
                                    Name:
                                    <input type="text" id="name" name="name" class="border w-full p-2 mt-1" required />
                                </label>
                                <label class="block mt-2">
                                    Email:
                                    <input type="email" id="email" name="email" class="border w-full p-2 mt-1" required />
                                </label>
                                <label class="block mt-2">
                                    Message:
                                    <textarea id="message" name="message" class="border w-full p-2 mt-1" required />
                                </label>
                                <button type="submit" class="bg-blue-500 text-white px-2 py-1 rounded mt-2">Submit</button>
                            </form>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
