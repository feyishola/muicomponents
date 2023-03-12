import { Typography,Stack } from "@mui/material";

export const MuiTypography =()=>{
    return(
        <Stack mb={4}>
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="subtitle1">sub tittle</Typography>
            <Stack>
                <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus reprehenderit molestiae, similique cum delectus, eius recusandae fugiat nulla, inventore laudantium natus libero fugit commodi quia. Error a temporibus molestias nisi.</Typography>
                <Typography variant="body2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, tenetur. Laudantium pariatur autem officiis provident eos ea officia accusantium, ex voluptatum, consequatur id aliquid quidem. Id dolore itaque odit laborum. </Typography>
            </Stack>
        </Stack>
    )
    
}