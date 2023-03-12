import { Accordion, AccordionSummary, AccordionDetails, Box, Typography } from "@mui/material";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const MuiAccordion = ()=>{
    return(
        <Box mb={4}>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography>
                        Accordion
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Optio obcaecati quod neque nostrum rem quo facere magni 
                        officia nesciunt, natus cumque libero ipsum iusto aperiam officiis 
                        placeat deleniti illum doloremque!
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}