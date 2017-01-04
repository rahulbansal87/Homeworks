import React, { Component } from 'react';

class GiphysIndex extends React.Component {
  render() {
    return(
      <div>
        <ul>
          {this.props.giphys.map((giphy, i) => (
            <li key={i}>
              <img src={giphy.images.fixed_height.url} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default GiphysIndex;
