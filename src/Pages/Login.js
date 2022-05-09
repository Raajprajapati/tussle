import React from 'react'
import LoginCard from '../components/LoginCard.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import bg from '../assets/bg.mp4'
import insta from '../assets/Instagram.png';

function Login() {
    return (
        <>
            <div className="main">
                <video autoPlay muted loop playsinline>
                    <source src={bg} type="video/mp4" />
                </video>
                <Header />
                <LoginCard />
                <div className="note">
                    <p>Tussle.fit is currently in a closed Beta.</p>
                    <img src={insta} alt="insta logo" />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Login;
