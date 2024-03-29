import React from 'react';
import './Header.css';
import Navbar from '../navbar/Navbar';


export default function Header() {
    return (
        <div className="headerDiv">
            <Navbar className="NavBar"/>
            <div className="titleNameLogo">
                <img className = "logo" src="./images/Haker_Logo_ohneStrich_freigestellt_weiss.png" alt="whiteLogo" />
                <div className="titleName">
                    <h3 className="praxisAsTitle">ZAHNARZTPRAXIS</h3>
                    <h1 className="headlineName">ANNE HAKER</h1>
                </div>
            </div>


        </div>
    )
}
