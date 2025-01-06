import { Box, Typography, Button } from "@mui/material";
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import BusSeatLayput from "../layout/busSeatLayout";
import Grid from "@mui/material/Grid2";
import BusSeat from "../UI/busSeat";
import BusBackSeat from "../UI/busBackSeat";
import UserInfoForm from '../UI/userInfoForm'
import {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { saveUserData } from '../../../store/slices/userInfo';
import { updateSeats } from '../../../store/slices/seatInfo';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ReservationSeatLayout = () => {

  const {seatInfo} = useSelector((state) => state.seat);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [allSelectedSeats, setAllSelectedSeats] = useState([])
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`; // YYYY-MM-DD

  const lowerBackSeat = seatInfo.lowerBackSeat;
  const lowerRightSeats = seatInfo.lowerRightSeats;
  const lowerLeftSeats = seatInfo.lowerLeftSeats;
  const upperBackSeat = seatInfo.upperBackSeat;
  const upperRightSeats = seatInfo.upperRightSeats;
  const upperLeftSeats = seatInfo.upperLeftSeats;

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
  const selectedSeats = (seat) => {
    if(allSelectedSeats.includes(seat)){
      setAllSelectedSeats(allSelectedSeats.filter((existingSeat) => existingSeat!==seat));
    } else setAllSelectedSeats([...allSelectedSeats, seat]);
  }
  // 2 - for getting user input from from
  // 3 - once save button , we will dispatch 
  const getUserDetails = (userData) => {
    // as onSubmit we are getting this data. Means on submit we are executing this function inside submit then we can dispatch in this function itself.
    dispatch(saveUserData({...userData, allSelectedSeats, dateOfBooking: formattedDate}));
    dispatch(updateSeats(allSelectedSeats));
    navigate("/");
    toast.success("Ticket reservation done !!!");
  }

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
            {reserveTicketClicked && <UserInfoForm getUserDetails={getUserDetails}/>}
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
