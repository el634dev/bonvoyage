import React from 'react';

function Travel() {
    return (
      <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div class="text-center pb-12">
              <h2 class="text-base font-bold text-indigo-600">
                  We have the best vacation packages
              </h2>
              <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                  Check our other awesome locations
              </h1>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                  <div class="mb-8">
                      <img class="object-center object-cover rounded-full h-36 w-36" 
                        src="https://images.unsplash.com/photo-1549918864-48ac978761a4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVibGlufGVufDB8fDB8fHww" alt="" />
                  </div>
                  <div class="text-center">
                      <p class="text-xl text-gray-700 font-bold mb-2">Dublin</p>
                      <p class="text-base text-gray-400 font-normal">Ireland</p>
                  </div>
              </div>
              <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                  <div class="mb-8">
                      <img class="object-center object-cover rounded-full h-36 w-36" 
                        src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFyaXN8ZW58MHx8MHx8fDA%3D" alt="Paris" />
                  </div>
                  <div class="text-center">
                      <p class="text-xl text-gray-700 font-bold mb-2">Paris</p>
                      <p class="text-base text-gray-400 font-normal">France</p>
                  </div>
              </div>
              <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                  <div class="mb-8">
                      <img class="object-center object-cover rounded-full h-36 w-36" 
                        src="https://images.unsplash.com/photo-1562036861-44811e0b4481?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFoYW1hc3xlbnwwfHwwfHx8MA%3D%3D" alt="Bahamas" />
                  </div>
                  <div class="text-center">
                      <p class="text-xl text-gray-700 font-bold mb-2">Bahamas</p>
                      <p class="text-base text-gray-400 font-normal">Caribbean</p>
                  </div>
              </div>
              <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                  <div class="mb-8">
                      <img class="object-center object-cover rounded-full h-36 w-36" 
                        src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TG9uZG9ufGVufDB8fDB8fHww" alt="London" />
                  </div>
                  <div class="text-center">
                      <p class="text-xl text-gray-700 font-bold mb-2">London</p>
                      <p class="text-base text-gray-400 font-normal">England</p>
                  </div>
              </div>
              <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                  <div class="mb-8">
                      <img class="object-center object-cover rounded-full h-36 w-36" 
                        src="https://images.unsplash.com/photo-1613331134165-1445f441513c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3VyYWNhb3xlbnwwfHwwfHx8MA%3D%3D" alt="Caracao" />
                  </div>
                  <div class="text-center">
                      <p class="text-xl text-gray-700 font-bold mb-2">Curacao</p>
                      <p class="text-base text-gray-400 font-normal">Caribbean</p>
                  </div>
              </div>
              <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                  <div class="mb-8">
                      <img class="object-center object-cover rounded-full h-36 w-36" 
                        src="https://images.unsplash.com/photo-1566159269137-ccf6e35a126e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmFyYmFkb3N8ZW58MHx8MHx8fDA%3D" alt="Barbados" />
                  </div>
                  <div class="text-center">
                      <p class="text-xl text-gray-700 font-bold mb-2">Barbados</p>
                      <p class="text-base text-gray-400 font-normal">Caribbean</p>
                  </div>
              </div>
          </div>
      </section>
    );
}

export default Travel;
