import { Box, Typography } from "@mui/material";
import ReservationSeatlayout from "./shared/layout/reservationSeatLayout";

const Reservation = () => {
  return (
    <Box sx={{ mt: 9, pb:3, backgroundColor:"#eaeded", }}>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
          Welcome to Reservation !!!
        </Typography>
      </Box>
      <ReservationSeatlayout/>
    </Box>
  );
};

export default Reservation;
