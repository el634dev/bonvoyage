import React from 'react';

function Navbar() {
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
                        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            TOURS
                        </a>
                        {/******************/}
                        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            NEED TO KNOW
                        </a>
                        {/******************/}
                        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            STORIES
                        </a>
                        {/******************/}
                        <a href="#responsive-header" class="block mt-4 ml-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                           ABOUT
                        </a>
                    </div>
                    {/******************/}
                    <div>
                      <button>
                            <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                                CONTACT
                            </a>
                      </button>
                    </div>
                </div>
                {/******************/}
                {/* <div class="flex" data-te-input-wrapper-init>
                    <input
                        type="search"
                        class="block min-w-0  ml-3 max-w-[50%] flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon2" />
                </div> */}
            </nav>
        </div>
    );
}

export default Navbar;
