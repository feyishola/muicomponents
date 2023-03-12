import { Avatar, Stack, AvatarGroup } from "@mui/material";

export const MuiAvatar = ()=>{
    return(
        <Stack spacing={2}>
            <Stack direction={"row"} spacing={1} >
                <Avatar>FY</Avatar>
                <Avatar>OL</Avatar>
            </Stack>
            <Stack direction={"row"} >
                <AvatarGroup>
                    <Avatar sx={{bgcolor:"primary.light"}}>FY</Avatar>
                    <Avatar sx={{bgcolor:"secondary.light"}}>OL</Avatar>
                    <Avatar src="https://randomuser.me/api/portraits/women/73.jpg" alt="jane doe"/>
                    <Avatar src="https://randomuser.me/api/portraits/men/34.jpg" alt="john doe"/>
                </AvatarGroup>
            </Stack>
        </Stack>
    )
}