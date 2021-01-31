import React from 'react'
import './LoginPage.css'

function LoginPage() {
    return (
        <div className="loginPage">
            <div className="loginPage__leftSide">
                <div className="loginPage__leftSideTop">
                    <p className="loginPage__title">SIGN IN</p>
                    <p className="loginPage__subTitle">Please sign in to your Amirah account</p>
                </div>
                <div className="loginPage__leftSideBottom">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>SIGN IN</button>
                </div>
            </div>
            <div className="loginPage__rightSide">
                <div className="loginPage__rightSideTop">
                    <p className="loginPage__title">CREATE AN ACCOUNT</p>
                    <p className="loginPage__subTitle">Save time during checkout, view your shopping bag and saved items from any device and access your order history.</p>
                </div>
                <div className="loginPage__rightSideBottom">
                    <button>REGISTER NOW</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
