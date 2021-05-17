import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import Footer from './components/footer/Footer';
import StartPage from './components/startPage/StartPage';
import NotFound from './components/notFound/NotFound';
import Team from './components/team/Team';
import ImgArea from './components/imgArea/ImgArea';
import Header from './components/header/Header';
import Kontakt from './components/kontakt/Kontakt';
import Leistungen from './components/leistungen/Leistungen';
import Impressum from './components/impressum/Impressum';
import Datenschutz from './components/datenschutz/Datenschutz';
import Note from './components/note/Note';

class App extends Component {



  render (){
    console.log("Anzeigen ist "+this.props.showNote)
    return (
      <Router> 
        <div className="appDiv">
        <Header />
        <ImgArea />
        {/* {this.props.showNote ? <Note /> : null} */}
        <Note />
        <div className="changingArea">
            <Switch>
                <Route exact path="/" component={StartPage} />
                <Route exact path="/team" component={Team} />
                <Route exact path="/kontakt" component={Kontakt} />
                <Route exact path="/leistungen" component={Leistungen} />
                <Route exact path="/impressum" component={Impressum} />
                <Route exact path="/datenschutz" component={Datenschutz} />
                <Route component={NotFound} />
            </Switch>
        </div>
        <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
        info: state.info
})

export default connect(mapStateToProps, null)(App);

