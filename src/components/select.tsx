import { Stack, Box, TextField, MenuItem} from "@mui/material";

import React, { useState } from "react";

export const MuiSelect = ()=>{

    const [value, setValue] = useState('')

    console.log({value});
    

    const handleValue = (event:React.ChangeEvent<HTMLInputElement>)=>{

        setValue(event.target.value as string)
    }

    const [values, setValues] = useState<string[]>([])

    console.log({values});
    

    const handleValues = (e:any)=>{

        let countries = e.target.value

        setValues(typeof countries === 'string'? countries.split(','):countries)
    }

    return(
        <Stack spacing={4} mb={4}>

            {/* Select component is used for collecting information from a list of option */}

            {/* Box for now is a plain old div tag da we can specify some css ppties used wen u dont want a component da usually would span the entire width do so. See more about box in box component */}

            {/* MenuItem is used for the options */}

            {/* select props makes this TextField a select field */}

            {/* fullWidth takes the full width of its container */}

            <Box width={'250px'}>
                <TextField label={"Select Country"} select value={value} onChange={handleValue} fullWidth>
                    <MenuItem value={'Nig'}>Nigeria</MenuItem>
                    <MenuItem value={'Usa'}>USA</MenuItem>
                    <MenuItem value={'Ind'}>India</MenuItem>
                </TextField>

                {/* multiple select dropdown */}

                {/* we use selectProps props */}

                {/* all other props we used in the text-field component can be used here such as size, color etc */}

                <TextField label={"Select Countries"} select value={values} onChange={handleValues} fullWidth SelectProps={{multiple:true}}>
                    <MenuItem value={'Nig'}>Nigeria</MenuItem>
                    <MenuItem value={'Usa'}>USA</MenuItem>
                    <MenuItem value={'Ind'}>India</MenuItem>
                </TextField>
            </Box>

        </Stack>
    )
}