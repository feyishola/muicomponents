import { Stack, Alert, AlertTitle, Button} from "@mui/material";

export const MuiAlert = ()=>{
    return(
        <Stack spacing={1}>
            <Alert severity="error">This is an error alert</Alert>
            <Alert severity="info">This is an info alert</Alert>
            <Alert severity="success">This is a seccess alert</Alert>
            <Alert severity="warning">This is a warning alert</Alert>

            <Alert variant="outlined" severity="error">
                <AlertTitle>This is an error titile</AlertTitle>
                This is an error alert
            </Alert>
            <Alert variant="outlined" severity="info">This is an info alert</Alert>
            <Alert variant="outlined" severity="success">This is a seccess alert</Alert>
            <Alert variant="outlined" severity="warning">This is a warning alert</Alert>

            <Alert variant="filled" severity="error"><AlertTitle>This is an error titile</AlertTitle>This is an error alert</Alert>
            <Alert variant="filled" severity="info"><AlertTitle>This is an error titile</AlertTitle>This is an info alert</Alert>
            <Alert variant="filled" severity="success" action={<Button color="inherit" size="small">Undo</Button>}>
                This is a seccess alert
            </Alert>
            <Alert variant="filled" severity="warning" onClose={()=>{alert("close alert")}}>
                <AlertTitle>This is an error titile</AlertTitle>
                This is a warning alert
            </Alert>
        </Stack>
    )
}