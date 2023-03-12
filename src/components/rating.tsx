import { Stack, Rating} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { useState } from "react";

export const MuiRating = ()=>{

    const [val, setVal] = useState<number | null>(null)

    const [valReadOnly, setValReadOnly] = useState<number | null>(3)

    console.log({val});


    const handleChange = (e:any, star:number | null)=>{
        setVal(star)
    }

    const handleChangeForReadOnly = (e:any, star:number | null)=>{
        setValReadOnly(star)
    }

    return(
    <Stack spacing={4} mb={4} direction={"row"}>
            <Rating value={val} onChange={handleChange} precision={0.5}/>
            <Rating 
                value={val} 
                onChange={handleChange} 
                icon={<FavoriteIcon fontSize="inherit" color="error"/>}
                emptyIcon={<FavoriteBorderIcon/>}
            />
             <Rating 
                value={valReadOnly} 
                onChange={handleChangeForReadOnly} 
                icon={<FavoriteIcon fontSize="inherit" color="error"/>}
                emptyIcon={<FavoriteBorderIcon/>}
                readOnly
            />
            {/* dis is good for emoji response.. using highlightSelectedOnly props */}
            <Rating 
                value={valReadOnly} 
                onChange={handleChangeForReadOnly} 
                icon={<FavoriteIcon fontSize="inherit" color="error"/>}
                emptyIcon={<FavoriteBorderIcon/>}
                highlightSelectedOnly
            />
        </Stack>
    )
}