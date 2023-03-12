import { Box, styled } from "@mui/material";


// const styledBox = styled(Box)(({theme})=>{
//     height:"250px",
//     width:"250px",
//     background
// })


export const MuiResponsivness = ()=>{
    return(
        <Box 
            sx={{
                height:'300px',
                width:{
                    xs:100,
                    sm:200,
                    md:300,
                    lg:400,
                    xl:500
                },
                bgcolor:"orange"

            }}
        >

        </Box>
    )
}