import { Box, Tooltip } from "@mui/material";
import { useState } from 'react';

const BusSeat = ({color, seatName, selectedSeats}) => {

    const [seatColor, setSeatColor] = useState(color);
    const handleSeatSelection = (color) => {
        if(color==='grey') alert('Seat already booked, choose another !!');
        if (seatColor === '#ed326e') {
            setSeatColor(undefined); 
            selectedSeats(seatName); 
        } else {
            setSeatColor('#ed326e'); 
            selectedSeats(seatName); 
        }
    }

    return (
        <Tooltip title={color === "grey" ? "Seat Booked" : ""}>
            <Box sx={{backgroundColor:seatColor, border: '1px solid black', height:'35px', width:'65px', cursor:'pointer'}} onClick={() => handleSeatSelection(color)}>
                <Box sx={{border: '1px solid black', height:'20px', width:'2px', float:'right', p:0.4, m:0.8}}>
                </Box>
            </Box>
        </Tooltip>
    );
}

export default BusSeat;