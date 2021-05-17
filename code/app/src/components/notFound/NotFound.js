import React from 'react';
import './NotFound.css'

export default function NotFound() {
    return (
        <div className="notFoundDiv">
            <p className="errorNumber">404</p>
            <p className="errorText">Diese Seite existiert leider nicht!</p>
        </div>
    )
}

