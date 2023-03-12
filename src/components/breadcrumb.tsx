import { Link,Box, Breadcrumbs, Typography, Stack} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export const MuiBreadCrumb = ()=>{
    return(
        <Stack spacing={2} m={4}>
            <Box>
                <Breadcrumbs aria-label="bread-crumb">
                    <Link href="#" underline="hover">Home</Link>
                    <Link href="#" underline="hover">Catalog</Link>
                    <Link href="#" underline="hover">Accessories</Link>
                    <Typography color={"text.primary"}>Shoe</Typography>
                </Breadcrumbs>
            </Box>
            <Box>
                <Breadcrumbs aria-label="bread-crumb" separator={'-'}>
                    <Link href="#" underline="hover">Home</Link>
                    <Link href="#" underline="hover">Catalog</Link>
                    <Link href="#" underline="hover">Accessories</Link>
                    <Typography color={"text.primary"}>Shoe</Typography>
                </Breadcrumbs>
            </Box>
            <Box>
                <Breadcrumbs aria-label="bread-crumb" separator={<NavigateNextIcon fontSize="small"/>}>
                    <Link href="#" underline="hover">Home</Link>
                    <Link href="#" underline="hover">Catalog</Link>
                    <Link href="#" underline="hover">Accessories</Link>
                    <Typography color={"text.primary"}>Shoe</Typography>
                </Breadcrumbs>
            </Box>
        </Stack>
       
    )
}