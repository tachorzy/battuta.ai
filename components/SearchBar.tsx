"use client";

import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { satoshiMedium } from '../utils/localFonts';

// will replace later with whatever API we use, and eventually the Google Places API.
const TEST_CITIES = ['Islamabad', 'Lahore', 'Skardu', 'Karachi', 'Peshawar', 'Swat', 'Hunza Valley']

const SearchBar = () => {
    // hooks 
    const [destinations, setDestinations] = useState([''])
    const [startingCity, setStartingCity] = useState('')

    return(
        <div className="flex flex-col gap-y-8">
            <Autocomplete
                multiple
                disablePortal
                id="travel-combo-box"
                options={TEST_CITIES}
                className={satoshiMedium.className + " w-1/3"}
                onChange={(event, newDestinations) => {
                    setDestinations(newDestinations)
                }}
                onInputChange={(event, newDestination) => {
                setDestinations([...destinations, newDestination])
                setStartingCity(destinations[0])
                }}
                renderInput={(params) => <TextField {...params} label="Choose your path" />}
            />
            <div className="flex flex-col gap-y-4 w-1/3 h-1/6">
                {destinations.map((destination) => {
                    return(
                        <h1 className="rounded-md p-4 bg-medina-400 text-lg text-medina-950">
                            {destination}
                        </h1>
                    )
                })}
            </div>
        </div>

    )


}

export default SearchBar;