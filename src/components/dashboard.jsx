import { useState } from 'react';
import UserListTable from './shared/layout/usersListTable';

const Dashboard = () => {
    const [isEditing, setIsEditing] = useState(false);

    // Fetch user details from local storage store

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        }}>
            <h1>Welcome to Dashboard !!!</h1>
        </div>
        // {if we have user info && <UserListTable name={name} email={email} seatNumber={seatNumber} dateOfBooking={dateOfBooking}/>}
        // {!userInfo && No user found}
    );
}

export default Dashboard;