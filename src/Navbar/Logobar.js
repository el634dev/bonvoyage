import React from 'react';
import logo from '../images/abta.svg'
import travel from '../images/travel.svg'

function Logobar() {
    return (
        <div className="bg-gray-400 flex justify-between items-center py-2 px-4">
            <div className="flex items-center">
                <img src={travel} alt="Logo 1" className="h-6 mr-2" />
                <img src={logo} alt="Logo 2" className="h-6" />
            </div>
         </div>
    );
}

export default Logobar;
