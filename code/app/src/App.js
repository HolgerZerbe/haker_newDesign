import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import config from "./config.json";

// import Footer from './components/footer/Footer';
import Footer from './components/footer/Footer2';
// import Footer from './components/footer/Footer3';
import StartPage from './components/startPage/StartPage';
import NotFound from './components/notFound/NotFound';
import Team from './components/team/Team';
import ImgArea from './components/imgArea/ImgArea';
// import Header from './components/header/Header';
// import Header from './components/header/Header2';
import Header from './components/header/Header3';
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
        <Note />
        <div className="changingArea">
            <Switch>
                
                <Route exact path= {config.gh_pages + "/"} component={StartPage} />
                <Route exact path= {config.gh_pages + "/team"} component={Team} />
                <Route exact path= {config.gh_pages + "/kontakt"} component={Kontakt} />
                <Route exact path= {config.gh_pages + "/leistungen"} component={Leistungen} />
                <Route exact path= {config.gh_pages + "/impressum"} component={Impressum} />
                <Route exact path= {config.gh_pages + "/datenschutz"} component={Datenschutz} />
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

