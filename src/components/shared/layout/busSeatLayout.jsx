import BusSeat from "../UI/busSeat";
import { Box, Grid } from "@mui/material";

const BusSeatLayout = ({ rightSeats, leftSeats, selectedSeats }) => {
  return (
    <Box sx={{ mx: 2, py: 2 }}>
      {/* Render right seats */}
      <Grid container spacing={2} sx={{ pb: 8 }}>
        {rightSeats.map((seat, index) => {
          // Extract the key and value from the object
          const [seatName, seatNum] = Object.entries(seat)[0];
          return (
            <Grid item xs={2.4} key={index}> {/* 5 items per row = 12 / 5 = 2.4 */}
              {seatNum === 1 ? (<BusSeat color="grey" seatName={seatName} />) : (<BusSeat seatName={seatName} selectedSeats={selectedSeats}/>)}
            </Grid>
          );
        })}
      </Grid>

      {/* Render left seats */}
      <Grid container spacing={2}>
        {leftSeats.map((seat, index) => {
          // Extract the key and value from the object
          const [seatName, seatNum] = Object.entries(seat)[0];
          return (
            <Grid item xs={2.4} key={index}> {/* 5 items per row = 12 / 5 = 2.4 */}
              {seatNum === 1 ? (<BusSeat color="grey" seatName={seatName} />) : (<BusSeat seatName={seatName} selectedSeats={selectedSeats}/>)}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default BusSeatLayout;
