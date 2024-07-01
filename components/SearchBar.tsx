"use client";

import React, { useState } from 'react';
import { useLoadScript, Autocomplete } from '@react-google-maps/api';

import { satoshiMedium } from '../utils/localFonts';

const SearchBar = () => {
    const [destinations, setDestinations] = useState([''])
    const [startingCity, setStartingCity] = useState<string | null>("")

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY || '',
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
                        className={satoshiMedium.className + " bg-transparent border-b border-gray-300 focus:outline-none focus:border-gray-50 text-zellige-700"}
                    /> 
                </Autocomplete>
                :
                <p>Google did not load...</p>
            }
        </div>
    )


}

export default SearchBar;