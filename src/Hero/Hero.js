// Hero Component
import React from 'react';

function Hero() {
	// Set backgroud image
	const imageStyle = {
		backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D')",
		objectFit: "cover"
	};

    return (
		<div class="w-full bg-center bg-cover h-[38rem]" style={imageStyle}>
			<div class="flex items-center justify-center w-full h-full bg-gray-900/40">
				<div class="text-center">
					<h1 class="text-3xl font-semibold text-white lg:text-4xl">Travel <span class="text-blue-400">, Explore</span> and See the World</h1>
					<h2 class='text-white font-semibold mt-2'>STAY 6 DAYS | 7 NIGHTS IN LOCATIONS AROUND THE WORLD</h2>
					<button class="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
						BOOK YOUR STAY
					</button>
				</div>
			</div>
		</div>
      );
}

export default Hero;
