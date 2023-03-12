import { 
    Stack, 
    Box, 
    FormControlLabel, 
    Checkbox, 
    FormControl,
    FormLabel,
    FormGroup
}   from "@mui/material"

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import { useState } from "react"



export const MuiCheckBox = ()=>{

    const [acceptTnC, setAcceptTnC] = useState(false)

    console.log({acceptTnC});
    
    
    const handleChange = (e:any)=>{
        setAcceptTnC(e.target.checked)
    }

    const [Skills, setSkills] = useState<string[]>([])

    console.log({Skills});
    
    const handleSkillChange = (e:any)=>{
        let index = Skills.indexOf(e.target.value)

        if(index === -1){
            setSkills([...Skills, e.target.value])
        }else{
            setSkills(Skills.filter(skill=>skill !== e.target.value))
        }

    }
    

    return(
        <Stack spacing={4} mb={4}>

            {/* Check-Box allows user to select MORE THAN ONE option from a set AND can also be used to turn an option ON or OFF */}
            <Box>
                <Box>
                    <FormControlLabel label={"i accept the terms and condition"} control={<Checkbox checked={acceptTnC} onChange={handleChange}/>} />
                </Box>

                

                <Box>

                    {/* we can use icons  */}

                    <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon/>} checked={acceptTnC} onChange={handleChange}/>
                </Box>

                <Box>

                    {/* check-box group */}

                    <FormControl>
                        <FormLabel>
                            Skills
                        </FormLabel>
                        <FormGroup>
                            <FormControlLabel 
                                label={"HTML"}
                                control={<Checkbox value={'HTML'} onChange={handleSkillChange}/>}
                               
                            />
                            <FormControlLabel 
                                label={"CSS"}
                                control={<Checkbox value={'CSS'} onChange={handleSkillChange}/>}
                                
                            />
                            <FormControlLabel 
                                label={"Javascript"}
                                control={<Checkbox value={'Javascript'} onChange={handleSkillChange}/>}
                                
                            />
                        </FormGroup>
                    </FormControl>
                </Box>
            </Box>

        </Stack>
    )
}