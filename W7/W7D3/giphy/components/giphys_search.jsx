import React, { Component } from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerms: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchTerms: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let searchTerms = this.state.searchTerms;
    this.props.fetchSearchGiphys(searchTerms);
  }

  render() {
    return (
      <div>
        <form>
          <input type="text"
            value={this.state.searchTerms}
            onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>
            Search Giphy!
          </button>
        </form>

        <GiphysIndex giphys={this.props.giphys}/>
      </div>
    );
  }
}

export default GiphysSearch;
