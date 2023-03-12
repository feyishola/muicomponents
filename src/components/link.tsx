import { Link, Stack } from "@mui/material";

export const MuiLink = ()=>{
    return(
        <Stack spacing={2} direction={"row"} m={4}>
            <Link href="#">primary</Link>
            <Link href="#" color={"secondary"} underline={"hover"}>secondary</Link>
        </Stack>
    )
}