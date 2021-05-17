import React, { Component } from 'react';
import './Note.css';
import { connect } from 'react-redux';

class Note extends Component {
    state = { showNote : this.props.showNote};

    render() {
        return (
            this.state.showNote ?
            <div className="noteDiv">
                    {this.props.noteText.split('\n').map((item, key) => {
                        return <p className="pInNoteDiv" key={key}>{item}<br /></p>
                    })}
                    <button onClick={()=>this.setState({showNote: false})}>Hinweis nicht mehr anzeigen</button>
            </div>
            : null 
        )
    }
}

const mapStateToProps = (state) => ({
    info: state.info,
    noteText: state.noteText,
    showNote: state.showNote
})

export default connect(mapStateToProps, null)(Note);

