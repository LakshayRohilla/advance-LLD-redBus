import { Box } from "@mui/material";
import UserInfoForm from '../components/shared/UI/userInfoForm';
import { useLocation } from 'react-router-dom';

const EditPassenger = () => {
    const location = useLocation();
    const passangerData = location.state;

    return ( 
        <Box sx={{m: 15, display:'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
           <UserInfoForm edit={true} passangerData={passangerData}/>
        </Box>
    );
}

export default EditPassenger;