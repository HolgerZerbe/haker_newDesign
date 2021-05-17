import React, { Component } from 'react'
import './Team.css'

export default class Team extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {

        return (
            <div className="teamDiv">
                <p className="pInTeamDiv">Unser Team steht für eine patientenorientierte qualitativ hochwertige Behandlung.</p>
                <div className="card">
                    <img className="photoPerson" src="./images/Anne_Haker.jpeg" alt="Anne Haker" />
                    <div className="descriptionPerson">
                        <table className="tableInTeam">
                            <thead>
                                <tr><td><b>Anne Haker</b></td><td><td></td></td></tr>
                            </thead>
                            <tbody>
                                <tr><td>Zahnärztin</td><td><td></td></td></tr>
                                <tr><td>Studium:</td><td>1991 - 1997</td><td className="lastCell">an der Humboldt-Universität in Berlin</td></tr>
                                <tr><td></td><td>1997</td><td className="lastCell">Staatsexamen und Approbation</td></tr>
                                <tr><td>Praxistätigkeit:</td><td>1999 - 2001</td><td className="lastCell">als Ausbildungsassistentin in freier Praxis</td></tr>
                                <tr><td>Niederlassung:</td><td>Februar 2001</td><td className="lastCell">als Zahnärztin in eigener Praxis</td></tr>
                                <tr><td>Qualifikation:</td><td>2001 - 2002</td><td className="lastCell">Zahnärztliche Hypnoseausbildung am Philip-Pfaff-Institut Berlin</td></tr>
                                <tr><td></td><td>2004 - 2005</td><td className="lastCell">zahnärztliche Homöopathieausbildung am Philip-Pfaff-Institut Berlin</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p>Des Weiteren betreut Sie ein Team bestehend aus  hochmotivierten und gut qualifizierten zahnmedizinischen Fachangestellten und Praxismitarbeitern.</p>
            </div>
        )
    }
}