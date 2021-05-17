import React, { Component } from 'react';
import './ImgArea.css'

export default class ImgArea extends Component {


    state= {opacity1 : 1,
        opacity2 : 0,
        opacity3 : 0}

counter = 0;
opacityIntervall = 0;
opacitySummand1 = 0;
opacitySummand2 = 0;
opacitySummand3 = 0;

changeStyle = (linkstyle, headerstyle, navbarstyle) => {
    localStorage.setItem("style", JSON.stringify([linkstyle, headerstyle, navbarstyle]));
    this.props.switchStyle(linkstyle, headerstyle, navbarstyle)
}

changeOpacity = () => {

    if (this.counter === 0 || this.counter === 2000 || this.counter === 4000 ) { 
        this.opacitySummand1 = 0;
        this.opacitySummand2 = 0;
        this.opacitySummand3 = 0;
    }
    else if (this.counter === 1000){
        this.opacitySummand1 = -0.001;
        this.opacitySummand2 = 0.001;
        this.opacitySummand3 = 0;
    }
    else if (this.counter === 3000){
        this.opacitySummand1 = 0;
        this.opacitySummand2 = -0.001;
        this.opacitySummand3 = 0.001;
    }
    else if (this.counter === 5000){
        this.opacitySummand1 = 0.001;
        this.opacitySummand2 = 0;
        this.opacitySummand3 = -0.001;
    }

    this.counter++              
    this.setState({opacity1: this.state.opacity1 + this.opacitySummand1,
                opacity2: this.state.opacity2 + this.opacitySummand2,
                opacity3: this.state.opacity3 + this.opacitySummand3})
    if (this.counter === 6000) {
        this.counter = 0;
    }
}

componentDidMount(){
  this.opacityIntervall = setInterval(this.changeOpacity, 1);  
}

componentWillUnmount() {
  clearInterval(this.opacityIntervall)
}

    render() {
    
    return (
        <div className="imageDiv"> 
            <img className="imageInImageDiv staticPhoto" style= {{"opacity": this.state.opacity3 }} src="./images/pexels-cedric-fauntleroy-4269362.jpg" alt="fadingPhoto1" />
            <img className="imageInImageDiv fadingPhoto1" style= {{"opacity": this.state.opacity1 }} src="./images/pexels-cedric-fauntleroy-4269700.jpg" alt="fadingPhoto2"/>
            <img className="imageInImageDiv fadingPhoto2" style= {{"opacity": this.state.opacity2 }} src="./images/pexels-cedric-fauntleroy-4270367.jpg" alt="fadingPhoto3"/>
        </div>
    )
}
}
