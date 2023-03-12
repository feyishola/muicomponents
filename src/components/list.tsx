import { List,ListItem, ListItemText, Box, ListItemIcon, ListItemAvatar, Avatar, ListItemButton, Divider } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';

export const MuiList = ()=>{
    return(
        <Box sx={{width:"400px", bgcolor:"#efefef"}}>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <MailIcon/>
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary={"List 1"}/>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemText primary={"List 2"} secondary="secondary text"/>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemIcon>
                        <MailIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"List 3"}  secondary="secondary text"/>
                </ListItem>
                <Divider/>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemAvatar>
                                <Avatar>
                                    <MailIcon/>
                                </Avatar>
                            </ListItemAvatar>
                        </ListItemIcon>
                        <ListItemText primary={"hover on me or click"}/>
                    </ListItemButton>
                </ListItem>
                <Divider/>
            </List>
        </Box>
    )
}