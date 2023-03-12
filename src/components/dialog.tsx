import { Dialog, DialogActions, DialogContent, DialogContentText, Button, DialogTitle } from "@mui/material";
import { useState } from "react";

export const MuiDialog = ()=>{
    const[open, setOpen] = useState(false)
    return(
        <>
        <Button onClick={()=>{setOpen(true)}}>Open Dialog</Button>
        <Dialog 
            open={open}
            onClose={()=>{setOpen(false)}}
        >
            <DialogContent>
                <DialogTitle>You are about to close a dialog</DialogTitle>
                <DialogContentText>should i go on?</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>{setOpen(false)}}>Cancel</Button>
                <Button onClick={()=>{setOpen(false)}} autoFocus>Proceed</Button>
            </DialogActions>
        </Dialog>
        </>
    )
}