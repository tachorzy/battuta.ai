"use client";

import React, { useState } from 'react';
import { useLoadScript, Autocomplete } from '@react-google-maps/api';

import { satoshiMedium } from '../utils/localFonts';
// will replace later with whatever API we use, and eventually the Google Places API.
const TEST_CITIES = ['Islamabad', 'Lahore', 'Skardu', 'Karachi', 'Peshawar', 'Swat', 'Hunza Valley']

const SearchBar = () => {
    const [destinations, setDestinations] = useState([''])
    const [startingCity, setStartingCity] = useState<string | null>("")

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_MAPS_PLACES_API_KEY || '',
        libraries: ['places'],
    });

    return(
        <div className="flex flex-row">
            {isLoaded ?
                <Autocomplete
                    onLoad={(autocomplete) => console.log('autocomplete: ', autocomplete)}
                    onPlaceChanged={() => console.log('place changed')}
                >
                    <input
                        type="text"
                        placeholder="Starting City"
                        className={satoshiMedium.className + " bg-transparent border-b border-gray-300 focus:outline-none focus:border-gray-500"}
                    /> 
                </Autocomplete>
                :
                <p>Google did not load...</p>
            }

        </div>
    )


}

export default SearchBar;