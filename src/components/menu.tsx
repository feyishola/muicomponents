import { AppBar, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

import { useState } from "react";

export const MuiMenuItem = ()=>{

    

    const [resource,setResource] = useState(null)

    const open = Boolean(resource)

    const handleClick = (e:any)=>{
        setResource(e.currentTarget)
    }

    const handleClose = (e:any)=>{
        setResource(null)
    }

    return(
        <AppBar position="static" >
            <Toolbar>
                <IconButton edge="start" color="inherit" >
                    <CatchingPokemonIcon/>
                </IconButton>
                <Typography variant="h5" component={'div'} sx={{flexGrow:1}}>
                    Pokemon
                </Typography>
                <Stack direction={"row"} spacing={2}>
                    <Button 
                        color="inherit" 
                        id="resource-button" 
                        onClick={handleClick} 
                        aria-controls={open?'resources-menu':undefined}
                        aria-haspopup = 'true'
                        aria-expanded = {open? true:undefined}
                        >
                            Resources
                    </Button>
                </Stack>
                <Menu id="resources-menu" anchorEl={resource} open={open} MenuListProps={{'aria-labelledby':'resource-button'}} onClose={handleClose}>
                    <MenuItem onClick={handleClose}>Blog</MenuItem>
                    <MenuItem onClick={handleClose}>Podcast</MenuItem>
                </Menu>
            </Toolbar>
           
        </AppBar>
        
    )
}