import { Autocomplete, TextField, Stack } from "@mui/material";

import { useState } from "react";

const Skills = ['HTML', 'CSS', 'Javascript', 'react']

export const MuiAutoComplete = ()=>{

    const [value, setValue] = useState<string | null>(null)
    console.log({value});

    const [objOptions, setObjOption] = useState<Skill | null>(null)

     type  Skill= {
        id: number,
        label: string
    }

    const skillOptions = Skills.map((skill,idx)=>({id:idx +1, label:skill}))
    console.log({objOptions});
    return(
        <Stack spacing={4} mb={4} width={'250px'}>

            {/* freesolo props is added wen we dont av our choice in the array */}
            <Autocomplete 
                options={Skills} 
                renderInput={(params)=><TextField {...params} 
                label="Skills"
                value={value}
                />}
                onChange={(e:any, newVal:string | null)=> setValue(newVal)}
                freeSolo
            />

            <Autocomplete 
                options={skillOptions} 
                renderInput={(params)=><TextField {...params} 
                label="Skills Objects"
                value={objOptions}
                />}
                onChange={(e:any, newVal:Skill | null)=> setObjOption(newVal)}
                
            />
        </Stack>
    )
}