import React, { Component } from 'react';
import STORE from './store';
import Moment from 'react-moment';

class Notes extends Component {
  render() {
    console.log
    return (
      <div className="Notes">
        {STORE.notes.map(note => (
          <div className="Note" key={note.id}>
            <h2>{note.name} </h2>
            <p>
              {' '}
              Date modified on <Moment format="Do MMM YYYY">{note.modified}</Moment>
            </p>
            <button>Delete Note</button>
          </div>
        ))}
        <button> Add Note</button>
      </div>
    );
  }
}

export default Notes;
