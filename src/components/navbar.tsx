import { AppBar, Toolbar, Typography, IconButton, Stack, Button } from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

export const MuiNavBar = ()=>{
    return(
        <AppBar>
            <Toolbar>
                <IconButton size="large" edge={'start'} aria-label={"logo"} color="inherit">
                    <CatchingPokemonIcon/>
                </IconButton>
                <Typography variant="h6" component={"div"} sx={{flexGrow:1}}>
                    Pokemon
                </Typography>
                <Stack direction={"row"} spacing={2}>
                    <Button color="inherit">Features</Button>
                    <Button color="inherit">Pricing</Button>
                    <Button color="inherit">Amount</Button>
                    <Button color="inherit">Login</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}