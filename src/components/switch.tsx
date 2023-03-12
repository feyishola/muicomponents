import { 
    Box, 
    FormControlLabel, 
    Stack, 
    Switch 
} from "@mui/material"

import { useState } from "react"


export const MuiSwitch = ()=>{

    const [Checked, setChecked] = useState(false)

    console.log({Checked});
    

    const handleChange = (e:any)=>{
        setChecked(e.target.checked)
    }
    return(
        <Stack spacing={4} mb={4}>
            <Box>
                <FormControlLabel label="Dark Mode" control={<Switch checked={Checked} onChange={handleChange}/>}/>
            </Box>
        </Stack>
    )
}