import { Paper , Grid,Box} from "@mui/material";

export const MuiPaper = ()=>{
    return(
        <>
        {/* its a surface related component. great to use wen handling layout */}
        <Paper sx={{"padding":'32px'}}>
            <Grid container my={4} p={2}>
                    <Grid item xs={6}>
                        <Box bgcolor={"primary.light"} p={2}>Item 1</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box bgcolor={"primary.light"} p={2}>Item 2</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box bgcolor={"primary.light"} p={2}>Item 3</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box bgcolor={"primary.light"} p={2}>Item 4</Box>
                    </Grid>
            </Grid>
        </Paper>

        <Paper sx={{"padding":'32px'}} elevation={4}>
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
        </Paper>
        

        </>
    )
}