import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import STORE from './store';
import FolderPage from './FolderPage';


class Folders extends Component {
  render() {
    return (
      <div className="Folders">
        {STORE.folders.map(folder => (
          <Link key={folder.id} to = {`/folder/${folder.id}`}> <div className='folder' >
            <h2> {folder.name}</h2>
          </div> </Link>
        ))}
        <button> Add Folder</button>
        <Route path="folder/:folderId" component={FolderPage} />
      </div>
    );
  }
}

export default Folders;
