import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Kontakt.css'

class Kontakt extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
        return (
            <div className = "kontaktDiv">

                <p className="pInKontaktDiv">Hier finden Sie uns:</p>
                <div className = "divInKontakt cardBox">
                    <div>
                    <p><b>Zahnarztpraxis Anne Haker</b></p>
                    <p>Köllnische Str. 63<br />
                    12439 Berlin<br />
                    Telefon: 030 - 636 15 88<br />
                    Telefax: 030 - 63 22 96 20<br />
                    </p>
                    <p>Vor der Praxis stehen ausreichend Parkplätze zur Verfügung.</p>    
                    <a className="linkKontakt" href="mailto:anne-haker@t-online.de">anne-haker@t-online.de</a>
                    </div>
                    <div className="kartenBildUndLink">
                    <img className="kartenBild" src="./images/OpenStreetMap_KoellnischeStrasse.png" alt="Strassenkarte"></img>
                    Quelle: <a className ="linkKontakt" href ="https://www.openstreetmap.de">https://www.openstreetmap.de</a></div>
                </div>
                <div className = "divInKontakt">
                    <p><b>Verkehranbindung:</b></p>
                    <p>- S45, S46, S47, S8, S85, S9 S-Bahnhof Schöneweide, dort aussteigen und dann ca. 10 min Fußweg</p>
                    <p>- Bus 165 Haltestelle Dokumentationszentrum NS-Zwangsarbeit, dort aussteigen und noch ca. 100 m laufen in der Köllnischen Straße</p>
                </div>
                <div className = "divInKontakt smaller">
                    <p><b>Sprechzeiten:</b></p>
                    <p className="spanFlex"><span>Montags: </span><span>{this.props.praxiszeiten.montag}</span> </p>
                    <p className="spanFlex"><span>Dienstags: </span><span>{this.props.praxiszeiten.dienstag}</span> </p>
                    <p className="spanFlex"><span>Mittwochs: </span><span>{this.props.praxiszeiten.mittwoch}</span> </p>
                    <p className="spanFlex"><span>Donnerstags: </span><span>{this.props.praxiszeiten.donnerstag}</span> </p>
                    <p className="spanFlex"><span>Freitags: </span><span>{this.props.praxiszeiten.freitag}</span></p>
                </div>
                <div className = "divInKontakt">
                    <p><b>Notdienste:</b></p>
                    <a className = "linkKontakt" href="https://www.kzv-berlin.de/patienten/notdienst/">Notdienste-Information der Kassenzahnärztlichen Vereinigung Berlin</a>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    praxiszeiten: state.praxiszeiten,
    info: state.info
})

export default connect(mapStateToProps, null)(Kontakt);