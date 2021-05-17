import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Footer.css';
import {Link} from 'react-router-dom';
import config from "../../config.json";



class Footer extends Component {

    render() {

        return (
            <div className="footerDiv">
                <img className = "logoInFooter" src="./images/greyLogo.png" alt="blackLogo" />
                <div className = "divInFooter">
                    <p>Zahnarztpraxis Anne Haker</p>
                    <p>Köllnische Str. 63<br />
                    12439 Berlin<br />
                    Telefon: 030 - 636 15 88<br />
                    Telefax: 030 - 63 22 96 20<br />
                    </p>
                    <a className="linkFooter" href="mailto:anne-haker@t-online.de">anne-haker@t-online.de</a>
                    <Link className="linkFooter" to= {config.gh_pages + "/impressum"}>Impressum</Link>
                    <Link className="linkFooter" to= {config.gh_pages + "/datenschutz"}>Datenschutzerklärung</Link>
                </div>
                <div className = "divInFooter">
                    <p>Sprechzeiten:</p>
                    <p className="spanFlex"><span>Montags: </span><span>{this.props.praxiszeiten.montag}</span> </p>
                    <p className="spanFlex"><span>Dienstags: </span><span>{this.props.praxiszeiten.dienstag}</span> </p>
                    <p className="spanFlex"><span>Mittwochs: </span><span>{this.props.praxiszeiten.mittwoch}</span> </p>
                    <p className="spanFlex"><span>Donnerstags: </span><span>{this.props.praxiszeiten.donnerstag}</span> </p>
                    <p className="spanFlex"><span>Freitags: </span><span>{this.props.praxiszeiten.freitag}</span></p>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    praxiszeiten: state.praxiszeiten
})

export default connect(mapStateToProps, null)(Footer);