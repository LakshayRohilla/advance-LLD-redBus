import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";
// import { saveShippingAddress } from '../../store/slices/cartSlice';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Box component={Link} to="/" sx={{ color: 'black', textDecoration: 'none', cursor:'pointer', '&:hover': { color: 'grey' }}}variant="body2" >
                 <u>Advance LLD RedBus</u>
        </Box>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function UserInfoForm({getUserDetails}) {
    //  IMP NOTE : The reason I added the state here is later Ill be using the same form to edit the details too.
    // If edit is not required then just send the data data.get('firstName') to the store and that will work fine.
//   const cart = useSelector((state) => state.cart);
//   const { shippingAddress } = cart;

//   const [firstName, setFirstName] = useState(state?.firstName || '');
//   const [lastName, setLastName] = useState(state?.lastName || '');
//   const [email, setEmail] = useState(state?.email|| '');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   firstName: data.get('firstName'),
    //   lastName: data.get('lastName'),
    //   email: data.get('email')
    // });
    setFirstName(data.get('firstName'));
    setLastName(data.get('lastName'));
    setEmail(data.get('email'));
    getUserDetails({firstName, lastName, email});

    // dispatch(saveShippingAddress({ address, city, code, country }));
    // navigate('/payment');

  };

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
              {/* {isLoading && <Spinner/>} */}
            <Avatar sx={{ m: 1, bgcolor: 'black' }}>
              <PersonIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              User Infomation
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} >
                  <TextField
                  value={firstName}
                    autoComplete="firstName"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Enter first name"
                    autoFocus
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                  value={lastName}
                    required
                    fullWidth
                    id="lastName"
                    label="Enter last name"
                    name="lastName"
                    autoComplete="lastName"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                  value={email}
                    autoComplete="email"
                    name="email"
                    required
                    fullWidth
                    id="email"
                    label="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, color: 'white', backgroundColor: 'black', '&:hover': { backgroundColor: 'grey' }}}
                >
                  Save Details
                </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </>
  );
}