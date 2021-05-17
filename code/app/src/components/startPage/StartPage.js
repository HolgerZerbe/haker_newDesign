import React, {Component} from 'react';
import './StartPage.css';

export default class StartPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    render() {
        return (
            <div className="startPageDiv">
                <p className="quote">
                    Wer alles mit einem Lächeln beginnt, dem wird das meiste gelingen. (Dalai Lama)
            </p>
                <p className="welcome">
                    Herzlich Willkommen auf der Webseite meiner Zahnarztpraxis.
            </p>
                <p>
                    Mein Team und ich legen größten Wert auf eine absolut schmerzfreie Behandlung in angenehmer entspannter familiärer Atmosphäre.
            </p>
                <p>
                    Wir bieten Ihnen das gesamte Spektrum der modernen Zahnheilkunde an. Besonderen Wert legen wir auf eine nachhaltige Behandlung und qualitativ hochwertigen Zahnersatz.
            </p>
                <p>
                    Oberste Priorität hat für uns immer der Erhalt des einzelnen Zahnes, denn nichts ist so perfekt wie die Natur.
            </p>
                <p>
                    Wir freuen uns auf Ihren Besuch. Überzeugen Sie sich selbst.
            </p>
                <p>
                    Es erwartet Sie ein hochmotiviertes und qualifiziertes Team und eine Zahnärztin, die ihren Beruf mit viel Liebe ausübt.
            </p>
            </div>
        )
    }
}

