import React, { Component } from 'react';
import STORE from './store';
import Moment from 'react-moment';

class FolderPage extends Component {
  render() {
    // filter notes object, if notes.folderId matches current params.folderId, add it to the array filteredNotes
    const filteredNotes = STORE.notes.filter(note => note.folderId === this.props.match.params.folderId);
console.log (filteredNotes);
    return (
      <div className = 'Notes'>
      {filteredNotes.map(note => 
        <div className="Note" key={note.id}>
          <h2>{note.name} </h2>
          <p> Date modified on <Moment format="Do MMM YYYY">
          {note.modified}
          </Moment></p>
          <button>Delete Note</button>
         
        </div>
      )}
      </div>
    );
  }
}

export default FolderPage;
