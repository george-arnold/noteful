import React, { Component } from 'react';
import STORE from './store'

class Notes extends Component {
  render() {
    return (
      <div className="Notes">
        {STORE.notes.map(note => 
          <div className="Note" key={note.id}>
            <h2>{note.name} </h2>
          </div>
        )}
        <button> Add Note</button>
      </div>
    );
  }
}

export default Notes;
