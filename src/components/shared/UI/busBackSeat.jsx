import { Box, Tooltip } from "@mui/material";

const BusBackSeat = ({color}) => {
    // Didnt added seat selection here as its not required bcz in the problem statement seat is already booked.
    const handleSeatSelection = (color) => {
        if(color==='grey') alert('Seat already booked, choose another !!');
    }

    return (
        <Tooltip title={color === "grey" ? "Seat Booked" : ""}>
            <Box sx={{backgroundColor:color, border: '1px solid black', height:'80px', width:'40px', cursor:'pointer'}} onClick={() => handleSeatSelection(color)}>
                <Box sx={{border: '1px solid black', height:'20px', width:'2px', float:'right', p:0.4, m:0.8, mt:3.1}}>
                </Box>
            </Box>
        </Tooltip>
    );
}

export default BusBackSeat;