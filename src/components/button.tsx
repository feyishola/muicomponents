import { Box, Button, Stack, IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';


export const MuuiButton = ()=>{

    return(
        <Stack spacing={4} mb={4}>
            <Stack direction={'row'} spacing={2}>
                <Button variant="text" href="#www">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
            <Stack direction={"row"} spacing={2}>         
                <Button variant="contained" color="secondary">Secondary</Button>
                <Button variant="contained" color="success">success</Button>
            </Stack>
            <Stack display={"block"} direction={"row"} spacing={2}>

                 {/* without d display props, d size would not b so obivious */}

                <Button variant="contained" color="success" size="small">success</Button>
                <Button variant="contained" color="success" size="medium">success</Button>
                <Button variant="contained" color="success" size="large" disableElevation onClick={()=>{alert("testing all prpos")}}>success</Button>
            </Stack>

            <Stack direction={"row"} spacing={2}>
                <Button variant="contained" color="primary" startIcon={<SendIcon/>}>success</Button>
                <Button variant="contained" color="primary" endIcon={<SendIcon/>}>success</Button>
                
            </Stack>

            <Stack direction={"row"} spacing={2}>

                {/* ariel-label is added for accessability reasons */}

                <IconButton aria-label="send" color="primary" size="medium">
                    <SendIcon/>
                </IconButton>

            </Stack>
        </Stack>
    )
}