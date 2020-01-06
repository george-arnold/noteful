import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Folders extends Component {
  render() {
    return (
      <div className="Folders">
        <div>
          <Link to = "/folder/:folderId">
          <h2>Folder</h2>
          </Link>
          <h2>Folder</h2>
          <h2>Folder</h2>
          <button> Add Folder</button>
        </div>
      </div>
    );
  }
}

export default Folders;
