import React from 'react';
import '../App.css'; //

const locations = [
    {
        city: "Москва",
        address: "123722, Москва, наб. Обводного канала, 11",
        hours: "Пн-Пт с 9:00 до 18:00 (МСК)",
        phone: "+7 (906) 228-13-37",
    },
    // Добавьте другие адреса
];

function PickupLocations() {
    return (
        <div className="locations-grid size">
            {locations.map((location, index) => (
                <div key={index} className="location-card">
                    <h3 className="location-city">{location.city}</h3>
                    <p className="location-address">{location.address}</p>
                    <div className="location-info">
                        <svg xmlns="http://www.w3.org/2000/svg" className="location-icon" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M3 9h18M3 15h18M3 21h18M3 21h18M3 21h18"/>
                        </svg>
                        <span className="location-hours">{location.hours}</span>
                    </div>
                    <div className="location-info">
                        <svg xmlns="http://www.w3.org/2000/svg" className="location-icon" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 2C12.6863 2 10 4.68629 10 8C10 8.74031 10.0588 9.46055 10.171 10.1558L3.223 17.1038C2.29257 17.7855 1.96973 19.1076 2.40146 20.2415C2.83319 21.3754 4.01256 21.9683 5.17288 21.5389C6.3332 21.1096 6.92605 19.9302 6.49718 18.7701C6.45149 18.6464 6.37645 18.5301 6.27669 18.426L9.84412 14.8585C10.5293 14.9412 11.2719 15 12 15C12.7281 15 13.4707 14.9412 14.1559 14.8585L15.6942 16.3969C15.5021 16.9894 15.5183 17.6285 15.7394 18.1823C15.9605 18.7362 16.3667 19.158 16.8829 19.3666C17.3991 19.5752 17.9791 19.5481 18.5076 19.29C19.0361 19.0319 19.4713 18.5631 19.7202 17.9863C19.969 17.4096 19.9998 16.7563 19.8077 16.1496L21 14.9574C20.5358 14.4932 20 14.2694 20 14.2694M20 14.2694C20 13.0797 20.2708 12.4479 20.7319 11.8951C21.1818 11.3547 21.9996 11.2696 22.499 11.2686C23.6636 11.2664 24.3037 12.5884 23.5372 13.4396L22.9262 14.0904M12 8C12 12.4183 15.5817 16 20 16C21.1046 16 22.1987 15.7763 23.1895 15.3432M8 10L8 13.5352M10 5L8 7M8 15V19M10 10H12.0043M7.9426 5.97096C6.59201 6.54895 5.27691 6.15891 4.4906 5.3726C3.83586 4.71787 3.49582 3.88332 3.64062 3.13829C3.76265 2.50297 3.9986 2.13313 4.11357 2.0405C5.23552 1.15804 6.36403 1.53595 7.25626 2.42819C8.1485 3.32043 8.35858 4.32953 7.99517 5.52325L7.58086 5.7804L7.9426 5.97096Z"/>
                        </svg>
                        <span className="location-phone">{location.phone}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PickupLocations;
