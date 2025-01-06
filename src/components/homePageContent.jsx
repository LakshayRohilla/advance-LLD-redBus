import { toast } from "react-toastify";
import { useEffect } from 'react';

const HomePageContent = () => {
    
    useEffect(()=>{
        toast('🦄 Welcome to MyBus !!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    },[]);

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        }}>

            <h1>Welcome to My Bus !!!</h1>
        </div>
    );
}

export default HomePageContent;