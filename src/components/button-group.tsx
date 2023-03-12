import { Button, ButtonGroup, Stack } from "@mui/material";

export const ButtonGrp = ()=>{
    return(
        <Stack direction={"row"} mb={4}>

            {/* when using button group, the variant should b specified on the button grp */}

            <ButtonGroup 
                variant="contained" 
                orientation="vertical" 
                size="small"
                ariel-aria-label="Testing grp button"
            >
                <Button onClick={()=>{alert("button group")}}>Left</Button>
                <Button>Center</Button>
                <Button>Rigth</Button>
            </ButtonGroup>
        </Stack>
    )
}