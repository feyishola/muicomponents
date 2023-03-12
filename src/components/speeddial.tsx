import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import PrintIcon from '@mui/icons-material/Print';

export const MuiSpeedDial = ()=>{
    return(
        <SpeedDial
            icon={<SpeedDialIcon openIcon={<EditIcon/>}/>}
            ariaLabel = "speed dial"
            sx={{position:"absolute"}}
        >
            <SpeedDialAction icon={<ContentCopyIcon/>} tooltipTitle={"copy"}></SpeedDialAction>
            <SpeedDialAction icon={<ShareIcon/>} tooltipTitle={"share"}></SpeedDialAction>
            <SpeedDialAction icon={<PrintIcon/>} tooltipTitle={"Print"}></SpeedDialAction>
        </SpeedDial>
    )
}