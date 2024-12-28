import { Box } from "@mui/material";

const BusSeat = ({color}) => {
    // Seat selection(click) should be handled here.
    // Dispatch action here for state updation
    return (
        <Box sx={{backgroundColor:color, border: '1px solid black', height:'35px', width:'65px'}}>
            <Box sx={{border: '1px solid black', height:'20px', width:'2px', float:'right', p:0.4, m:0.8}}>
            </Box>
        </Box>
    );
}

export default BusSeat;