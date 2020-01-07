import React, { Component } from 'react';
import STORE from './store';
import { withRouter } from 'react-router-dom';

class FolderPage extends Component {
  render() {

    return (
      <div>
        <p>{this.props.match.params.id}</p>
      </div>
    )
  }
}

export default withRouter(FolderPage);