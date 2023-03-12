import { Box, Divider, Stack } from "@mui/material";

export const MuiBoxAndStack = ()=>{
    return(
        <>
        {/* stack is mostly used for one dimentional layout */}

        {/* box is an old plain div, we can use the sx props on both components i.e directly adding css ppties and changing system themes. thes makes dis layouts powerful */}

        <Stack spacing={2} direction={"row"} sx={{border:"1px solid" }} divider={<Divider orientation="vertical" flexItem/>}>
            <Box 
                sx={{
                    backgroundColor:"primary.main",
                    color:"white",
                    height:'100px',
                    width:'100px',
                    padding:'16px',
                    '&:hover':{
                        backgroundColor:'primary.light'
                    }
                }} 
                mb={4}
                >
                wrapper components
            </Box>
            <Box display={"flex"} bgcolor={'success.light'} height="100px" width={"100px"} p={2}></Box>
        </Stack>
        </>
    )
}