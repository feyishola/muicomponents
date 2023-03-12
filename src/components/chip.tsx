import { Avatar, Chip, Stack } from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

import { useState } from "react";

export const MuiChip = ()=>{

    const [chips, setChips] = useState(["chip 1","chip 2","chip 3"])

    const handleDelete = (chipTobeDeleted:string)=>{
        setChips(chips.filter((chip)=>{ return chip !== chipTobeDeleted}))
    }

    return(
        <Stack direction={'row'} spacing={1}>
            <Chip label={"chip"} icon={<CatchingPokemonIcon/>}/>
            <Chip 
                label={"chip outlined"} 
                color={"secondary"} 
                variant="outlined" 
                size="medium"
                avatar={<Avatar>V</Avatar>}
            />
            <Chip label="click" color="warning" onClick={()=>{alert("clicked")}}/>
            <Chip 
                label="delete" 
                color="error" 
                onClick={()=>{alert("clicked")}} 
                onDelete={()=>{alert("delete handler clicked")}}
            />

            {chips.map((chip)=>{
                return <Chip key={chip} label={chip} onDelete={()=>{handleDelete(chip)}}/>
            })}
            
        </Stack>
    )
}