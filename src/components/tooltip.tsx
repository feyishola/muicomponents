import { Tooltip, IconButton } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';

export const MuiToolTip = ()=>{
    return(
        <Tooltip title="message" sx={{m:2}} placement="right" arrow enterDelay={500} leaveDelay={200}>
            <IconButton>
                <MailIcon/>
            </IconButton>
        </Tooltip>
    )
}