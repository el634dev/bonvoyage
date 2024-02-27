// Card Component
import React from 'react';

function Card() {
    return (
      <div>
         <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
         <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
            <div class="container">
               <div class="flex flex-wrap -mx-4">
                  <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                     <div class="bg-white rounded-lg overflow-hidden mb-10">
                        <img
                           src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9reW98ZW58MHx8MHx8fDA%3D"
                           alt=""
                           class="w-full"
                           loading='lazy'
                           />
                        <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                        <h3>
                           <a
                              href="javascript:void(0)"
                              class="
                              font-semibold
                              text-dark text-xl
                              sm:text-[22px]
                              md:text-xl
                              lg:text-[22px]
                              xl:text-xl
                              2xl:text-[22px]
                              mb-4
                              block
                              hover:text-primary
                              "
                              >
                           Toyko
                           </a>
                        </h3>
                        {/* Card 1 Description */}
                        <p class="text-base text-body-color leading-relaxed mb-7">
                        Tokyo is located in the center and heart of Japan, one of the most famous cities in the world. Know for futuristic locations.
                        </p>
                        <a
                           href="#"
                           class="
                           inline-block
                           py-2
                           px-7
                           border border-[#E5E7EB]
                           rounded-full
                           text-base text-body-color
                           font-medium
                           hover:border-primary hover:bg-primary hover:text-white
                           transition
                           "
                           >
                        Explore
                        </a>
                     </div>
                  </div>
               </div>
               {/* Card 2 */}
               <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                  <div class="bg-white rounded-lg overflow-hidden mb-10">
                     <img
                        src="https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNhbnRvcmluaXxlbnwwfHwwfHx8MA%3D%3D"
                        alt=""
                        class="w-full"
                        />
                     <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                        <h3>
                           <a
                              href="javascript:void(0)"
                              class="
                              font-semibold
                              text-dark text-xl
                              sm:text-[22px]
                              md:text-xl
                              lg:text-[22px]
                              xl:text-xl
                              2xl:text-[22px]
                              mb-4
                              block
                              hover:text-primary
                              "
                              >
                           Santorini
                           </a>
                        </h3>
                        {/* Card 2 Description */}
                        <p class="text-base text-body-color leading-relaxed mb-7">
                        Santorini is located in Greece and know for white washed buldings, along the coastline of Greece.
                        </p>
                        <a
                           href="javascript:void(0)"
                           class="
                           inline-block
                           py-2
                           px-7
                           border border-[#E5E7EB]
                           rounded-full
                           text-base text-body-color
                           font-medium
                           hover:border-primary hover:bg-primary hover:text-white
                           transition
                           "
                           >
                        Explore
                        </a>
                     </div>
                  </div>
               </div>
               {/* Card 3 */}
               <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                  <div class="bg-white rounded-lg overflow-hidden mb-10">
                     <img
                        src="https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1hbGZpfGVufDB8fDB8fHww"
                        alt=""
                        class="w-full"
                        loading='lazy'
                        />
                     <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                        <h3>
                           <a
                              href="javascript:void(0)"
                              class="
                              font-semibold
                              text-dark text-xl
                              sm:text-[22px]
                              md:text-xl
                              lg:text-[22px]
                              xl:text-xl
                              2xl:text-[22px]
                              mb-4
                              block
                              hover:text-primary
                              "
                              >
                           Amalfi
                           </a>
                        </h3>
                        {/* Card 3 Description */}
                        <p class="text-base text-body-color leading-relaxed mb-7">
                           Located along the coastline of Amalif Coast in Italy. Know for picturesque views and locations.
                        </p>
                        <a
                           href="#"
                           class="
                           inline-block
                           py-2
                           px-7
                           border border-[#E5E7EB]
                           rounded-full
                           text-base text-body-color
                           font-medium
                           hover:border-primary hover:bg-primary hover:text-white
                           transition
                           "
                           >
                        Explore
                        </a>
                     </div>
                  </div>
               </div>
               {/* View More Button */}
               <div class='container py-10 px-10 mx-0 min-w-full grid place-items-center'>
                  <button>
                        <a href="#" class="text-center text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                           VIEW MORE TOURS
                        </a>
                  </button>
               </div>
         </div>
   </div>
</section>
</div>
    );
}

export default Card;
