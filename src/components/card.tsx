import { Box, Button, Card,CardActions,CardContent, CardMedia, Typography } from "@mui/material";

export const MuiCard = ()=>{
    return(
        <Box width={"300px"} mb={4}>
            <Card>
                <CardMedia 
                    component={"img"} 
                    height={'140px'} 
                    image={"https://images.unsplash.com/photo-1678043639841-0dd13f8b1f1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"}
                    alt={"unsplash-image"}
                />
                <CardContent>
                    <Typography variant="h5" component={"div"} gutterBottom>
                        React
                    </Typography>
                    <Typography variant="body2" color={"text.secondary"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Earum maxime nemo tempore eos accusantium soluta expedita 
                        optio, deleniti commodi velit? 
                        Ipsum doloremque error ullam quam nobis unde, iusto illum odit.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button>Share</Button>
                    <Button>Learn more</Button>
                </CardActions>
            </Card>
        </Box>
    )
}