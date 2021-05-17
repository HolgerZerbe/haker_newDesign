import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Navbar.css';
import {NavLink} from 'react-router-dom';


class Navbar extends Component {


    render() {

    

        console.log(this.props);
        return (
            <div className="navbarDiv">
                <ul>
                <li><NavLink className="linkStyle" exact path to= {config.gh_pages + "/"}> Willkommen </NavLink></li>
                <li><NavLink className="linkStyle" exact path to= {config.gh_pages + "/leistungen"}> Leistungen </NavLink></li>
                <li><NavLink className="linkStyle" exact path to= {config.gh_pages + "/team"}> Praxisteam </NavLink></li>
                <li><NavLink className="linkStyle" exact path to= {config.gh_pages + "/kontakt"}> Kontakt </NavLink></li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    activeLinks: state.activeLinks
})

export default connect(mapStateToProps, null)(Navbar);
