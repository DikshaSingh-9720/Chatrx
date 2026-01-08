import React, { useContext, useState } from 'react'
import withAuth from '../styles/utils/WithAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {


    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");


    const {addToUserHistory} = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    return (
        <div className='home'>

            <div className="navBar">

                <div style={{ display: "flex",padding:"10px", alignItems: "center" }}>

                    <img src="/chatrxwhite.png" className='chatrxlogo' onClick={() => { navigate("/") }}/>
                </div>

                <div className='links' style={{ display: "flex",padding:"10px", alignItems: "center" }}>
                    <IconButton onClick={
                        () => {
                            navigate("/history")
                        }
                    }>
                        <RestoreIcon />
                    <p style={{fontSize:"18px" ,color:"grey" ,margin:"5px"}}>HISTORY</p>
                    </IconButton>

                    <Button onClick={() => {
                        localStorage.removeItem("token")
                        navigate("/auth")
                    }}  style={{fontSize:"18px"}}>
                        Logout
                    </Button>
                </div>


            </div>


            <div className="meetContainer">
                <div className="leftPanel">
                    <div>
                        <h2>Providing Quality Video Call Just Like Quality Education</h2>

                        <div className='join' style={{ display: 'flex', gap: "10px" }}>

                            <TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant="outlined" />
                            <Button onClick={handleJoinVideoCall} variant='contained'>Join</Button>

                        </div>
                    </div>
                </div>
                <div className='rightPanel'>
                    <img srcSet='/logo3.png' />
                </div>
            </div>
        </div>
    )
}


export default withAuth(HomeComponent)