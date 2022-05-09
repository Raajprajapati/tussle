import React from 'react';

function LoginCard() {
    return (
        <>
            <div className="login">
                <h3>Login</h3>
                <form >
                    <div className="input">
                        <select name="code" id="code">
                            <option value="+91">+91 🇮🇳</option>
                            <option value="+1">+1 🇺🇸</option>
                            <option value="+7">+7 🇨🇷</option>
                            <option value="+92">+92 🇵🇰</option>
                        </select>
                        <input type="tel" id="contact" placeholder="Enter phone number"/>
                    </div>
                    <button type="submit" className="login_btn" onClick={(e)=>e.preventDefault()}>Log-in</button>
                    <div className="sub">
                        <a href="#">Contact support</a>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginCard;
