import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

import { useState } from "react";

export const MuiDrawer = ()=>{

    const [state, setState] = useState(false)

    return(
        <Box m={4}>
            <IconButton onClick={()=>{setState(true)}} size="large" aria-label="logo" edge={"start"} color="inherit">
                <MenuIcon/>
            </IconButton>
            <Drawer
                anchor="left"
                open={state}
                variant="persistent"
                onClose={()=>{setState(false)}}
            >
                <Box p={2} width={"100px"} textAlign={"center"} role={"presentation"}>
                    <Typography variant="h6" component={"div"}>Side Panel</Typography>
                </Box>
            </Drawer>
        </Box>
    )
}