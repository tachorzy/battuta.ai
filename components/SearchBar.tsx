"use client";

import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { satoshiMedium } from '../utils/localFonts';

// will replace later with whatever API we use, and eventually the Google Places API.
const TEST_CITIES = ['Islamabad', 'Lahore', 'Skardu', 'Karachi', 'Peshawar', 'Swat', 'Hunza Valley']

const SearchBar = () => {
    const [destinations, setDestinations] = useState([''])
    const [startingCity, setStartingCity] = useState<string | null>("")

    return(
        <div className="flex flex-row">
            <Autocomplete
                disablePortal
                id="travel-combo-box"
                options={TEST_CITIES}
                className={satoshiMedium.className + " lg:w-[20%] peer-open:"}
                onChange={(event, startCity) => {
                    setStartingCity(startCity)
                }}
                renderInput={(params) => <TextField {...params} label="Select starting point" />}
            />
            <Autocomplete
                multiple
                disablePortal
                id="travel-combo-box"
                options={TEST_CITIES.filter(destinationOption => destinationOption !== startingCity)}
                className={satoshiMedium.className + " lg:w-1/3"}
                onChange={(event, newDestinations) => {
                    setDestinations(newDestinations)
                }}
                onInputChange={(event, newDestination) => {
                    setDestinations([...destinations, newDestination])
                }}
                renderInput={(params) => <TextField {...params} label="Add Destinations" />}
            />
        </div>
    )


}

export default SearchBar;