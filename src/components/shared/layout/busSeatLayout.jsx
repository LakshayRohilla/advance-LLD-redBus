import BusSeat from "../UI/busSeat";
import { Box, Grid } from "@mui/material";

const BusSeatLayout = ({rightSeats, leftSeats}) => {
  return (
    <Box sx={{ mx: 2, py: 2 }}>
      <Grid container spacing={2} sx={{pb:8}}>
        {rightSeats.map((seat, index) => (
          <Grid item xs={2.4} key={index}> {/* 5 items per row = 12 / 5 = 2.4 */}
            {seat === 1 ? <BusSeat color="grey" /> : <BusSeat />}
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2}>
        {leftSeats.map((seat, index) => (
          <Grid item xs={2.4} key={index}> {/* 5 items per row = 12 / 5 = 2.4 */}
            {seat === 1 ? <BusSeat color="grey" /> : <BusSeat />}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BusSeatLayout;
