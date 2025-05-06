import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
export default function LandingPage() {


    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav className='navbar'>
                <div className='navHeader'>
                    <img src="/chatrxlogo.png"style={{width:"300px"}} />
                </div>
                <div className='navlist'>
                    <p onClick={() => {
                        router("/aljk23")
                    }}>Join as Guest</p>
                    <p onClick={() => {
                        router("/auth")

                    }}>Register</p>
                    <div onClick={() => {
                        router("/auth")

                    }} role='button'>
                        <p>Login</p>
                    </div>
                </div>
            </nav>


            <div className="landingMainContainer">
                <div>
                    <h2><span style={{ color: "#00E5FF" }}>Connect</span> with your loved Ones</h2>

                    <p>Collaborate and connect with ease using <span style={{ color: "#00E5FF" }}>Chatrx</span>, a powerful videoconferencing app</p>
                    <div role='button'>
                        <Link to={"/auth"} style={{color:"black"}}>Get Started</Link>
                    </div>
                </div>
                <div>

                    <img src="/mobile.png" alt="" />

                </div>
            </div>



        </div>
    )
}