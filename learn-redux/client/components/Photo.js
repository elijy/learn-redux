import React from 'react';
import {Link} from 'react-router';

const Photo = React.createClass({
  render () {
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${this.props.post.code}`} >
          {this.props.post.caption}
          </Link>
          <button onClick={this.props.increment.bind(null, this.props.i)} className='likes'>&hearts;{this.props.post.likes}</button>
        </div>
      </figure>
    )
  }
});

export default Photo;
