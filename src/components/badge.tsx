import { Badge, Stack } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';

export const MuiBadge = ()=>{
    return(
        <Stack spacing={2} direction="row" m={2}>
            <Badge color="primary" badgeContent={5}>
                <MailIcon/>
            </Badge>
            <Badge color="secondary" badgeContent={0} showZero>
                <MailIcon/>
            </Badge>
            <Badge variant="dot" color="error" invisible={unreadMsg.length === 0}>
                <MailIcon/>
            </Badge>
        </Stack>
    )
}

const unreadMsg =[1,2,3]