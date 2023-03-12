import { Stack, TextField, InputAdornment } from "@mui/material";

import { useState } from "react";


export const MuiTextField = ()=>{

    const [value, setValue] = useState('')

    return(
        <Stack spacing={4} mb={4}>
            <Stack spacing={2} direction={"row"}>
                <TextField 
                    label="Name outlined"
                    variant="outlined"
                />
                <TextField 
                    label="Name filled"
                    variant="filled"
                />
                <TextField 
                    label="Name standard"
                    variant="standard"
                />
            </Stack>
            <Stack spacing={2} direction={"row"}>
                <TextField 
                    label="Name outlined"
                    variant="outlined"
                    size="small"
                    color="secondary"
                />
                <TextField 
                    label="required props"
                    variant="filled"
                    required
                />
                <TextField 
                    label="helper text props"
                    type={"password"}
                    helperText="Do not share ur password with anyone"
                    disabled
                />
                {/* setting the field to read only i.e u cant edit value use "InputProps" props */}
                <TextField 
                    label="Input props for read only"
                    type={"text"}
                    InputProps={{readOnly:true}}
                />
            </Stack>

                 {/* to add prefix or suffix we use "InputProps" props and InputArdonment component */}

            <Stack spacing={2} direction={"row"}>

                <TextField 
                    label="Amount"
                    InputProps={{startAdornment:<InputAdornment position="start">$</InputAdornment>}}
                />

                <TextField 
                    label="Weight"
                    InputProps={{endAdornment:<InputAdornment position="end">Kg</InputAdornment>}}
                />
            </Stack>

            {/* header props dat changes the header state we use the error props */}

            <Stack spacing={2} direction={"row"}>

                <TextField 
                    label="header props"
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                    required
                    error={!value}
                    helperText ={!value?"Required":"Do not share ur password"}
                />

            </Stack>
            
        </Stack>
    )
}