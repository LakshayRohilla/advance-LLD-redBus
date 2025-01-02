import { Box, Typography, Button } from "@mui/material";
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import BusSeatLayput from "../layout/busSeatLayout";
import Grid from "@mui/material/Grid2";
import BusSeat from "../UI/busSeat";
import BusBackSeat from "../UI/busBackSeat";
import UserInfoForm from '../UI/userInfoForm'
import {useState} from 'react';
import { useSelector } from "react-redux";

const ReservationSeatLayout = () => {

  const seat = useSelector((state) => state.seat);

  const lowerBackSeat = seat.seatInfo.lowerBackSeat[0].last;
  const lowerRightSeats = seat.seatInfo.lowerRightSeats;
  const lowerLeftSeats = seat.seatInfo.lowerLeftSeats;
  const upperBackSeat = seat.seatInfo.upperBackSeat[0].last;
  const upperRightSeats = seat.seatInfo.upperRightSeats;
  const upperLeftSeats = seat.seatInfo.upperLeftSeats;

  // const lowerBackSeat = [1];
  // const lowerRightSeats = [0, 1, 0, 0, 0, 0, 1, 1, 0, 0];
  // const lowerLeftSeats = [0, 1, 0, 1, 1];
  // const upperBackSeat = [1];
  // const upperRightSeats = [1, 0, 0, 1, 0, 0, 0, 0, 1, 0];
  // const upperLeftSeats = [1, 1, 0, 1, 0];


  const[reserveTicketClicked, setReserveTicketClicked] = useState(false);

  // only once we will dispatch once for sving user info.
  // we must have 3 functions here.
  // 1 - for getting which seat is selected
  let allSelectedSeats = [];
  const selectedSeats = (seat) => {
    if(allSelectedSeats.includes(seat)){
      allSelectedSeats = allSelectedSeats.filter((existingSeat) => existingSeat!==seat)
    } else allSelectedSeats.push(seat);
    console.log(allSelectedSeats);
  }
  // 2 - for getting user input from from
  // 3 - once save button , we will dispatch 

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          m: 2,
        }}
      >
        <Typography sx={{ backgroundColor: "#d44574", px: 2 }}>
          Click on an Available seat to proceed with your transaction.
        </Typography>
      </Box>
      <Box sx={{display:'flex', flexDirection:'column', justifyContent: "center", alignItems: "center",}}>
          <Box>
            <Typography variant="h6" gutterBottom>Lower Deck</Typography>
            <Box
              sx={{
                backgroundColor: "white",
                height: "280px",
                width: "550px",
                borderLeft: "6px solid black",
              }}
            >
              <Grid container spacing={2}>
                <Grid size={1}>
                  <Box sx={{ pt: 4, m: 1 }}>
                    <DonutSmallOutlinedIcon />
                  </Box>
                </Grid>
                <Grid size={9}>
                  <Box
                    sx={{
                      borderLeft: "2px solid black",
                      mt: 1.5,
                      mb: 1.5,
                      height: "260px",
                    }}
                  >
                    <BusSeatLayput rightSeats={lowerRightSeats} leftSeats={lowerLeftSeats} selectedSeats={selectedSeats}/>
                  </Box>
                </Grid>
                <Grid size={2}>
                  <Box sx={{ mt: 12 }}>
                    {lowerBackSeat === 1 ? (
                      <BusBackSeat color="grey" />
                    ) : (
                      <BusBackSeat />
                    )}
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
   
          <Box sx={{mb:2}}>
            <Typography  variant="h6" gutterBottom sx={{mt:2}}>Upper Deck</Typography>
            <Box
              sx={{
                backgroundColor: "white",
                height: "280px",
                width: "550px",
                borderLeft: "6px solid black",
              }}
            >
              <Grid container spacing={2}>
                <Grid size={10}>
                  <Box sx={{ mt: 1.5, mb: 1.5, ml: 5.7, height: "260px" }}>
                    <BusSeatLayput rightSeats={upperRightSeats} leftSeats={upperLeftSeats} selectedSeats={selectedSeats}/>
                  </Box>
                </Grid>
                <Grid size={2}>
                  <Box sx={{ mt: 12 }}>
                    {upperBackSeat === 1 ? (
                      <BusBackSeat color="grey" />
                    ) : (
                      <BusBackSeat />
                    )}
                  </Box>
                </Grid>
              </Grid>
            </Box>
            {reserveTicketClicked && <UserInfoForm/>}
          </Box>
          { !reserveTicketClicked && <Button
                  type="submit"
                  // fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, color: 'white', backgroundColor: 'black', '&:hover': { backgroundColor: 'grey' }}}
                  onClick={()=>setReserveTicketClicked(true)}
                >
                  Reserve Your Tickets Now
          </Button>}
      </Box>
      
    </Box>
  );
};

export default ReservationSeatLayout;
