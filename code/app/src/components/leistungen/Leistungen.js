import React, { Component } from 'react'
import './Leistungen.css'

export default class Leistungen extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
      }
      
    render() {


        return (
            <div className="leistungenDiv">
                <p className="pInLeistungenDiv">Wir bieten Ihnen das gesamte Spektrum der modernen Zahnheilkunde an:</p>
                <ul>
                    <li>Zahnärztliche Hypnose</li>
                    <li>Kinderzahnheilkunde</li>
                    <li>Zahnärztliche Homöopathie</li>
                    <li>professionelle Zahnreinigung</li>
                    <li>Ästhetische Zahnheilkunde:<br />
                Veneers, Implantate, Compositfüllungen, Inlays, Bleaching</li>
                    <li>Parodontosebehandlung</li>
                    <li>Digitales Röntgen</li>
                    <li>Hilfe bei Schmerzen</li>
                </ul>
            </div>
        )
    }
}