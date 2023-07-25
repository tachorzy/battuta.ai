"use client";

// import useAutocomplete from '@mui/base/useAutocomplete';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const TEST_CITIES = ['Islamabad', 'Lahore', 'Skardu', 'Karachi', 'Peshawar', 'Swat', 'Hunza Valley']

const SearchBar = () => {
    return(
        <div>
            <Autocomplete
                multiple
                disablePortal
                id="travel-combo-box"
                options={TEST_CITIES}
                sx={{ width: '33%' }}
                renderInput={(params) => <TextField {...params} label="Combo box" />}
            />
        </div>
    )


}

export default SearchBar;