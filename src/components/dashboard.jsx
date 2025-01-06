import { useState } from 'react';
import UserListTable from './shared/layout/usersListTable';
import DashboardUserListTable from './shared/layout/dashboardUserListTable';
import { Box, Typography } from '@mui/material';

const Dashboard = () => {
    const [isEditing, setIsEditing] = useState(false);

    // Fetch user details from local storage store

    return (
        <Box sx={{mx: 20}}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 8}}>
                <h1>Welcome to Dashboard !!!</h1>        
            </Box>
            <Typography variant="h3" component="h1" gutterBottom sx={{color:'grey', fontWeight:'bolder'}}>
                All Passengers :
            </Typography>
            <DashboardUserListTable/>
        </Box>
        // {if we have user info && <UserListTable name={name} email={email} seatNumber={seatNumber} dateOfBooking={dateOfBooking}/>}
        // {!userInfo && No user found}
    );
}

export default Dashboard;