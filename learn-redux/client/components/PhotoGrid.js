import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo';

const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map( (item, i)=> <Photo {...this.props} key={i} i={i} post={item}/>)}
      </div>
    );
  }
});

export default PhotoGrid;
