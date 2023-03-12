import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";

import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';

import { MouseEvent, useState } from "react";

export const MuiToggleButton = ()=>{

    const [toggle, setToggle] = useState<string[]>([])

    console.log({toggle})

    const handleToggle = (event:MouseEvent<HTMLElement>, updatedToggle:string[])=>{
        setToggle(updatedToggle)
    }

    return(
        <Stack mb={4}>

            <Stack direction={"row"} >
                <ToggleButtonGroup 
                    aria-label="text formating test" 
                    value={toggle} 
                    onChange={handleToggle}

                    >
                        
                    <ToggleButton value={"bold"} aria-label={'bold'}><FormatBoldIcon/></ToggleButton>
                    <ToggleButton value={"underlined"} aria-label={'underlined'}><FormatUnderlinedIcon/></ToggleButton>
                    <ToggleButton value={"italic"} aria-label={'italic'}><FormatItalicIcon/></ToggleButton>
                </ToggleButtonGroup>
            </Stack>

            {/* exclusive props is only added wen u want only 1 option as a choice on the toggle. check tutorial 6 time 6:20 for implementation*/}

            {/* <Stack direction={"row"} mb={4}>
                <ToggleButtonGroup 
                    aria-label="text formating test" 
                    value={toggle} 
                    onChange={handleToggle}
                    exclusive
                    >
                        
                    <ToggleButton value={"bold"} aria-label={'bold'}><FormatBoldIcon/></ToggleButton>
                    <ToggleButton value={"underlined"} aria-label={'underlined'}><FormatUnderlinedIcon/></ToggleButton>
                    <ToggleButton value={"italic"} aria-label={'italic'}><FormatItalicIcon/></ToggleButton>
                </ToggleButtonGroup>
            </Stack> */}
            
        </Stack>

    )
}
