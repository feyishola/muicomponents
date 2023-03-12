import { Box, Grid, Stack } from "@mui/material";

export const MuiGrid = ()=>{
    return(
        <>
                {/* Grid component is useful for creating a two dimensional layout */}

                {/* it has 2 variations, the container which is the parent and the item which is the child/children */}

                {/* it uses a flexbox under d hood and consists of 12 columns */}

            <Grid container my={4}>
                <Grid item xs={6}>
                    <Box bgcolor={"primary.light"} p={2}>Item 1</Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor={"primary.light"} p={2}>Item 2</Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor={"primary.light"} p={2}>Item 3</Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor={"primary.light"} p={2}>Item 4</Box>
                </Grid>
            </Grid>

            <Grid container my={4}>
                {/* not assiging a value to the breakpoint is the auto complete way */}
                <Grid item xs>
                    <Box bgcolor={"primary.light"} p={2}>Item 1</Box>
                </Grid>
                <Grid item xs>
                    <Box bgcolor={"primary.light"} p={2}>Item 2</Box>
                </Grid>
                <Grid item xs>
                    <Box bgcolor={"primary.light"} p={2}>Item 3</Box>
                </Grid>
                <Grid item xs>
                    <Box bgcolor={"primary.light"} p={2}>Item 4</Box>
                </Grid>
            </Grid>

            <Grid container my={4} spacing={2}>
                <Grid item xs>
                    <Box bgcolor={"primary.light"} p={2}>Item 1</Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor={"primary.light"} p={2}>Item 2</Box>
                </Grid>
                <Grid item xs>
                    <Box bgcolor={"primary.light"} p={2}>Item 3</Box>
                </Grid>
                <Grid item xs>
                    <Box bgcolor={"primary.light"} p={2}>Item 4</Box>
                </Grid>
            </Grid>

            <Grid container my={4} rowSpacing={2} columnSpacing={1}>
                <Grid item xs={6}>
                    <Box bgcolor={"primary.light"} p={2}>Item 1</Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor={"primary.light"} p={2}>Item 2</Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor={"primary.light"} p={2}>Item 3</Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor={"primary.light"} p={2}>Item 4</Box>
                </Grid>
            </Grid>
            
        </>
    )
}