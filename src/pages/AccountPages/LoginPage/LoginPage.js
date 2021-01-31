import React from 'react'
import './LoginPage.css'

function LoginPage() {
    return (
        <div className="loginPage">
            <div className="loginPage__leftSide">
                <p className="loginPage__title">SIGN IN</p>
                <p className="loginPage__subTitle">Please sign in to your Amirah account</p>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>SIGN IN</button>
            </div>
            <div className="loginPage__rightSide">
                <p className="loginPage__title">CREATE AN ACCOUNT</p>
                <p className="loginPage__subTitle">Save time during checkout, view your shopping bag and saved items from any device and access your order history.</p>
                <button>REGISTER NOW</button>
            </div>
        </div>
    )
}

export default LoginPage
