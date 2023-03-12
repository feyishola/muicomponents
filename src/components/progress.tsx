import { Stack, CircularProgress, LinearProgress } from "@mui/material";

export const MuiProgress = ()=>{
    return (
        <Stack spacing={1}>
            <CircularProgress/>
            <CircularProgress color="success"/>
            <CircularProgress color="success" variant="determinate" value={60}/>

            <LinearProgress/>
            <LinearProgress color="success"/>
            <LinearProgress color="success" variant="determinate" value={60}/>
        </Stack>
    )
}