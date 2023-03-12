import { 
    Box,
    Radio, 
    Stack, 
    FormControl, 
    FormControlLabel,
    FormLabel,
    RadioGroup,
    FormHelperText
}   from "@mui/material";

import { useState } from "react";

export const MuiRadioButton = ()=>{

const [value, setValue] = useState('')

console.log({value});


const handleChange = (e:any)=>{
    setValue(e.target.value)
    
}
    return(
        
        <Stack spacing={4} mb={4}>

            {/* Radio Button allows user to select ONE option from a set */}

            {/* aria-labelledby value should b same with the id value in the formLabel */}

            <Box>
                {/* we can add error (header state in the form control) */}
                <FormControl >
                    <FormLabel id="job-experience-label">
                        Years of Experience
                    </FormLabel>
                    <RadioGroup
                        name="job-experience-group"
                        aria-labelledby="job-experience-label"
                        onChange={handleChange}
                        // row
                    >
                        <FormControlLabel control={<Radio/>} label={'0-2'} value={'0-2'}/>
                        <FormControlLabel control={<Radio/>} label={'3-5'} value={'3-5'}/>
                        <FormControlLabel control={<Radio/>} label={'above 5'} value={'above 5'}/>
                    </RadioGroup>
                    {/* <FormHelperText>we need to get ur years</FormHelperText> */}
                </FormControl>
            </Box>

        </Stack>
    )
}