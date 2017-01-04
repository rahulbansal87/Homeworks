import React, { Component } from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      term: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({term: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchSearchGiphys(this.state.term).then(
      this.setState({
        term: ""
      })
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            value={this.state.term}
            onChange={this.update}/>

           <button>Search Giphy</button>
        </form>
      </div>
    );
  }
}

export default GiphysSearch;
